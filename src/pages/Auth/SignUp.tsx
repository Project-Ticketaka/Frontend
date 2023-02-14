import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import useSignUp from "../../hooks/mutation/auth/useSignUp";
import useCheckDuplicateMember from "../../hooks/mutation/auth/useCheckDuplicateMember";
import { birthDateValidator, emailValidator, nameValidator, passwordValidator, phoneValidator } from "../../utils/validator";
import { ISignUpProps } from "./types";
import SignUpView from "./Views/SignUpView"

const SignUp = () => {
  
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("M");
    const [birth, setBirth] = useState("");
    const [phone, setPhone] = useState("");
    
    const [validData, setValidData] = useState({
        isEmailValid: false,
        isPasswordValid: false,
        isPasswordCheckValid: false,
        isNameValid: false,
        isBirthDateValid: false,
        isPhoneValid: false
    });

    const isNotEnterEmail = email.length === 0;
    const isNotEnterPassword = (password.length === 0)&&(passwordCheck.length === 0);
    const isNotEnterName = name.length === 0;
    const isNotEnterBirthDate = birth.length === 0;
    const isNotEnterPhone = phone.length === 0;



    const { mutate: signUpMutate } = useSignUp(navigate);
    const { mutate: checkDuplicateMemberMutate } = useCheckDuplicateMember();
    
    const signUpProps: ISignUpProps = {
        email,
        password,
        passwordCheck,
        name,
        birth,
        phone,
        gender,
        onEmailChange: (e) => {
            emailValidator(e.target.value)
                ? setValidData((p) => ({ ...p, isEmailValid: true }))
                : setValidData((p) => ({ ...p, isEmailValid: false }));
            setEmail(e.target.value);
        },
        onEmailDuplicateCheck: ()=>{
            checkDuplicateMemberMutate(email);
        },
        onPasswordChange: (e) => {
            passwordValidator(e.target.value)
                ? setValidData((p) => ({ ...p, isPasswordValid: true }))
                : setValidData((p) => ({ ...p, isPasswordValid: false }));
            setPassword(e.target.value);
        },
        onPasswordCheckChange: (e) => {
            password===e.target.value
                ? setValidData((p) => ({ ...p, isPasswordCheckValid: true }))
                : setValidData((p) => ({ ...p, isPasswordCheckValid: false }));
            setPasswordCheck(e.target.value);
            
        },
        onNameChange: (e) => {
            nameValidator(e.target.value)
                ? setValidData((p) => ({ ...p, isNameValid: true }))
                : setValidData((p) => ({ ...p, isNameValid: false }));
            setName(e.target.value);
        },
        onSetGender: (g:string) => {
            setGender(g)
        },
        onBirthDateChange: (e) => {
            birthDateValidator(e.target.value)
                ? setValidData((p) => ({ ...p, isBirthDateValid: true }))
                : setValidData((p) => ({ ...p, isBirthDateValid: false }));
            setBirth(e.target.value);
        },
        onPhoneChange: (e) => {
            phoneValidator(e.target.value)
                ? setValidData((p) => ({ ...p, isPhoneValid: true }))
                : setValidData((p) => ({ ...p, isPhoneValid: false }));
            setPhone(e.target.value);
        },
        onSignUp: () => {
            // 필수 입력값을 다 입력하지 않았을때는 경고창
            if (isNotEnterEmail||isNotEnterPassword||isNotEnterName||isNotEnterBirthDate||isNotEnterPhone){
                if (isNotEnterEmail&&isNotEnterPassword&&isNotEnterName&&isNotEnterBirthDate&&isNotEnterPhone) alert('이메일, 비밀번호, 이름, 생년월일, 핸드폰번호를 입력해주세요!')
                else if (isNotEnterEmail) alert('이메일을 입력해주세요!')
                else if (isNotEnterPassword) alert('비밀번호를 입력해주세요!')
                else if (isNotEnterName) alert('이름 입력해주세요!')
                else if (isNotEnterBirthDate) alert('생년월일을 입력해주세요!')
                else  alert('핸드폰번호를 입력해주세요!')
            }else {
                signUpMutate({ email, password, name, gender, birth, phone });
            }
            
        },
        validData,
        isNotEnterEmail,
        isNotEnterPassword,
        isNotEnterName,
        isNotEnterBirthDate,
        isNotEnterPhone
    };

    return <SignUpView {...signUpProps}/>
}

export default SignUp