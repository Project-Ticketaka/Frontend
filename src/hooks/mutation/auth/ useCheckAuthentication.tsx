import { useMutation } from "react-query";
import { AxiosResponse } from "axios";
import MemberAPI from "../../../api/member";
import { IAuthResponse, ICheckAuthenticationData } from "../../../types/member";

const useCheckAuthentication = () => {
    
    return useMutation((checkAuthenticationData: ICheckAuthenticationData) => MemberAPI.checkAuthentication(checkAuthenticationData), {
        onSuccess: (data: AxiosResponse<IAuthResponse>) => {
            //console.log(data);
            alert('인증 완료되었습니다!');
            
        },
        onError: ((error: any, variables: ICheckAuthenticationData, context: any) =>{
            //console.log(error);
            alert('인증 실패!');
            
        })
        
    });
};

export default useCheckAuthentication;
