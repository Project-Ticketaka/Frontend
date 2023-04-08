import { useMutation } from "react-query";
import { AxiosResponse } from "axios";

import MemberAPI from "../../../api/member";
import { IAuthResponse, IAuthData } from "../../../types/member";
import useToastMessage from "../../common/useToastMessage";


const useCheckDuplicateMember = () => {
    const showToast = useToastMessage();
    return useMutation((userInfo: IAuthData) => MemberAPI.checkDuplicateMember(userInfo), {
        onSuccess: (data: AxiosResponse<IAuthResponse>) => {
            // console.log(data)
            
            showToast("success", "사용 가능합니다!");
            // navigate("/sign-up",{state:{status:true}});
        },
        onError: ((error: any, variables: IAuthData, context: any) =>{
            // console.log(error)
            showToast("warning", "이미 가입된 이메일입니다!");
            // alert('이미 가입된 이메일입니다!');
            //navigate("/sign-up",{state:{"status":false}});
        })
    });

};

export default useCheckDuplicateMember;
