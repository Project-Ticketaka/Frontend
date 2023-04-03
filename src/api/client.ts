import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getItemWithExpireTime } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

const baseURL: string = process.env.REACT_APP_BASE_URL as string;

const client = axios.create({ baseURL });

client.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    const navigate = useNavigate();
    const accessToken = getItemWithExpireTime("accessToken",navigate);

    if (accessToken) {
      config.headers = {};
      config.headers["authorization"] = accessToken;
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
