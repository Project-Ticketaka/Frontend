// import Button from "../../../components/Common/Button";
import Logo from "../../../components/Common/Logo";
import AuthInput from "../../../components/Auth/AuthInput"
import Container from "../../../components/Auth/Container"
import GenderSelect from "../../../components/Auth/GenderSelect"
import { ISignUpProps } from "../types"

import styled from "@emotion/styled";
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
    onAuthNumChange,
    onCheckAuthentication,
    onPasswordChange,
    onPasswordCheckChange,
    onNameChange,
    onSetGender,
    onBirthDateChange,
    onPhoneChange,
    onSignUp,
    email,
    authNum,
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
            <ul style={{listStyle:'none',margin:'0',padding:'0',width:'100%'}}>
                <Row>
                    <Logo/>
                </Row>
                
                <li >
                {validData.isNotEmailDuplicate?<></>
                :<span style={{fontSize:'0.8rem',color:'#E57583'}}>중복체크를 진행해 주세요!</span>}
                </li>
                <li style={{display:'flex',justifyContent:'space-between',marginBottom:'1rem',alignItems:'center',gap:'0.5rem',height:'fit-content'}}>    
                    <AuthInput 
                        type="email" 
                        placeholder="이메일"
                        value={email}
                        onChange={onEmailChange}
                        disabled={!!validData.isNotEmailDuplicate}
                    />
                    <DuplicateCheckButton variant="contained" onClick={onEmailDuplicateCheck} disabled={!!validData.isNotEmailDuplicate}>
                        중복체크
                    </DuplicateCheckButton>
                    
                </li>

                <li >
                {validData.isCheckAuthentication?<></>
                :<span style={{fontSize:'0.8rem',color:'#E57583'}}>이메일 인증을 완료해 주세요!</span>}
                </li>
                <li style={{display:'flex',justifyContent:'space-between',marginBottom:'1rem',alignItems:'center',gap:'0.5rem',height:'fit-content'}}>    
                    <AuthInput 
                        type="text" 
                        placeholder={`${email||"이메일"}로 전송된 인증번호를 입력해 주세요!`}
                        value={authNum}
                        onChange={onAuthNumChange}
                        disabled={!!validData.isCheckAuthentication}
                    />
                    <DuplicateCheckButton variant="contained" onClick={onCheckAuthentication} disabled={!!validData.isCheckAuthentication}>
                        인증하기
                    </DuplicateCheckButton>
                    
                </li>

                <li style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
                    {validData.isPasswordValid?<></>
                    :<span style={{fontSize:'0.8rem',color:'#E57583'}}>비밀번호는 8자 이상이어야 합니다!</span>}
                    {validData.isPasswordCheckValid?<></>
                    :<span style={{fontSize:'0.8rem',color:'#E57583'}}>비밀번호가 일치하지 않습니다!</span>}
                </li>
                <li style={{display:'flex',justifyContent:'space-between',marginBottom:'1rem',alignItems:'center',gap:'0.5rem',height:'fit-content'}}>
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

                <li >
                {validData.isNameValid?<></>
                :<span style={{fontSize:'0.8rem',color:'#E57583'}}>이름은 2글자 이상 입력해주세요!</span>}
                </li>
                <li style={{display:'flex',justifyContent:'center',marginBottom:'1rem',alignItems:'center',gap:'0.5rem'}}>
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
                
                
                <li>
                {validData.isBirthDateValid?<></>
                :<span style={{fontSize:'0.8rem',color:'#E57583'}}>생년월일 8자리를 입력해주세요! (YYYYMMDD)</span>}
                </li>
                <li style={{display:'flex',justifyContent:'center',marginBottom:'1rem'}}>
                <AuthInput 
                    type="text" 
                    placeholder="생년월일 8자리 ( YYYY-MM-DD )"
                    value={birth}
                    onChange={onBirthDateChange}
                />
                </li>

                <li>
                {validData.isPhoneValid?<></>
                :<span style={{fontSize:'0.8rem',color:'#E57583'}}>핸드폰번호를 올바르게 입력해주세요! (예시: 010-1234-1234)</span>}
                </li>
                <li style={{display:'flex',justifyContent:'center',marginBottom:'1rem'}}>
                <AuthInput 
                    type="phone" 
                    placeholder="핸드폰번호"
                    value={phone}
                    onChange={onPhoneChange}
                />
                
                </li>
                <li style={{display:'flex',justifyContent:'center',marginBottom:'1rem'}}>
                    {/* <Button onClick={onSignUp}  state={`${validData.isEmailValid&&validData.isPasswordValid&&validData.isPasswordCheckValid&&validData.isNameValid&&validData.isBirthDateValid&&validData.isPhoneValid}`}>회원가입 !</Button> */}
                    <SignUpButton className={validData.isEmailValid&&validData.isNotEmailDuplicate&&validData.isCheckAuthentication&&validData.isPasswordValid&&validData.isPasswordCheckValid&&validData.isNameValid&&validData.isBirthDateValid&&validData.isPhoneValid?'active':'inactive'} onClick={onSignUp} variant="contained">회원가입!</SignUpButton>
                </li>
            </ul>
        </Container>
  )
}

export default SignUpView