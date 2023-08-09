import AxiosInstance from 'axios'
import { Ref } from 'vue';
const isLocalhost = window.location.hostname === 'localhost';

const apiClient = AxiosInstance.create({
  baseURL: 'https://localhost:8080/',
  withCredentials: false,
});

let developURL: string | undefined = 'https://dev-url.com/';
let productionURL: string | undefined = '';

const serviceCall = {
  apiClient: apiClient,
  setBaseURL: function(devURL: string | undefined, prodURL: string | undefined) {
    if (isLocalhost) {  
      this.apiClient.defaults.baseURL = devURL || developURL;
    } else {
      this.apiClient.defaults.baseURL = prodURL || productionURL;
    }
    developURL = devURL;
    productionURL = prodURL;
  },
  getBaseURL: function() {
      return this.apiClient.defaults.baseURL;
  },
};

export interface INoPWDStore {
  auth: Ref<number>;
  success: Ref<boolean>;
  code: Ref<number>;
  IDLogin: Ref<string>;
  IDSite: Ref<string>;
  IDSiteCall: Ref<string>;
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
      'X-SiteCallId': string;
      'Content-Type': string;
    };
  };
  IsLoggedIn: () => boolean;
  setUrls: (request: string, verify: string, confirm: string, logout: string) => void;
  setRoutes: (app: string, login: string) => void;
  setBase: (dev: string, prod: string) => void;
}

export default serviceCall

export interface IValue {
  id: string | null
  code: string | null
  value: string | null
  subid: string | null
  userid: string | null
  count: number | null
  page: number | null
  fromdate: Date | null
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
      sitecallid: string;
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
  