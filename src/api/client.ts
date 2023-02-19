import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const baseURL: string = process.env.REACT_APP_BASE_URL as string;
const client = axios.create({ baseURL });


// client.interceptors.request.use(
//     (config: AxiosRequestConfig): any => {
//        const token = localStorage.getItem("token");

//         if (token) {
//             config.headers = {};
//             config.headers.Authorization = token;
//         }
//         return config;
//     },
//     (error:any) => Promise.reject(error)
// );

client.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError) => {

    return Promise.reject(error);
  }
);

export default client;
