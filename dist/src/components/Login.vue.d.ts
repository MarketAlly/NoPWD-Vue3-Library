import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    instanceId: {
        type: StringConstructor;
        default: string;
    };
    isMobileScreen: {
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
    hideText: {
        type: BooleanConstructor;
        default: boolean;
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
    region: {
        type: NumberConstructor;
        default: number;
    };
    errorLog: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableCheck: {
        type: BooleanConstructor;
        default: boolean;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
    accessTimeout: {
        type: NumberConstructor;
        default: number;
    };
    store: {
        type: PropType<import("../interface").INoPWDStore>;
        default: undefined;
    };
}, {
    t: (key: string) => string;
    emit: (event: "error" | "redirect" | "status" | "user", ...args: any[]) => void;
    internalEmitHandler: (event: string, payload: any) => void;
    props: any;
    activeStore: import("../interface").INoPWDStore;
    auth: import("vue").Ref<number>;
    loginQRCode: () => Promise<number | undefined>;
    checkQRLogin: () => Promise<number | undefined>;
    success: import("vue").Ref<boolean>;
    IsDark: import("vue").Ref<boolean>;
    QRCode: import("vue").Ref<string>;
    Message: import("vue").Ref<string>;
    IDLogin: import("vue").Ref<string>;
    setBase: (dev: string, prod: string, region: number, error: boolean, interval: number, access: number) => void;
    reset: () => Promise<void>;
    readMessage: () => string;
    setUrls: (request: string, verify: string, confirm: string, logout: string) => void;
    setRoutes: (app: string, login: string, eCheck: boolean) => void;
    is_error: import("vue").Ref<boolean>;
    setMounted: (value: boolean) => void;
    mounted: import("vue").Ref<boolean>;
    instanceId: import("vue").ComputedRef<string>;
    showQRCode: import("vue").Ref<boolean>;
    defaultLocale: import("@vueuse/shared").RemovableRef<string>;
    DarkMode: import("vue").ComputedRef<boolean>;
    acount: import("vue").Ref<number>;
    resetTimeout: () => void;
    refreshPage: () => void;
    clickHandler: () => void;
    readonly QRCodeVue3: any;
    Prelogin: import("vue").DefineComponent<{
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
        mounted: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        props: any;
        isDark: import("vue").Ref<boolean>;
        mobileWidthValue: import("vue").Ref<string>;
        mobileHeightValue: import("vue").Ref<string>;
        loader: import("vue").Ref<HTMLDivElement | null>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
        mounted: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>>, {
        mounted: boolean;
        width: string;
        height: string;
        disabled: boolean;
        dark: boolean;
    }, {}>;
    readonly imageWhite: string;
    readonly imageBlack: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("error" | "redirect" | "status" | "user")[], "error" | "redirect" | "status" | "user", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    instanceId: {
        type: StringConstructor;
        default: string;
    };
    isMobileScreen: {
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
    hideText: {
        type: BooleanConstructor;
        default: boolean;
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
    region: {
        type: NumberConstructor;
        default: number;
    };
    errorLog: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableCheck: {
        type: BooleanConstructor;
        default: boolean;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
    accessTimeout: {
        type: NumberConstructor;
        default: number;
    };
    store: {
        type: PropType<import("../interface").INoPWDStore>;
        default: undefined;
    };
}>> & {
    onError?: ((...args: any[]) => any) | undefined;
    onRedirect?: ((...args: any[]) => any) | undefined;
    onStatus?: ((...args: any[]) => any) | undefined;
    onUser?: ((...args: any[]) => any) | undefined;
}, {
    instanceId: string;
    isMobileScreen: boolean;
    primaryDark: string;
    primaryLight: string;
    secondaryDark: string;
    secondaryLight: string;
    hideText: boolean;
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
    region: number;
    errorLog: boolean;
    enableCheck: boolean;
    interval: number;
    accessTimeout: number;
    store: import("../interface").INoPWDStore;
}, {}>;
export default _sfc_main;
