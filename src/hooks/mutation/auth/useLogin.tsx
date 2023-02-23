import { useMutation } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import MemberAPI from "../../../api/member";
import { IAuthResponse, IAuthData, ILoginData } from "../../../types/member";
import { TNavigate } from "../../../types/navigate";
import customHistory from "../../../utils/history";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IError } from "../../../types/axios";

const useLogin = (navigate: TNavigate) => {
    const {state}=useLocation();
  
  
    return useMutation((userInfo: ILoginData) => MemberAPI.login(userInfo), {
        onSuccess: (data: AxiosResponse<IAuthResponse>,variables:ILoginData) => {
            // console.log(data);
            // console.log(data.headers);
            
            localStorage.setItem("accessToken", data.headers["x-authorization"]);
            localStorage.setItem("refreshToken", data.headers["r-authorization"]);
            localStorage.setItem("memberEmail", variables.email);
            
            // console.log(state);
            if(state){
                //메인->로그인
                navigate("/", { replace: true });
            }else{
                //다른 화면 -> 로그인
                customHistory.back();
            }
            
            // console.log(customHistory.location);
            
        },
        onError: ((error: AxiosError<IError>, variables: IAuthData, context: any) =>{
            alert(`${error.response?.data?.description}!`);
            // alert('로그인 실패!');
        })
    });
};

export default useLogin;