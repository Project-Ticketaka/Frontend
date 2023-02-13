import styled from "@emotion/styled"
import React from 'react'
import Button from "../../../components/Common/Button"
import Logo from "../../../components/Common/Logo"
import AuthInput from "../../../components/Auth/AuthInput"
import Container from "../../../components/Auth/Container"
import FormContainer from "../../../components/Auth/FormContainer"
import { ILoginProps } from "../types"


const Row = styled.div`
    display : flex;
    text-align: center;
    width: 100%;
    align-items: center;
    justify-content: center;
`

const LoginView = ({
    onEmailChange,
    onPasswordChange,
    onLogin,
    onGoToSignUp,
    email,
    password,
    validData
  }: ILoginProps) => {
  return (
    <Container size='large'>
        <FormContainer>
            <Logo/>
            <AuthInput 
                type="email" 
                placeholder="이메일" 
                value={email}
                onChange={onEmailChange}
            />
            <AuthInput 
                type="password"
                placeholder="비밀번호" 
                value={password}
                onChange={onPasswordChange}
            />
            
            <Button onClick={onLogin} state={`${validData.isEmailValid&&validData.isPasswordValid}`}>로그인</Button>
            <Row>
                <span>아직 계정이 없으신가요?</span>
                <Button color='white' size='md' onClick={onGoToSignUp}>가입하기</Button>
            </Row>
        </FormContainer>
        
    </Container>
  )
}

export default LoginView