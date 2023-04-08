import { ILoginData } from "../../types/member";

interface IAuthForm extends ILoginData {
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validData: { 
        isEmailValid: boolean | null; 
        isPasswordValid: boolean | null; 
    };
    isNotEnterEmail: boolean;
    isNotEnterPassword: boolean;
}

export interface ILoginProps extends IAuthForm {
    onLogin: () => void;
    onGoToSignUp: () => void;
}

export interface ISignUpProps extends IAuthForm {
    onEmailDuplicateCheck: () => void;
    onAuthNumChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCheckAuthentication: () => void;
    onPasswordCheckChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSetGender: (g:string) => void;
    onBirthDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSignUp: () => void;
    validData: { 
        isEmailValid: boolean | null; 
        isNotEmailDuplicate:boolean | null; 
        isCheckAuthentication:boolean | null; 
        isPasswordValid: boolean | null; 
        isPasswordCheckValid:boolean | null; 
        isNameValid: boolean | null; 
        isBirthDateValid: boolean | null;
        isPhoneValid: boolean | null; 
    };
    authNum: number | undefined;
    passwordCheck: string;
    name: string;
    gender: string;
    birth: string;
    phone: string;
    isNotEnterName: boolean;
    isNotEnterBirthDate: boolean;
    isNotEnterPhone: boolean;
}