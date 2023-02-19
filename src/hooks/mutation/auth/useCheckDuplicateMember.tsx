import { useMutation } from "react-query";
import { AxiosResponse } from "axios";

import MemberAPI from "../../../api/member";
import { IAuthResponse, IAuthData } from "../../../types/member";

const useCheckDuplicateMember = () => {
    return useMutation((userInfo: IAuthData) => MemberAPI.checkDuplicateMember(userInfo), {
        onSuccess: (data: AxiosResponse<IAuthResponse>) => {
            alert('사용 가능합니다!')
        },
        onError: ((error: unknown, variables: IAuthData, context: unknown) =>{
            alert('이미 가입된 이메일입니다!');
        })
    });
};

export default useCheckDuplicateMember;
