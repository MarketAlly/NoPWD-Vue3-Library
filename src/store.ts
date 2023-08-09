import { ref } from 'vue';
import { useTranslations } from './useTranslations';
import { useStorage } from '@vueuse/core';
import { useRouter } from 'vue-router';
import { Guid } from 'guid-typescript';
import serviceCall from './interface';
import { INoPWD, type IValue, type apiResponse, type apiResponses, type INoPWDStore } from './interface';

export default function useNoPWD(): INoPWDStore {

    const requestUrl = useStorage('nopwd_request','api/requestloginkey', sessionStorage);
    const verifyUrl = useStorage('nopwd_verify','api/verifyaccess', sessionStorage);
    const confirmUrl = useStorage('nopwd_confirm','api/confirmaccess', sessionStorage);
    const logoutUrl = useStorage('nopwd_logout','api/logout', sessionStorage);

    const devUrl = useStorage('nopwd_dev','http://localhost:3000/', sessionStorage);
    const prodUrl = useStorage('nopwd_prod','https://www.nopwd.com/', sessionStorage);

    const appUrl = useStorage('nopwd_app','/app', sessionStorage);
    const loginUrl = useStorage('nopwd_login','/auth/login', sessionStorage);
    const logConsole = useStorage('nopwd_log', false, sessionStorage);

    const router = useRouter();

    function setBase(dev: string, prod: string) {
      if (dev != undefined && dev != null && dev != '')
        devUrl.value = dev;
      if (prod != undefined && prod != null && prod != '')
        prodUrl.value = prod;
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

    const success = ref(false);
    const is_error = ref(false);
    const code = ref(0);
    const IDSite = useStorage('nopwd_siteid', Guid.EMPTY, sessionStorage);
    const IDSiteCall = useStorage('nopwd_sitecallid', Guid.EMPTY, sessionStorage);
    const IDLogin = useStorage('nopwd_loginid', Guid.EMPTY, sessionStorage);
    const auth = useStorage('nopwd_auth', 0, sessionStorage);
    const userSession = useStorage('nopwd_session', '', sessionStorage);

    const { t } = useTranslations();

    function config() {
      return {
        headers: {
          Accept: 'application/json',
          'X-LoginId': IDLogin.value,
          'X-SiteCallId': IDSiteCall.value,
          'Content-Type': 'application/json'
        }
      };
    };

    const IsDark = ref(false);
    const QRCode = ref('');
    const Message = ref(t('auth.prepare'));
    const rqValue = ref<IValue>({ id: IDLogin.value, code: null, value: null, subid: null, userid: null, count: null, page: null, fromdate: null });

    async function loginQRCode(): Promise<number | undefined> {
      IDLogin.value = Guid.EMPTY;
      if (IDLogin.value === Guid.EMPTY.toString()) {
        Message.value = t('auth.loading');
        IDLogin.value = Guid.create().toString();
        rqValue.value.id = IDLogin.value;
        if (logConsole.value)
          console.log('Login: ' + IDLogin.value);
        serviceCall.setBaseURL(devUrl.value, prodUrl.value);
        let aURL = serviceCall.getBaseURL() + requestUrl.value
        return await serviceCall.apiClient.get<apiResponse>(aURL, config()).then((response) => {
          const res: apiResponse = response.data;
          if (res.success) {
            Message.value = '';
            QRCode.value = "https://www.nopwd.com?loginid=" + IDLogin.value;

            success.value = res.success;
            code.value = res.code;
            auth.value = 1;
            setTimeout(checkQRLogin, 1000);
            if (IsDark) {
              Message.value = t('auth.codedark');
            } else {
              Message.value = t('auth.codelight');
            }
            return 1;
          } else {
            Message.value = t('auth.codeerror');
            return -1;
          }
        }).catch(error => {
          console.log(error);
          is_error.value = true;
          Message.value = t('auth.codeerror');
          return -1;
        });
      } else {
        if (IsDark) {
          Message.value = t('auth.codedark');
        } else {
          Message.value = t('auth.codelight');
        }
        checkQRLogin();
        return 0;
      }
    }

    async function checkQRLogin(): Promise<number | undefined> {
      serviceCall.setBaseURL(devUrl.value, prodUrl.value);
      let aURL = serviceCall.getBaseURL() + verifyUrl.value
      if (logConsole.value)
          console.log('Check: ' + IDLogin.value);
      return await serviceCall.apiClient
        .get(aURL, config())
        .then(async (response) => {
          const res: apiResponses<INoPWD> = response.data;
          if (res.success) {
            success.value = res.success;
            code.value = res.code;
            if (res.code > 0) {
              auth.value = 2;
              IDSiteCall.value = res.data.sitecallid;
              userSession.value = JSON.stringify(res.data);
              setTimeout(checkAccess, 20000);
              if (appUrl.value !== undefined || appUrl.value !== null || appUrl.value !== '')
                router.push(appUrl.value);
              return 1;
            } else if (res.code < 0) {
              auth.value = 0;
              checkAccess();
              return -1;
            } else {
              setTimeout(checkQRLogin, 1000);
              if (IsDark) {
                Message.value = t('auth.codedark');
              } else {
                Message.value = t('auth.codelight');
              }
              return 0;
            }
          } else {
            await loginQRCode()
          }
        }).catch(error => {
          if (logConsole.value)
            console.log(error);
          is_error.value = true;
          Message.value = t('auth.codeerror');
          return -1;
        });
    }

    async function checkAccess() {
      if (auth.value < 2) {
        logout();
        return;
      }
      serviceCall.setBaseURL(devUrl.value, prodUrl.value);
      if (logConsole.value)
          console.log('Check: ' + IDLogin.value);
      let aURL = serviceCall.getBaseURL() + confirmUrl.value
      await serviceCall.apiClient
        .get(aURL, config())
        .then((response) => {
          const res: apiResponse = response.data;

          if (res.success) {
            success.value = res.success;
            code.value = res.code;
            if (res.code > 0) {
              setTimeout(checkAccess, 20000);
            } else {
              auth.value = 0;
              userSession.value = '';
              if (loginUrl.value !== undefined || loginUrl.value !== null || loginUrl.value !== '')
                router.push(loginUrl.value);
            }
          }
        }).catch(error => {
          if (logConsole.value)
            console.log(error);
          is_error.value = true;
          Message.value = t('auth.codeerror');
        });
    }

    async function logout() {
      auth.value = 0;
      serviceCall.setBaseURL(devUrl.value, prodUrl.value);
      if (logConsole.value)
          console.log('Logout: ' + IDLogin.value);
      let aURL = serviceCall.getBaseURL() + logoutUrl.value
      await serviceCall.apiClient
        .get(aURL, config())
        .then((response) => {
          const res: apiResponse = response.data;
          success.value = res.success;
          code.value = res.code;

          if (success.value) {
            auth.value = 0;
            IDLogin.value = Guid.EMPTY.toString();
          }
          if (loginUrl.value !== undefined || loginUrl.value !== null || loginUrl.value !== '')
            router.push(loginUrl.value);
        });
    }

    return {
      auth,
      success,
      code,
      IDLogin,
      IDSiteCall,
      IDSite,
      QRCode,
      Message,
      is_error,
      loginQRCode,
      checkAccess,
      checkQRLogin,
      logout,
      config,
      setUrls,
      setRoutes,
      setBase
    };
  }