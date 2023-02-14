import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

import AuthAPI from "../../../api/auth";
import { IAuthResponse, ISignUpData } from "../../../types/auth";
import { TNavigate } from "../../../types/navigate";

const useSignUp = (navigate: TNavigate) => {
    return useMutation((userInfo: ISignUpData) => AuthAPI.signUp(userInfo), {
        onSuccess: (data: AxiosResponse<IAuthResponse>) => {
            const token = data.data.token;
            localStorage.setItem("token", token);
            navigate("/login", { replace: true });
        },
        onError: ((error: unknown, variables: ISignUpData, context: unknown) =>{
            alert('회원가입 실패!');
            console.log(variables);
        })
    });
};

export default useSignUp;
