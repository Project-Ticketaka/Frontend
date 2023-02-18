import { ILoginData } from "../../types/member";

interface IAuthForm extends ILoginData {
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validData: { isEmailValid: boolean; isPasswordValid: boolean };
    isNotEnterEmail: boolean;
    isNotEnterPassword: boolean;
}

export interface ILoginProps extends IAuthForm {
    onLogin: () => void;
    onGoToSignUp: () => void;
}

export interface ISignUpProps extends IAuthForm {
    onEmailDuplicateCheck: () => void;
    onPasswordCheckChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSetGender: (g:string) => void;
    onBirthDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSignUp: () => void;
    validData: { isEmailValid: boolean; isPasswordValid: boolean; isPasswordCheckValid:boolean; isNameValid: boolean; isBirthDateValid: boolean; isPhoneValid: boolean; };
    passwordCheck: string;
    name: string;
    gender: string;
    birth: string;
    phone: string;
    isNotEnterName: boolean;
    isNotEnterBirthDate: boolean;
    isNotEnterPhone: boolean;
}