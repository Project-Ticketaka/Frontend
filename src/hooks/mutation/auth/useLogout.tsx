import { useMutation } from "react-query";
import { AxiosResponse } from "axios";

import MemberAPI from "../../../api/member";
import { IAuthResponse, IAuthData, ILoginData } from "../../../types/member";
import { TNavigate } from "../../../types/navigate";

const useLogout = (navigate: TNavigate) => {
    return useMutation(() => MemberAPI.logout(), {
        onSuccess: (data: AxiosResponse<IAuthResponse>) => {
            console.log(data);
            console.log(data.headers);
            localStorage.removeItem("accessToken");
            navigate("/", { replace: true });
        },
        onError: ((error: unknown, variables: unknown, context: unknown) =>{
            alert('로그아웃 실패!');
        })
    });
};

export default useLogout;