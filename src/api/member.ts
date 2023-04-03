import { IAuthData, ILoginData, ISignUpData } from "../types/member";
import client from "./client";

const MembnerAPI = {
    signUp: (data: ISignUpData) => {
        return client.post("/member/signup", data);
    },
    login: (data: ILoginData) => {
      return client.post("/member/login", data);
    },
    checkDuplicateMember: (data: IAuthData) => {
      return client.post("/member/checkDuplicateEmail",data);
    },
    getMemberInfo: () => {
        return client.get(`/member/info`);
    },
};

export default MembnerAPI;
