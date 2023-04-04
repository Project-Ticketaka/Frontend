import { useMutation } from "react-query";
import { AxiosResponse } from "axios";

import MemberAPI from "../../../api/member";
import { IAuthResponse, IAuthData } from "../../../types/member";
import { useNavigate } from "react-router-dom";

const useCheckDuplicateMember = () => {
    const navigate = useNavigate();
    return useMutation((userInfo: IAuthData) => MemberAPI.checkDuplicateMember(userInfo), {
        onSuccess: (data: AxiosResponse<IAuthResponse>) => {
            alert('사용 가능합니다!');
            navigate("/sign-up",{state:{"status":true}});
        },
        onError: ((error: any, variables: IAuthData, context: any) =>{
            alert('이미 가입된 이메일입니다!');
            navigate("/sign-up",{state:{"status":false}});
        })
        
    });
};

export default useCheckDuplicateMember;
