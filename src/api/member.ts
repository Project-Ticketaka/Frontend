import { IAuthData, ICheckAuthenticationData, ILoginData, ISignUpData } from "../types/member";
import client from "./client";
import tokenClient from "./tokenClient";

const MembnerAPI = {
    signUp: (data: ISignUpData) => {
        return client.post("/member/signup", data);
    },
    checkAuthentication: (data: ICheckAuthenticationData) => {
      return client.post("/member/validation", data);
    },
    login: (data: ILoginData) => {
      return client.post("/member/login", data);
    },
    checkDuplicateMember: (data: IAuthData) => {
      return client.post("/member/checkDuplicateEmail",data);
    },
    getMemberInfo: () => {
        return tokenClient.get(`/member/info`);
    },
};

export default MembnerAPI;
