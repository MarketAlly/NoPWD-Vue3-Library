import { Ref } from 'vue';
declare const serviceCall: {
    apiClient: import("axios").AxiosInstance;
    setBaseURL: (devURL: string | undefined, prodURL: string | undefined) => void;
    getBaseURL: () => string | undefined;
};
export interface INoPWDStore {
    auth: Ref<number>;
    success: Ref<boolean>;
    code: Ref<number>;
    IDLogin: Ref<string>;
    QRCode: Ref<string>;
    Message: Ref<string>;
    is_error: Ref<boolean>;
    loginQRCode: () => Promise<number | undefined>;
    checkAccess: () => Promise<void>;
    checkQRLogin: () => Promise<number | undefined>;
    logout: () => Promise<void>;
    config: () => {
        headers: {
            Accept: string;
            'X-LoginId': string;
            'Content-Type': string;
        };
    };
    setUrls: (request: string, verify: string, confirm: string, logout: string) => void;
    setRoutes: (app: string, login: string) => void;
    setBase: (dev: string, prod: string) => void;
}
export default serviceCall;
export interface IValue {
    id: string | null;
    code: string | null;
    value: string | null;
    subid: string | null;
    userid: string | null;
    count: number | null;
    page: number | null;
    fromdate: Date | null;
}
export interface IStatus {
    id: string;
    phon3: string;
    country: string;
    logout: boolean;
}
export interface INoPWD {
    id: string;
    name: string;
    email: string;
    avatar: string;
    isonline: boolean;
}
export interface IResponse {
    message: string;
    success: boolean;
    code: number;
    id: string;
}
export interface apiResponse {
    message: string;
    success: boolean;
    code: number;
    page: number;
    totalpages: number;
    data: boolean;
}
export interface apiResponses<T> {
    message: string;
    success: boolean;
    code: number;
    page: number;
    totalpages: number;
    data: T;
}
