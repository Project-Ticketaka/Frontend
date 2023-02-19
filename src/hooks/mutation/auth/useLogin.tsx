import { useMutation } from "react-query";
import { AxiosResponse } from "axios";

import MemberAPI from "../../../api/member";
import { IAuthResponse, IAuthData, ILoginData } from "../../../types/member";
import { TNavigate } from "../../../types/navigate";

const useLogin = (navigate: TNavigate) => {
    return useMutation((userInfo: ILoginData) => MemberAPI.login(userInfo), {
        onSuccess: (data: AxiosResponse<IAuthResponse>) => {
            console.log(data);
            console.log(data.headers);
            const accessToken = data.headers["x-authorization"];
            const refreshToken = data.headers["r-authorization"];
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            navigate("/", { replace: true });
        },
        onError: ((error: unknown, variables: IAuthData, context: unknown) =>{
            alert('로그인 실패!');
        })
    });
};

export default useLogin;