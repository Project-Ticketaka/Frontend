import { AxiosResponse } from "axios";
import { useMutation } from "react-query";

import MemberAPI from "../../../api/member";
import { IAuthResponse, ISignUpData } from "../../../types/member";
import { TNavigate } from "../../../types/navigate";

const useSignUp = (navigate: TNavigate) => {
    return useMutation((userInfo: ISignUpData) => MemberAPI.signUp(userInfo), {
        onSuccess: (data: AxiosResponse<IAuthResponse>) => {
            navigate("/login", { replace: true });
        },
        onError: ((error: unknown, variables: ISignUpData, context: unknown) =>{
            alert('회원가입 실패!');
            console.log(variables);
        })
    });
};

export default useSignUp;
