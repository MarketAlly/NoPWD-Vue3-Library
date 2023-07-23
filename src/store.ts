import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { INoPWD, type IValue, type apiResponse, type apiResponses } from './interface'
import { Guid } from 'guid-typescript'
import serviceCall from './interface'

export const useAuthStore = defineStore(
    'useAuthStore',
    () => {
      const success = ref(false)
      const code = ref(0)
      const IDLogin = useStorage('idlogin', Guid.EMPTY)
      const auth = useStorage('auth', 0)
      const userSession = useStorage('userSession', '')
  
      function config() {
        return {
          headers: {
            Accept: 'application/json',
            'X-LoginId': IDLogin.value,
            'Content-Type': 'application/json'
          }
        }
      };
  
      function configForm() {
        return {
          headers: {
            Accept: 'application/json',
            'X-LoginId': IDLogin.value,
            'Content-Type': 'multipart/form-data'
          }
        }
      };

      const IsDark = ref(false)
      const UserId = ref('')
      const QRCode = ref('')
      const LocalCode = ref('')
      const userName = ref('')
      const Message = ref('Preparing interface...')
      const rqValue = ref<IValue>({ id: IDLogin.value, code: null, value: null, subid: null, userid: null, count: null, page: null, fromdate: null })
  
      async function loginQRCode(isMobileScreen : Boolean) : Promise<number | undefined> {
        IDLogin.value = Guid.EMPTY
        if (IDLogin.value === Guid.EMPTY.toString()) {
          Message.value = 'Loading access code, please wait...'
          IDLogin.value = Guid.create().toString()
          rqValue.value.id = IDLogin.value
          serviceCall.setBaseURL(undefined, undefined)
          return serviceCall.apiClient.get<apiResponse>('api/requestloginkey', config()).then((response) => {
            const res: apiResponse = response.data
            if (res.success) {
              Message.value = ''
              if (isMobileScreen) {
                QRCode.value = "https://www.marketally.com?loginid=" + IDLogin.value
                LocalCode.value = "polylogin:" + IDLogin.value
              } else {
                QRCode.value = "polylogin:" + IDLogin.value
              }
              
              success.value = res.success
              code.value = res.code
              auth.value = 1
              setTimeout(checkQRLogin, 1000)
              if (IsDark) {
                Message.value = 'Code not reading? Click moon icon above.'
              } else {
                Message.value = 'Scan the code with your mobile device.'
              }
              return 1
            } else {
              Message.value = 'Error requesting code, please refresh page'
              return -1
            }
          }).catch(error => {
            console.log(error)
            Message.value = 'Error requesting code, please refresh page'
            return -1
          })
        } else {
          if (IsDark) {
            Message.value = 'Code not reading? Click moon icon above.'
          } else {
            Message.value = 'Scan the code with your mobile device.'
          }
          checkQRLogin()
          return 0
        }
      }
  
      async function checkQRLogin() : Promise<number | undefined> {
        serviceCall.setBaseURL(undefined, undefined)
        return await serviceCall.apiClient
          .get('api/verifyaccess', config())
          .then((response) => {
            const res: apiResponses<INoPWD> = response.data
            
            if (res.success) {
              success.value = res.success
              code.value = res.code
              if (res.code > 0) {
                auth.value = 2
                userSession.value = JSON.stringify(res.data)
                setTimeout(checkAccess, 20000)
                
                //aRouter.push('/app')
                return 1
              } else if (res.code < 0) {
                auth.value = 0
                checkAccess()
                return -1
              } else {
                setTimeout(checkQRLogin, 1000)
                if (IsDark) {
                  Message.value = 'Code not reading? Click moon icon above.'
                } else {
                  Message.value = 'Scan the code with your mobile device.'
                }
                return 0
              }
            }
          }).catch(error => {
            console.log(error)
            Message.value = 'Error checking access, refresh page'
            return -1
          })
      }
  
      async function checkAccess() {
        if (auth.value < 2) {
          logout()
          return
        }
        serviceCall.setBaseURL(undefined, undefined)
        await serviceCall.apiClient
          .get('api/confirmaccess', config())
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
                //aRouter.push('/auth/login')
              }
            }
        }).catch(error => {
          console.log(error)
          Message.value = 'Error checking access, refresh page'
        })
      }
  
      function IsLoggedIn() {
        return auth.value > 1
      }
  
      async function logout() {
        auth.value = 0
        serviceCall.setBaseURL(undefined, undefined)
        await serviceCall.apiClient
          .get('api/logout', config())
          .then((response) => {
            const res: apiResponse = response.data
            success.value = res.success
            code.value = res.code
  
            if (success.value) {
              auth.value = 0
              IDLogin.value = Guid.EMPTY.toString()
            }
          })
      }
  
      return {
        auth,
        UserId,
        success,
        code,
        IDLogin,
        userName,
        QRCode,
        LocalCode,
        Message,
        loginQRCode,
        checkAccess,
        checkQRLogin,
        logout,
        config,
        configForm,
        IsLoggedIn
      }
    }
  )
  