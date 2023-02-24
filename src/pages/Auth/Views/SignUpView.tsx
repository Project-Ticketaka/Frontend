// import Button from "../../../components/Common/Button";
import Logo from "../../../components/Common/Logo";
import AuthInput from "../../../components/Auth/AuthInput"
import Container from "../../../components/Auth/Container"
import FormContainer from "../../../components/Auth/FormContainer"
import GenderSelect from "../../../components/Auth/GenderSelect"
import { ISignUpProps } from "../types"

import styled from "@emotion/styled";
import { media } from "../../../styles/media";
import { Button } from "@mui/material";

const Row = styled.li`
    display: flex;
    
    margin: 1rem 0;
`

const DuplicateCheckButton = styled(Button)`
    color: #ffffff;
    &:hover {
        background: #E57583;
    }
`

const SignUpButton = styled(Button)`
    color: #ffffff;
    width: 100%;
    font-size: 1rem;
    &:hover {
        background: #E57583;
    }

    &.inactive{
        background: #FFC0C8;
        pointer-events: none;
    }
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
    birth,
    phone,
    validData
  }: ISignUpProps) => {
    return (
        <Container>
            {/* <FormContainer>
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
                        onClick={onEmailDuplicateCheck}
                        state={`${validData.isEmailValid}`}
                        disabled={!(validData.isEmailValid)}>중복체크</Button>
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
                <Row>

                
                <AuthInput 
                    type="text" 
                    placeholder="생년월일 8자리 ( YYYY-MM-DD )"
                    value={birth}
                    onChange={onBirthDateChange}
                />
                </Row>
                <Row>
                <AuthInput 
                    type="phone" 
                    placeholder="핸드폰번호 ( - 제외 )"
                    value={phone}
                    onChange={onPhoneChange}
                />
                </Row>
                <Row>
                <Button onClick={onSignUp}  state={`${validData.isEmailValid&&validData.isPasswordValid&&validData.isPasswordCheckValid&&validData.isNameValid&&validData.isBirthDateValid&&validData.isPhoneValid}`}>회원가입 !</Button>
                </Row>
            </FormContainer> */}
            <ul style={{listStyle:'none',margin:'0',padding:'0',width:'100%'}}>
                <Row>
                    <Logo/>
                </Row>
                
                <li style={{display:'flex',justifyContent:'space-between',margin:'0',alignItems:'center',gap:'0.5rem',height:'fit-content'}}>
                    
                    <AuthInput 
                        type="email" 
                        placeholder="이메일"
                        value={email}
                        onChange={onEmailChange}
                    />
                    <DuplicateCheckButton variant="contained" onClick={onEmailDuplicateCheck}>
                        중복체크
                    </DuplicateCheckButton>
                    {/* <Button 
                        
                        onClick={onEmailDuplicateCheck}
                        state={`${validData.isEmailValid}`}
                        disabled={!(validData.isEmailValid)}>중복체크</Button> */}
                    
                </li>
                <li style={{display:'flex',justifyContent:'space-between',margin:'1rem 0',alignItems:'center',gap:'0.5rem',height:'fit-content'}}>
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
                </li>
                <li style={{display:'flex',justifyContent:'center',margin:'1rem 0',alignItems:'center',gap:'0.5rem'}}>
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
                </li>
                <li style={{display:'flex',justifyContent:'center',margin:'1rem 0'}}>
                
                <AuthInput 
                    type="text" 
                    placeholder="생년월일 8자리 ( YYYY-MM-DD )"
                    value={birth}
                    onChange={onBirthDateChange}
                />
                
                </li>
                <li style={{display:'flex',justifyContent:'center',margin:'1rem 0'}}>
                
                <AuthInput 
                    type="phone" 
                    placeholder="핸드폰번호 ( - 제외 )"
                    value={phone}
                    onChange={onPhoneChange}
                />
                
                </li>
                <li style={{display:'flex',justifyContent:'center',margin:'1rem 0'}}>
                    {/* <Button onClick={onSignUp}  state={`${validData.isEmailValid&&validData.isPasswordValid&&validData.isPasswordCheckValid&&validData.isNameValid&&validData.isBirthDateValid&&validData.isPhoneValid}`}>회원가입 !</Button> */}
                    <SignUpButton className={validData.isEmailValid&&validData.isPasswordValid&&validData.isPasswordCheckValid&&validData.isNameValid&&validData.isBirthDateValid&&validData.isPhoneValid?'active':'inactive'} onClick={onSignUp} variant="contained">회원가입!</SignUpButton>
                </li>
            </ul>
        </Container>
  )
}

export default SignUpView