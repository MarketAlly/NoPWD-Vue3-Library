import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStorage } from '@vueuse/core'
import { useRouter } from 'vue-router';
import { INoPWD, type IValue, type apiResponse, type apiResponses } from './interface'
import { Guid } from 'guid-typescript'
import serviceCall from './interface'

export const useAuthStore = defineStore(
    'useAuthStore',
    () => {

      const requestUrl = ref('api/requestloginkey')
      const verifyUrl = ref('api/verifyaccess')
      const confirmUrl = ref('api/confirmaccess')
      const logoutUrl = ref('api/logout')
      
      const devUrl = ref('http://localhost:3000/')
      const prodUrl = ref('https://www.nopwd.com')

      const appUrl = ref('/app')
      const loginUrl = ref('/auth/login')

      const router = useRouter();

      function setBase(dev: string, prod: string) {
        devUrl.value = dev
        prodUrl.value = prod
      }

      function setRoutes(app: string, login: string) {
        appUrl.value = app
        loginUrl.value = login
      }

      function setUrls(request: string, verify: string, confirm: string, logout: string) {
        requestUrl.value = request
        verifyUrl.value = verify
        confirmUrl.value = confirm
        logoutUrl.value = logout
      }

      const success = ref(false)
      const is_error = ref(false)
      const code = ref(0)
      const IDLogin = useStorage('nopwd_login', Guid.EMPTY)
      const auth = useStorage('nopwd_auth', 0)
      const userSession = useStorage('nopwd_session', '')
  
      const { t } = useI18n()

      function config() {
        return {
          headers: {
            Accept: 'application/json',
            'X-LoginId': IDLogin.value,
            'Content-Type': 'application/json'
          }
        }
      };

      const IsDark = ref(false)
      const QRCode = ref('')
      const Message = ref(t('auth.prepare'))
      const rqValue = ref<IValue>({ id: IDLogin.value, code: null, value: null, subid: null, userid: null, count: null, page: null, fromdate: null })
  
      async function loginQRCode() : Promise<number | undefined> {
        IDLogin.value = Guid.EMPTY
        if (IDLogin.value === Guid.EMPTY.toString()) {
          Message.value = t('auth.loading')
          IDLogin.value = Guid.create().toString()
          rqValue.value.id = IDLogin.value
          serviceCall.setBaseURL(devUrl.value, prodUrl.value)
          return serviceCall.apiClient.get<apiResponse>(requestUrl.value, config()).then((response) => {
            const res: apiResponse = response.data
            if (res.success) {
              Message.value = ''
              QRCode.value = "https://www.nopwd.com?loginid=" + IDLogin.value
              
              success.value = res.success
              code.value = res.code
              auth.value = 1
              setTimeout(checkQRLogin, 1000)
              if (IsDark) {
                Message.value = t('auth.codedark')
              } else {
                Message.value = t('auth.codelight')
              }
              return 1
            } else {
              Message.value = t('auth.codeerror')
              return -1
            }
          }).catch(error => {
            console.log(error)
            is_error.value = true
            Message.value = t('auth.codeerror')
            return -1
          })
        } else {
          if (IsDark) {
            Message.value = t('auth.codedark')
          } else {
            Message.value = t('auth.codelight')
          }
          checkQRLogin()
          return 0
        }
      }
  
      async function checkQRLogin() : Promise<number | undefined> {
        serviceCall.setBaseURL(devUrl.value, prodUrl.value)
        return await serviceCall.apiClient
          .get(verifyUrl.value, config())
          .then((response) => {
            const res: apiResponses<INoPWD> = response.data
            
            if (res.success) {
              success.value = res.success
              code.value = res.code
              if (res.code > 0) {
                auth.value = 2
                userSession.value = JSON.stringify(res.data)
                setTimeout(checkAccess, 20000)
                if (appUrl.value !== undefined || appUrl.value !== null || appUrl.value !== '')
                  router.push(appUrl.value);
                return 1
              } else if (res.code < 0) {
                auth.value = 0
                checkAccess()
                return -1
              } else {
                setTimeout(checkQRLogin, 1000)
                if (IsDark) {
                  Message.value = t('auth.codedark')
                } else {
                  Message.value = t('auth.codelight')
                }
                return 0
              }
            }
          }).catch(error => {
            console.log(error)
            is_error.value = true
            Message.value = t('auth.codeerror')
            return -1
          })
      }
  
      async function checkAccess() {
        if (auth.value < 2) {
          logout()
          return
        }
        serviceCall.setBaseURL(devUrl.value, prodUrl.value)
        await serviceCall.apiClient
          .get(confirmUrl.value, config())
          .then((response) => {
            const res: apiResponse = response.data
            
            if (res.success) {
              success.value = res.success
              code.value = res.code
              if (res.code > 0) {
                setTimeout(checkAccess, 20000)
              } else {
                auth.value = 0
                userSession.value = ''
                if (loginUrl.value !== undefined || loginUrl.value !== null || loginUrl.value !== '')
                  router.push(loginUrl.value);
              }
            }
        }).catch(error => {
          console.log(error)
          is_error.value = true
          Message.value = t('auth.codeerror')
        })
      }
  
      function IsLoggedIn() {
        return auth.value > 1
      }
  
      async function logout() {
        auth.value = 0
        serviceCall.setBaseURL(devUrl.value, prodUrl.value)
        await serviceCall.apiClient
          .get(logoutUrl.value, config())
          .then((response) => {
            const res: apiResponse = response.data
            success.value = res.success
            code.value = res.code
  
            if (success.value) {
              auth.value = 0
              IDLogin.value = Guid.EMPTY.toString()
            }
            if (loginUrl.value !== undefined || loginUrl.value !== null || loginUrl.value !== '')
              router.push(loginUrl.value);
          })
      }
  
      return {
        auth,
        success,
        code,
        IDLogin,
        QRCode,
        Message,
        is_error,
        loginQRCode,
        checkAccess,
        checkQRLogin,
        logout,
        config,
        IsLoggedIn,
        setUrls,
        setRoutes,
        setBase
      }
    }
  )
  