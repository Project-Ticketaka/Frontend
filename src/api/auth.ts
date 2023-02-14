import client from "./client";
import { IAuthData, ISignUpData } from "../types/auth";

const AuthAPI = {
  signUp: (data: ISignUpData) => {
    return client.post("/member/signup", data);
  },
  login: (data: IAuthData) => {
    return client.post("/member/login", data);
  },
};

export default AuthAPI;