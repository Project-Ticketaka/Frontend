import { useMutation } from "react-query";
import { AxiosResponse } from "axios";
import MemberAPI from "../../../api/member";
import { IAuthResponse, ICheckAuthenticationData } from "../../../types/member";
import { useNavigate } from "react-router-dom";

const useCheckAuthentication = () => {
    const navigate = useNavigate();
    return useMutation((checkAuthenticationData: ICheckAuthenticationData) => MemberAPI.checkAuthentication(checkAuthenticationData), {
        onSuccess: (data: AxiosResponse<IAuthResponse>) => {
            //console.log(data);
            alert('인증 완료되었습니다!');
            navigate("/sign-up",{state:{checkAuthentication:true}});
        },
        onError: ((error: any, variables: ICheckAuthenticationData, context: any) =>{
            //console.log(error);
            alert('인증 실패!');
            navigate("/sign-up",{state:{checkAuthenticationData:false}});
        })
        
    });
};

export default useCheckAuthentication;
