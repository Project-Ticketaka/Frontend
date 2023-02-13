import React from 'react'
import Button from "../../../components/Common/Button"
import Logo from "../../../components/Common/Logo"
import AuthInput from "../../../components/Auth/AuthInput"
import Container from "../../../components/Auth/Container"
import FormContainer from "../../../components/Auth/FormContainer"
import GenderSelect from "../../../components/Auth/GenderSelect"
import { ISignUpProps } from "../types"

import styled from "@emotion/styled"

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
    height: 100%;
`
const GenderButtonGroup = styled.div`
    
    height: 100%;
`

const SignUpView = ({
    onEmailChange,
    onEmailDuplicateCheck,
    onPasswordChange,
    onPasswordCheckChange,
    onNameChange,
    onSetGender,
    onBirthDateChange,
    onPhoneChange,
    onSignUp,
    email,
    password,
    passwordCheck,
    name,
    gender,
    birthDate,
    phone,
    validData
  }: ISignUpProps) => {
    return (
    
        <Container>
            <FormContainer>
                <Logo/>
                <Row>
                    <AuthInput 
                        type="email" 
                        placeholder="이메일"
                        value={email}
                        onChange={onEmailChange}
                    />
                    <Button 
                        size='md'
                        onClick={onEmailDuplicateCheck}>중복체크</Button>
                </Row>
                
                <Row>
                    <AuthInput 
                        type="password" 
                        placeholder="비밀번호 ( 8자리 이상 )"
                        value={password}
                        onChange={onPasswordChange}
                    />
                    <AuthInput 
                        type="password" 
                        placeholder="비밀번호 확인 ( 8자리 이상 )"
                        value={passwordCheck}
                        onChange={onPasswordCheckChange}
                    />
                </Row>
                <Row>
                    <AuthInput 
                        type="text" 
                        placeholder="이름"
                        value={name}
                        onChange={onNameChange}    
                    />
                    
                    <GenderButtonGroup>
                        <GenderSelect type='male' state={gender} onClick={()=>onSetGender('M')}>남</GenderSelect>
                        <GenderSelect type='female' state={gender} onClick={()=>onSetGender('F')}>여</GenderSelect>
                    </GenderButtonGroup>
                        
                </Row>
                <AuthInput 
                    type="text" 
                    placeholder="생년월일 8자리 ( YYYYMMDD )"
                    value={birthDate}
                    onChange={onBirthDateChange}
                />
                <AuthInput 
                    type="phone" 
                    placeholder="핸드폰번호 ( - 제외 )"
                    value={phone}
                    onChange={onPhoneChange}
                />
                
                <Button onClick={onSignUp}  state={`${validData.isEmailValid&&validData.isPasswordValid&&validData.isPasswordCheckValid&&validData.isNameValid&&validData.isBirthDateValid&&validData.isPhoneValid}`}>회원가입 !</Button>
                
            </FormContainer>
        </Container>
  )
}

export default SignUpView