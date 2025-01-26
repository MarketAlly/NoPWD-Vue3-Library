declare module '@marketally/nopwd-vue3-library' {

    import { DefineComponent, Ref } from 'vue';
  
    type EmitType = {
        (event: 'error', args: string): void;
        (event: 'redirect', args: string): void;
        (event: 'status', args: number): void;
        (event: 'user', args: string): void;
      };

    interface NoPWDProps {
      instanceId?: string;
      isMobileScreen?: boolean;
      primaryDark?: string;
      primaryLight?: string;
      secondaryDark?: string;
      secondaryLight?: string;
      hideText?: Ref<boolean>;
      isDark?: boolean;
      positionLight?: string;
      positionDark?: string;
      accentColor?: string;
      logoDark?: string;
      logoLight?: string;
      configDev?: string;
      configProduction?: string;
      configApp?: string;
      configLogin?: string;
      configRequest?: string;
      configVerify?: string;
      configConfirm?: string;
      configLogout?: string;
    }
    
    interface PreloginProps {
        width?: string;
        height?: string;
        mobileWidth?: string;
        mobileHeight?: string;
        disabled?: boolean;
        dark?: boolean;
    }
  
    interface UseNoPWDResult {
        auth: Ref<number>;
        success: Ref<boolean>;
        code: Ref<number>;
        mounted: Ref<boolean>;
        IDLogin: Ref<string>;
        QRCode: Ref<string>;
        Message: Ref<string>;
        user_data: Ref<string>;
        IsDark: Ref<boolean>;
        is_error: Ref<boolean>;
        reset: () => Promise<void>;
        setMounted: (value: boolean) => void;
        loginQRCode: () => Promise<number | undefined>;
        checkAccess: () => Promise<void>;
        checkQRLogin: () => Promise<number | undefined>;
        logout: () => Promise<void>;
        readMessage: () => string;
        config: () => { headers: { [key: string]: string } };
        setUrls: (request: string, verify: string, confirm: string, logout: string) => void;
        setRoutes: (app: string, login: string) => void;
        setBase: (dev: string, prod: string) => void;
    }

    function useNoPWD(emit?: EmitType | undefined, instanceId: string = ''): UseNoPWDResult;
    
    const LoginComponent: DefineComponent<NoPWDProps, {}, {
        /**
         * Exposed reset method
         */
        reset: () => Promise<void>;
        setMounted: (value: boolean) => void;
    }>;
    const LoginComponent: DefineComponent<NoPWDProps>; 
    const PreloginComponent: DefineComponent<PreloginProps>; 

    export default LoginComponent;
    export {
        LoginComponent as Login,
        PreloginComponent as Prelogin,
        useNoPWD
    };
}