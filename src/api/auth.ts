import client from "./client";
import { IAuthData, ISignUpData } from "../types/auth";

const AuthAPI = {
  signUp: (data: ISignUpData) => {
    return client.post("/member/signup", data);
  },
  login: (data: IAuthData) => {
    return client.post("/member/login", data);
  },
  checkDuplicateMember: (email: string) => {
    return client.get(`/member/login?email=${email}`);
  }
};

export default AuthAPI;
