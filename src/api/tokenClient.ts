import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getItemWithExpireTime } from "../utils/localStorage";

const baseURL: string = process.env.REACT_APP_BASE_URL as string;

const tokenClient = axios.create({ baseURL });


tokenClient.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    
    //console.log(notRequireTokenList.includes(String(config.url)))
    const accessToken = getItemWithExpireTime("accessToken");
    console.log(config)
    
    
      if (accessToken) {
        config.headers = {};
        config.headers["authorization"] = accessToken;
      }
      return config;
    
    
    },
    (error) => Promise.reject(error)
);

tokenClient.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError) => {
    if(error.response?.status === 401) {
      alert("토큰이 만료되었습니다. 다시 로그인 해주세요!")
      localStorage.removeItem("accessToken")
      window.location.href = "/"
    }
    return Promise.reject(error);
  }
);

export default tokenClient;
