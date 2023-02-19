export interface IAuthData {
    email: string;
}

export interface ILoginData extends IAuthData{
    password: string;
}
export interface IMemberInfo extends IAuthData{
    name: string;
    phone: string;
    birth: string;
}
export interface ISignUpData extends ILoginData{
    name: string;
    phone: string;
    birth: string;
	gender: string;
}

export interface IMemberResponse {
    data: IMemberInfo;
  }

  export interface IAuthResponse {
    message: string;
  }