import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import AuthAPI from "../../../api/auth";
import { IAuthResponse, IAuthData } from "../../../types/auth";

const useCheckDuplicateMember = () => {
    return useMutation((userInfo: IAuthData) => AuthAPI.checkDuplicateMember(userInfo), {
        onSuccess: (data: AxiosResponse<IAuthResponse>) => {
            alert('사용 가능합니다!')
        },
        onError: ((error: unknown, variables: IAuthData, context: unknown) =>{
            alert('이미 가입된 이메일입니다!');
        })
    });
};

export default useCheckDuplicateMember;
