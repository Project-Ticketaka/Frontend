import styled from "@emotion/styled"
import { Button } from "@mui/material";
import Logo from "../../../components/Common/Logo"
import AuthInput from "../../../components/Auth/AuthInput"
import Container from "../../../components/Auth/Container"
import { ILoginProps } from "../types"

const LogInButton = styled(Button)`
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
    <Container>

        <ul style={{listStyle:'none',margin:'5rem',padding:'0',gridColumn:'2',width:'100%'}}>
            <div style={{display:'flex',justifyContent:'center',marginBottom:'1.3rem'}}>
                <Logo/>
            </div>


                <li >
                {( email.length===0 || validData.isEmailValid)?<span style={{fontWeight:'300',fontSize:'0.8rem',color:'#ffffff00',userSelect:'none'}}>이메일은 @, .을 포함해야 합니다!</span>
                        :<span style={{fontWeight:'300',fontSize:'0.8rem',color:'#E57583'}}>이메일은 @, .을 포함해야 합니다!</span>}
                    </li>
            <li style={{display:'flex',justifyContent:'center',marginBottom:'1.3rem'}}>
                <AuthInput 
                    type="email" 
                    placeholder="이메일" 
                    value={email}
                    onChange={onEmailChange}
                />
            </li>
            

            <li >
            {( password.length ===0 || validData.isPasswordValid)?<span style={{fontWeight:'300',fontSize:'0.8rem',color:'#ffffff00',userSelect:'none'}}>비밀번호는 8자 이상이어야 합니다!</span>
                    :<span style={{fontWeight:'300',fontSize:'0.8rem',color:'#E57583'}}>비밀번호는 8자 이상이어야 합니다!</span>}
                </li>
            <li style={{display:'flex',marginBottom:'2rem',alignItems:'center',gap:'0.5rem',height:'fit-content'}}>
                    
                    
                    <AuthInput 
                    type="password"
                    placeholder="비밀번호" 
                    value={password}
                    onChange={onPasswordChange}
                />
                    
                </li>
            <li style={{display:'flex',justifyContent:'center',marginBottom:'1.3rem'}}>
                    <LogInButton className={validData.isEmailValid&&validData.isPasswordValid?'active':'inactive'} onClick={onLogin} variant="contained">로그인</LogInButton>
            </li>
            <li style={{display:'flex',justifyContent:'center'}}>
                <span style={{userSelect:'none',fontWeight:'300'}}>아직 계정이 없으신가요?</span>
                <span style={{color:'#FF7F8F',fontWeight:'500',margin:'0 0.5rem',cursor:'pointer'}} onClick={onGoToSignUp}>가입하기</span>
            </li>
        </ul>

        {/* <div>
                <Logo/>
            </div> */}
    </Container>
  )
}

export default LoginView