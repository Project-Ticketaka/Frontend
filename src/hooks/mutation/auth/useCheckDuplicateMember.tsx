import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import AuthAPI from "../../../api/auth";
import { IAuthResponse } from "../../../types/auth";


const useCheckDuplicateMember = () => {
    return useMutation((email: string) => AuthAPI.checkDuplicateMember(email), {
        onSuccess: (data: AxiosResponse<IAuthResponse>) => {
            alert('사용 가능합니다!')
        },
        onError: ((error: unknown, variables: string, context: unknown) =>{
            alert('이미 가입된 이메일입니다!');
        })
    });
};

export default useCheckDuplicateMember;