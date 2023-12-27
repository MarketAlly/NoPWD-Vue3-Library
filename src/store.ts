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

export default function useNoPWD(emit?: EmitType | undefined): INoPWDStore {

    const requestUrl = useStorage('nopwd_request','api/requestloginkey', sessionStorage);
    const verifyUrl = useStorage('nopwd_verify','api/verifyaccess', sessionStorage);
    const confirmUrl = useStorage('nopwd_confirm','api/confirmaccess', sessionStorage);
    const logoutUrl = useStorage('nopwd_logout','api/logout', sessionStorage);

    const devUrl = useStorage('nopwd_dev','https://marketally.ngrok.io/', sessionStorage);
    const prodUrl = useStorage('nopwd_prod','https://www.nopwd.com/', sessionStorage);

    const appUrl = useStorage('nopwd_app','/app', sessionStorage);
    const loginUrl = useStorage('nopwd_login','/auth/login', sessionStorage);
    const logConsole = useStorage('nopwd_log', false, sessionStorage);
    const regionId = useStorage('nopwd_region', 1, sessionStorage);

    const success = ref(false);
    const hideText = ref(false);
    const is_error = ref(false);
    const code = ref(0);
    const IDLogin = useStorage('nopwd_loginid', Guid.EMPTY, sessionStorage);
    const auth = useStorage('nopwd_auth', 0, sessionStorage);
    const user_data = useStorage('nopwd_session', '', sessionStorage);

    function setBase(dev: string, prod: string, region: number, error: boolean) {
      if (dev != undefined && dev != null && dev != '')
        devUrl.value = dev;
      if (prod != undefined && prod != null && prod != '')
        prodUrl.value = prod;
      regionId.value = region;
      logConsole.value = error;
    }

    function setRoutes(app: string, login: string) {
      if (app != undefined && app != null && app != '')
        appUrl.value = app;
      if (login != undefined && login != null && login != '')
        loginUrl.value = login;
    }

    function setUrls(request: string, verify: string, confirm: string, logout: string) {
      if (request != undefined && request != null && request != '')
        requestUrl.value = request;
      if (verify != undefined && verify != null && verify != '')
        verifyUrl.value = verify;
      if (confirm != undefined && confirm != null && confirm != '')
        confirmUrl.value = confirm;
      if (logout != undefined && logout != null && logout != '')
        logoutUrl.value = logout;
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
      if (auth.value <= -1) {
        return auth.value; 
      }
      IDLogin.value = Guid.EMPTY;
      if (IDLogin.value === Guid.EMPTY.toString()) {
        Message.value = t('auth.loading');
        IDLogin.value = Guid.create().toString();
        rqValue.value.id = IDLogin.value;
        if (logConsole.value)
          console.log('Login: ' + IDLogin.value);
        serviceCall.setBaseURL(devUrl.value, prodUrl.value, regionId.value);
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
            setTimeout(checkQRLogin, 1000);
            if (IsDark.value) {
              Message.value = t('auth.codedark');
            } else {
              Message.value = t('auth.codelight');
            }
            return 1;
          } else {
            if (logConsole.value)
              console.log(res.message);
            Message.value = t('auth.codeerror');
            return -1;
          }
        }).catch((error: { message: string; }) => {
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
      if (auth.value <= -1) {
        return auth.value; 
      }
      serviceCall.setBaseURL(devUrl.value, prodUrl.value, regionId.value);
      let aURL = serviceCall.getBaseURL() + verifyUrl.value
      if (logConsole.value)
          console.log('Check: ' + IDLogin.value);
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
              setTimeout(checkAccess, 20000);
              if (emit)
                emit("redirect", appUrl.value)
              if (emit)
                emit("status", auth.value)
              return 1;
            } else if (res.code < 0) {
              auth.value = 0;
              if (emit)
                emit("status", auth.value)
              return -1;
            } else {
              setTimeout(checkQRLogin, 1000);
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
      if (auth.value < 2) {
        return;
      }
      serviceCall.setBaseURL(devUrl.value, prodUrl.value, regionId.value);
      if (logConsole.value)
          console.log('Check: ' + IDLogin.value);
      let aURL = serviceCall.getBaseURL() + confirmUrl.value
      await serviceCall.apiClient
        .get(aURL, config())
        .then((response: { data: apiResponse; }) => {
          const res: apiResponse = response.data;

          if (res.success) {
            success.value = res.success;
            code.value = res.code;
            if (res.code > 0) {
              setTimeout(checkAccess, 20000);
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
          if (emit)
            emit("error", error.message)
          if (logConsole.value)
            console.log(error);
          is_error.value = true;
          Message.value = t('auth.codeerror');
        });
    }

    async function logout() {
      if (auth.value <= 0) {
        return; 
      }
      auth.value = -1;
      serviceCall.setBaseURL(devUrl.value, prodUrl.value, regionId.value);
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