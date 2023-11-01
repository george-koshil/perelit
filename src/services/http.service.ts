/* tslint:disable:no-any */
import { ApiResponse, ApisauceConfig, ApisauceInstance, create, HEADERS } from 'apisauce';

export interface IRequestConfig<T> {
  url: string;
  data?: T;
  config?: ApisauceConfig;
  withAuth?: boolean;
}

export interface IHttpServiceParams {
  baseURL: string;
}

class HttpService {
  private api: ApisauceInstance;
  private baseURL: string;

  constructor({ baseURL }: IHttpServiceParams) {
    this.baseURL = baseURL;

    this.api = create({ baseURL: this.baseURL });
  }

  getHeaders = async (config: ApisauceConfig): Promise<HEADERS>  => {
    const headers = { ...config.headers };

    return headers;
  }

  getConfig = async (config?: ApisauceConfig | {}): Promise<ApisauceConfig> => {
    const baseConfig = {
      baseURL: this.baseURL,
      headers: {},
      ...config
    };

    const customHeaders = await this.getHeaders(baseConfig);

    return {
      ...baseConfig,
      headers: customHeaders
    };
  }

  get = async <P, R>({ url, config}: IRequestConfig<P>): Promise<ApiResponse<R>> => {
    const configObject = await this.getConfig(config);
    return this.api.get(url, undefined, configObject);
  };

  post = async <P, R>({ url, data, config}: IRequestConfig<P>): Promise<ApiResponse<R>> => {
    const configObject = await this.getConfig(config);
    return this.api.post(url, data, configObject);
  };

  put = async <P, R>({ url, data, config }: IRequestConfig<P>): Promise<ApiResponse<R>> => {
    const configObject = await this.getConfig(config);
    return this.api.put(url, data, configObject);
  };

  patch = async <P, R>({ url, data, config }: IRequestConfig<P>): Promise<ApiResponse<R>> => {
    const configObject = await this.getConfig(config);
    return this.api.patch(url, data, configObject);
  };

  delete = async <P, R>({ url, config }: IRequestConfig<P>): Promise<ApiResponse<R>> => {
    const configObject = await this.getConfig(config);
    return this.api.delete(url, undefined, configObject);
  };
}

export default HttpService;
