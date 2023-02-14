export interface IAuthData {
    email: string;
    password: string;
}

export interface ISignUpData extends IAuthData{
    name: string;
	gender: string;
    birth: string;
    phone: string;
}

export interface IAuthResponse {
    message: string;
    token: string;
}

//signup request
/*
{
	"email": "go123@gmail.com" ,
	"password": "Testing" ,
	"birth": "1997-08-30" ,
	"phone" : "010-1234-5678" ,
	"gender" : "남"
}
 */