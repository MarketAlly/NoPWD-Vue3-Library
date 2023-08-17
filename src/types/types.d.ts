declare module '@marketally/nopwd-vue3-library' {

    import { DefineComponent } from 'vue';
  
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
  
    const LoginComponent: DefineComponent<NoPWDProps>; 
    const PreloaderComponent: DefineComponent<PreloaderProps>; 

    export default LoginComponent;
    export {
        PreloaderComponent as Preloader
    };
}