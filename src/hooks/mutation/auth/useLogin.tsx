import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import AuthAPI from "../../../api/auth";
import { IAuthResponse, IAuthData } from "../../../types/auth";
import { TNavigate } from "../../../types/navigate";

const useLogin = (navigate: TNavigate) => {
    return useMutation((userInfo: IAuthData) => AuthAPI.login(userInfo), {
        onSuccess: (data: AxiosResponse<IAuthResponse>) => {
            console.log('data');
            const token = data.data.token;
            localStorage.setItem("token", token);
            navigate("/", { replace: true });
        },
        onError: ((error: unknown, variables: IAuthData, context: unknown) =>{
            alert('로그인 실패!');
        })
    });
};

export default useLogin;