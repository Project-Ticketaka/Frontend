import { useMutation } from "react-query";
import { AxiosResponse } from "axios";

import MemberAPI from "../../../api/member";
import { IAuthResponse, IAuthData, ILoginData } from "../../../types/member";
import { TNavigate } from "../../../types/navigate";
import customHistory from "../../../utils/history";

const useLogin = (navigate: TNavigate) => {
    return useMutation((userInfo: ILoginData) => MemberAPI.login(userInfo), {
        onSuccess: (data: AxiosResponse<IAuthResponse>,variables:ILoginData) => {
            // console.log(data);
            // console.log(data.headers);
            
            localStorage.setItem("accessToken", data.headers["x-authorization"]);
            localStorage.setItem("refreshToken", data.headers["r-authorization"]);
            localStorage.setItem("memberEmail", variables.email);
            
            //navigate("/", { replace: true });
            customHistory.back();
        },
        onError: ((error: unknown, variables: IAuthData, context: unknown) =>{
            alert('로그인 실패!');
        })
    });
};

export default useLogin;