import client from "./client";
import { IAuthData, ILoginData, ISignUpData } from "../types/auth";

const AuthAPI = {
  signUp: (data: ISignUpData) => {
    return client.post("/member/signup", data);
  },
  login: (data: ILoginData) => {
    return client.post("/member/login", data);
  },
  checkDuplicateMember: (data: IAuthData) => {
    return client.post("/member/checkDuplicateEmail",data);
  }
};

export default AuthAPI;
