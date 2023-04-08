import { AxiosResponse } from "axios";
import { useMutation } from "react-query";

import MemberAPI from "../../../api/member";
import { IAuthResponse, ISignUpData } from "../../../types/member";
import { TNavigate } from "../../../types/navigate";
import useToastMessage from "../../common/useToastMessage";

const useSignUp = (navigate: TNavigate) => {
    const showToast = useToastMessage();
    return useMutation((userInfo: ISignUpData) => MemberAPI.signUp(userInfo), {
        onSuccess: (data: AxiosResponse<IAuthResponse>) => {
            showToast("success", "회원가입 성공!");
            navigate("/login", {state:'signup'});
        },
        onError: ((error: unknown, variables: ISignUpData, context: unknown) =>{
            
            showToast("error", "회원가입 실패!");
            //console.log(variables);
        })
    });
};

export default useSignUp;
