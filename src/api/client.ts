import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const baseURL: string = process.env.REACT_APP_BASE_URL as string;
const client = axios.create({ baseURL });


client.interceptors.request.use(
    (config: AxiosRequestConfig): any => {
       const accessToken = localStorage.getItem("accessToken");
       const refreshToken = localStorage.getItem("refreshToken");
        
       if (accessToken&&refreshToken) {
            config.headers = {};
            config.headers["x-authorization"] = accessToken;
            config.headers["r-authorization"] = refreshToken;
        }
        return config;
    },
    (error:any) => Promise.reject(error)
);

client.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError) => {

    return Promise.reject(error);
  }
);

export default client;
