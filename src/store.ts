import { ref } from 'vue';
import { useTranslations } from './useTranslations';
import { useStorage } from '@vueuse/core';
import { Guid } from 'guid-typescript';
import serviceCall from './interface';
import { type IValue, type apiResponse, type apiResponses, type INoPWDStore } from './interface';

type EmitType = {
  (event: 'error', args: string): void;
  (event: 'redirect', args: string): void;
  (event: 'status', args: number): void;
  (event: 'user', args: string): void;
};

export default function useNoPWD(emit?: EmitType | undefined, instanceId: string = ''): INoPWDStore {
    // Store URLs in sessionStorage for persistence
    const requestUrl = useStorage(`nopwd_request_${instanceId}`, 'api/requestloginkey', sessionStorage);
    const verifyUrl = useStorage(`nopwd_verify_${instanceId}`, 'api/verifyaccess', sessionStorage);
    const confirmUrl = useStorage(`nopwd_confirm_${instanceId}`, 'api/confirmaccess', sessionStorage);
    const logoutUrl = useStorage(`nopwd_logout_${instanceId}`, 'api/logout', sessionStorage);

    // Add instance ID to all storage keys
    const devUrl = useStorage(`nopwd_dev_${instanceId}`, 'https://marketally.ngrok.io/', sessionStorage);
    const prodUrl = useStorage(`nopwd_prod_${instanceId}`, 'https://www.nopwd.com/', sessionStorage);
    const appUrl = useStorage(`nopwd_app_${instanceId}`, '/app', sessionStorage);
    const loginUrl = useStorage(`nopwd_login_${instanceId}`, '/auth/login', sessionStorage);
    const logConsole = useStorage(`nopwd_log_${instanceId}`, false, sessionStorage);
    const regionId = useStorage(`nopwd_region_${instanceId}`, 1, sessionStorage);
    const enableCheck = useStorage(`nopwd_check_${instanceId}`, false, sessionStorage);
    const intervalId = useStorage(`nopwd_interval_${instanceId}`, 1000, sessionStorage);
    const accessId = useStorage(`nopwd_access_${instanceId}`, 20000, sessionStorage);
    const IDLogin = useStorage(`nopwd_loginid_${instanceId}`, Guid.EMPTY, sessionStorage);
    const auth = useStorage(`nopwd_auth_${instanceId}`, 0, sessionStorage);
    const user_data = useStorage(`nopwd_session_${instanceId}`, '', sessionStorage);

    const success = ref(false);
    const hideText = ref(false);
    const is_error = ref(false);
    const code = ref(0);

    const mounted = ref(false);

    function setMounted(value: boolean) {
      mounted.value = value;
    }
    
    async function reset() {
      console.log('Reset called - Clearing timeouts');
      clearTimeout();
      console.log('Reset called - Setting mounted false');
      mounted.value = false;
      auth.value = 0;
      success.value = false;
      is_error.value = false;
      user_data.value = '';
      IDLogin.value = Guid.EMPTY.toString();
      QRCode.value = '';
      Message.value = t('auth.prepare');
      if (emit) {
        emit("status", auth.value);
        emit("user", user_data.value);
        emit("redirect", loginUrl.value);
      }
    }

    function setBase(dev: string, prod: string, region: number, error: boolean, interval: number, access: number) {
      if (dev != undefined && dev != null && dev != '')
        devUrl.value = dev;
      if (prod != undefined && prod != null && prod != '')
        prodUrl.value = prod;
      regionId.value = region;
      logConsole.value = error;
      intervalId.value = interval;
      accessId.value = access;
    }

    function setRoutes(app: string, login: string, loginCheck: boolean = false) {
      if (app != undefined && app != null && app != '')
        appUrl.value = app;
      if (login != undefined && login != null && login != '')
        loginUrl.value = login;
      enableCheck.value = loginCheck;
    }

    function setUrls(request: string, verify: string, confirm: string, logout: string) {
      if (request) {
        requestUrl.value = request;
      }
      if (verify) {
        verifyUrl.value = verify;
      }
      if (confirm) {
        confirmUrl.value = confirm;
      }
      if (logout) {
        logoutUrl.value = logout;
      }
    }
    
    const { t } = useTranslations();

    function config() {
      return {
        headers: {
          Accept: 'application/json',
          'X-LoginId': IDLogin.value,
          'Content-Type': 'application/json'
        }
      };
    };

    const IsDark = ref(false);
    const QRCode = ref('');
    const Message = ref(t('auth.prepare'));
    const rqValue = ref<IValue>({ id: IDLogin.value, code: null, value: null, subid: null, userid: null, count: null, page: null, fromdate: null });

    async function loginQRCode(): Promise<number | undefined> {
      if (!mounted.value || auth.value <= -1) {
        clearTimeout();
        return auth.value;
      }
      IDLogin.value = Guid.EMPTY;
      if (IDLogin.value === Guid.EMPTY.toString()) {
        is_error.value = false
        Message.value = t('auth.loading');
        if (requestUrl.value.includes('/requestloginkey/')) {
          const urlParts = requestUrl.value.split('/requestloginkey/'); // Split at '/requestloginkey/'
          const tempID = urlParts[1]?.trim(); // Get the part after '/requestloginkey/'
          if (tempID) {
            IDLogin.value = tempID; 
          } else {
            console.warn('No value found after "/requestloginkey/".');
            return auth.value; 
          }
        } else {
          IDLogin.value = Guid.create().toString();
        }
        rqValue.value.id = IDLogin.value;
        if (logConsole.value)
          console.log('Login: ' + IDLogin.value);
        serviceCall.setBaseURL(devUrl.value, prodUrl.value);
        let aURL = serviceCall.getBaseURL() + requestUrl.value
        return await serviceCall.apiClient.get<apiResponse>(aURL, config()).then((response: { data: apiResponse; }) => {
          const res: apiResponse = response.data;
          if (res.success) {
            Message.value = '';
            QRCode.value = "https://www.nopwd.com?r=" + regionId.value + "&l=" + IDLogin.value;
            console.log(QRCode.value);
            success.value = res.success;
            code.value = res.code;
            auth.value = 1;
            loginTimeoutId  = setTimeout(checkQRLogin, intervalId.value);
            if (IsDark.value) {
              Message.value = t('auth.codedark');
            } else {
              Message.value = t('auth.codelight');
            }
            return 1;
          } else {
            is_error.value = true
            if (logConsole.value)
              console.log(res.message);
            Message.value = t('auth.codeerror');
            return -1;
          }
        }).catch((error: { message: string; }) => {
          is_error.value = true
          console.log(error);
          if (emit)
            emit("error", error.message)
          is_error.value = true;
          Message.value = t('auth.codeerror');
          return -1;
        });
      } else {
        if (IsDark.value) {
          Message.value = t('auth.codedark');
        } else {
          Message.value = t('auth.codelight');
        }
        return checkQRLogin();
      }
    }

    function readMessage(showButton : boolean = false) {
      if (is_error.value) {
        Message.value = t('auth.codeerror');
      } else if (IsDark.value) {
        Message.value = t('auth.codedark');
      } else if (!IsDark.value) {
        Message.value = t('auth.codelight');
      } 
      return Message.value;
    }

    async function checkQRLogin(): Promise<number | undefined> {
      if (!mounted.value || auth.value <= -1 || auth.value === 0) {
        clearTimeout();
        return auth.value;
      }
      serviceCall.setBaseURL(devUrl.value, prodUrl.value);
      let aURL = serviceCall.getBaseURL() + verifyUrl.value

      if (logConsole.value){
        if (verifyUrl.value.includes('/verifyaccess/')) {
          const urlParts = requestUrl.value.split('/verifyaccess/'); // Split at '/requestloginkey/'
          const tempID = urlParts[0]?.trim(); // Get the part after '/requestloginkey/'
          if (tempID) {
            console.log('Check SubLogin: ' + tempID);
          } else {
            return auth.value; 
          }
        } else {
          console.log('Check Login: ' + IDLogin.value);
        }
      }

      return await serviceCall.apiClient
        .get(aURL, config())
        .then(async (response: { data: apiResponses<any>; }) => {
          const res: apiResponses<any> = response.data;
          if (res.success) {
            success.value = res.success;
            code.value = res.code;
            if (res.code > 0) {
              user_data.value = JSON.stringify(res.data);
              if (emit)
                emit("user", user_data.value)
              auth.value = 2;
              if (emit)
                emit("redirect", appUrl.value)
              if (emit)
                emit("status", auth.value)
              if (!mounted.value || auth.value <= -1) {
                return auth.value; 
              } else {
                await checkAccess();
              }
              return 1;
            } else if (res.code < 0) {
              auth.value = 0;
              if (emit)
                emit("status", auth.value)
              return -1;
            } else {
              verifyTimeoutId  = setTimeout(checkQRLogin, intervalId.value);
              if (IsDark.value) {
                Message.value = t('auth.codedark');
              } else {
                Message.value = t('auth.codelight');
              }
              return 0;
            }
          } else {
            if (logConsole.value)
                console.log(res.message);
            await loginQRCode()
          }
        }).catch((error: { message: string; }) => {
          is_error.value = true
          if (emit)
            emit("error", error.message)
          if (logConsole.value)
            console.log(error);
          is_error.value = true;
          Message.value = t('auth.codeerror');
          return -1;
        });
    }

    async function checkAccess() {
      if (enableCheck.value == false)
        return;
      if (!mounted.value || auth.value < 2) {
        clearTimeout();
        return;
      }
      serviceCall.setBaseURL(devUrl.value, prodUrl.value);
      if (logConsole.value)
          console.log('Check Access: ' + IDLogin.value);
      let aURL = serviceCall.getBaseURL() + confirmUrl.value
      await serviceCall.apiClient
        .get(aURL, config())
        .then((response: { data: apiResponse; }) => {
          const res: apiResponse = response.data;

          if (res.success) {
            success.value = res.success;
            code.value = res.code;
            if (res.code > 0) {
              accessTimeoutId  = setTimeout(checkAccess, accessId.value);
            } else {
              auth.value = 0;
              if (emit)
                emit("status", res.code)
              user_data.value = '';
              if (emit)
                emit("user", user_data.value)
              if (emit)
                emit("redirect", loginUrl.value)
            }
          }
        }).catch((error: { message: string; }) => {
          is_error.value = true
          if (emit)
            emit("error", error.message)
          if (logConsole.value)
            console.log(error);
          is_error.value = true;
          Message.value = t('auth.codeerror');
        });
    }

    let loginTimeoutId: NodeJS.Timeout | null = null;
    let verifyTimeoutId: NodeJS.Timeout | null = null;
    let accessTimeoutId: NodeJS.Timeout | null = null;

    function clearTimeout() {
      const existingTimers = [loginTimeoutId, verifyTimeoutId, accessTimeoutId];
      existingTimers.forEach(timer => {
        if (timer) window.clearTimeout(timer);
      });
      loginTimeoutId = verifyTimeoutId = accessTimeoutId = null;
    }

    async function logout() {
      mounted.value = false;  // Stop checks immediately
      auth.value = -1;
      clearTimeout(); // Add this to clear any pending timeouts
      if (auth.value <= 0) return;

      serviceCall.setBaseURL(devUrl.value, prodUrl.value);
      if (logConsole.value)
          console.log('Logout: ' + IDLogin.value);
      let aURL = serviceCall.getBaseURL() + logoutUrl.value
      await serviceCall.apiClient
        .get(aURL, config())
        .then((response: { data: apiResponse; }) => {
          const res: apiResponse = response.data;
          success.value = res.success;
          code.value = res.code;
          auth.value = 0;
          if (success.value) {
            if (emit)
              emit("status", auth.value)
            user_data.value = '';
            if (emit)
              emit("user", user_data.value)
            IDLogin.value = Guid.EMPTY.toString();
          }
          if (emit)
            emit("redirect", loginUrl.value)
        });
        auth.value = 0;
    }

    return {
      auth,
      success,
      user_data,
      code,
      IDLogin,
      QRCode,
      IsDark,
      Message,
      is_error,
      mounted,
      reset,
      setMounted,
      loginQRCode,
      checkAccess,
      checkQRLogin,
      logout,
      config,
      setUrls,
      setRoutes,
      readMessage,
      setBase
    };
  }