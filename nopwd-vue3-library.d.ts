declare module '@marketally/nopwd-vue3-library' {

    import { DefineComponent, Ref } from 'vue';
  
    type EmitType = {
        (event: 'Error', args: string): void;
        (event: 'Redirect', args: string): void;
        (event: 'Status', args: number): void;
        (event: 'User', args: string): void;
      };

    interface NoPWDProps {
      isMobileScreen?: boolean;
      showButton?: boolean;
      primaryDark?: string;
      primaryLight?: string;
      secondaryDark?: string;
      secondaryLight?: string;
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
    
    interface PreloaderProps {
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
        IDLogin: Ref<string>;
        QRCode: Ref<string>;
        Message: Ref<string>;
        user_data: Ref<string>;
        is_error: Ref<boolean>;
        loginQRCode: () => Promise<number | undefined>;
        checkAccess: () => Promise<void>;
        checkQRLogin: () => Promise<number | undefined>;
        logout: () => Promise<void>;
        config: () => { headers: { [key: string]: string } };
        setUrls: (request: string, verify: string, confirm: string, logout: string) => void;
        setRoutes: (app: string, login: string) => void;
        setBase: (dev: string, prod: string) => void;
    }

    function useNoPWD(emit?: EmitType): UseNoPWDResult;

    const LoginComponent: DefineComponent<NoPWDProps>; 
    const PreloaderComponent: DefineComponent<PreloaderProps>; 

    export default LoginComponent;
    export {
        LoginComponent as Login,
        PreloaderComponent as Preloader,
        useNoPWD
    };
}