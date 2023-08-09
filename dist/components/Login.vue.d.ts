declare const _sfc_main: import("vue").DefineComponent<{
    isMobileScreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    showButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    primaryDark: {
        type: StringConstructor;
        default: string;
    };
    primaryLight: {
        type: StringConstructor;
        default: string;
    };
    secondaryDark: {
        type: StringConstructor;
        default: string;
    };
    secondaryLight: {
        type: StringConstructor;
        default: string;
    };
    isDark: {
        type: BooleanConstructor;
        default: boolean;
    };
    positionLight: {
        type: StringConstructor;
        default: string;
    };
    positionDark: {
        type: StringConstructor;
        default: string;
    };
    accentColor: {
        type: StringConstructor;
        default: string;
    };
    logoDark: {
        type: StringConstructor;
        default: string;
    };
    logoLight: {
        type: StringConstructor;
        default: string;
    };
    configDev: {
        type: StringConstructor;
        default: string;
    };
    configProduction: {
        type: StringConstructor;
        default: string;
    };
    configApp: {
        type: StringConstructor;
        default: string;
    };
    configLogin: {
        type: StringConstructor;
        default: string;
    };
    configRequest: {
        type: StringConstructor;
        default: string;
    };
    configVerify: {
        type: StringConstructor;
        default: string;
    };
    configConfirm: {
        type: StringConstructor;
        default: string;
    };
    configLogout: {
        type: StringConstructor;
        default: string;
    };
    SiteId: {
        type: StringConstructor;
        default: string;
    };
}, {
    t: (key: string) => string;
    auth: import("vue").Ref<number>;
    loginQRCode: () => Promise<number | undefined>;
    checkQRLogin: () => Promise<number | undefined>;
    success: import("vue").Ref<boolean>;
    QRCode: import("vue").Ref<string>;
    is_error: import("vue").Ref<boolean>;
    Message: import("vue").Ref<string>;
    setBase: (dev: string, prod: string) => void;
    setUrls: (request: string, verify: string, confirm: string, logout: string) => void;
    setRoutes: (app: string, login: string) => void;
    IDSite: import("vue").Ref<string>;
    showQRCode: import("vue").Ref<boolean>;
    defaultLocale: import("@vueuse/shared").RemovableRef<string>;
    props: any;
    clickHandler: () => void;
    readonly QRCodeVue3: any;
    Preloader: import("vue").DefineComponent<{
        width: {
            type: StringConstructor;
            default: string;
        };
        height: {
            type: StringConstructor;
            default: string;
        };
        mobileWidth: StringConstructor;
        mobileHeight: StringConstructor;
        disabled: BooleanConstructor;
        dark: BooleanConstructor;
    }, {
        props: any;
        isDark: import("vue").Ref<boolean>;
        mobileWidthValue: import("vue").Ref<string>;
        mobileHeightValue: import("vue").Ref<string>;
        loader: import("vue").Ref<HTMLDivElement | null>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        width: {
            type: StringConstructor;
            default: string;
        };
        height: {
            type: StringConstructor;
            default: string;
        };
        mobileWidth: StringConstructor;
        mobileHeight: StringConstructor;
        disabled: BooleanConstructor;
        dark: BooleanConstructor;
    }>>, {
        width: string;
        height: string;
        disabled: boolean;
        dark: boolean;
    }, {}>;
    readonly imageWhite: string;
    readonly imageBlack: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isMobileScreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    showButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    primaryDark: {
        type: StringConstructor;
        default: string;
    };
    primaryLight: {
        type: StringConstructor;
        default: string;
    };
    secondaryDark: {
        type: StringConstructor;
        default: string;
    };
    secondaryLight: {
        type: StringConstructor;
        default: string;
    };
    isDark: {
        type: BooleanConstructor;
        default: boolean;
    };
    positionLight: {
        type: StringConstructor;
        default: string;
    };
    positionDark: {
        type: StringConstructor;
        default: string;
    };
    accentColor: {
        type: StringConstructor;
        default: string;
    };
    logoDark: {
        type: StringConstructor;
        default: string;
    };
    logoLight: {
        type: StringConstructor;
        default: string;
    };
    configDev: {
        type: StringConstructor;
        default: string;
    };
    configProduction: {
        type: StringConstructor;
        default: string;
    };
    configApp: {
        type: StringConstructor;
        default: string;
    };
    configLogin: {
        type: StringConstructor;
        default: string;
    };
    configRequest: {
        type: StringConstructor;
        default: string;
    };
    configVerify: {
        type: StringConstructor;
        default: string;
    };
    configConfirm: {
        type: StringConstructor;
        default: string;
    };
    configLogout: {
        type: StringConstructor;
        default: string;
    };
    SiteId: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    isMobileScreen: boolean;
    showButton: boolean;
    primaryDark: string;
    primaryLight: string;
    secondaryDark: string;
    secondaryLight: string;
    isDark: boolean;
    positionLight: string;
    positionDark: string;
    accentColor: string;
    logoDark: string;
    logoLight: string;
    configDev: string;
    configProduction: string;
    configApp: string;
    configLogin: string;
    configRequest: string;
    configVerify: string;
    configConfirm: string;
    configLogout: string;
    SiteId: string;
}, {}>;
export default _sfc_main;
