export interface IAuthData {
    email: string;
}

export interface ILoginData extends IAuthData{
    password: string;
}
export interface IMemberInfo extends ILoginData{
    name: string;
    phone: string;
    birth: string;
}
export interface ISignUpData extends IMemberInfo{
	gender: string;
}

export interface IAuthResponse {
    message: string;
}