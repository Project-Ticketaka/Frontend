
import React, { useRef } from 'react'
import { useLocation,useNavigate } from "react-router-dom"
import useToastElement from "../../../hooks/common/useToastElement";

// const Msg = ({ closeToast, toastProps }:any) => (
    
//   )

const NavView = () => {
    const {state}=useLocation();
    const my=useRef(state);
    const navigate = useNavigate();
    
    const showToastElement = useToastElement();
    
    const onSetMy = (m:string) => {
        my.current=m;
        navigate(`/my/${m}`,{state:my.current})
    }

    const doLogout = () => {
        localStorage.removeItem("accessToken");
        navigate("/", { replace: true });
    }
    const onLogout = () => {
        showToastElement(
            <div style={{display:'flex',flexDirection:'column'}}>
                <p>정말로 로그아웃하시겠습니까?</p>
                <span style={{color:'#E57583',textAlign:'end'}}
                onClick={doLogout}>확인</span>
                
            </div>
        )
        // localStorage.removeItem("accessToken");
        // navigate("/", { replace: true });
    }

    return (
        <ul style={{listStyle:'none',margin:'0',padding:'0',textAlign:'center'}}>
            <li style={{margin:'1rem 0',cursor:'pointer',textAlign:'center',userSelect:'none'}} onClick={()=>onSetMy('info')}>
                {state==='info'?<><span style={{color:'#FF7F8F',fontWeight:'700'}}> {">"} </span><span style={{color:'#333'}}>회원정보</span></>:<><span style={{color:'#ffffff'}}> {">"} </span><span style={{color:'#6A6A6A'}}>회원정보</span></>}
            </li>
            <li style={{margin:'1rem 0',cursor:'pointer',textAlign:'center',userSelect:'none'}} onClick={()=>onSetMy('rsv')}>
                {state==='rsv'?<><span style={{color:'#FF7F8F',fontWeight:'700'}}> {">"} </span><span style={{color:'#333'}}> 예매내역</span></>:<><span style={{color:'#ffffff'}}> {">"} </span><span style={{color:'#6A6A6A'}}>예매내역</span></>}
            </li>
            <li style={{margin:'2rem 0',cursor:'pointer',textAlign:'center',userSelect:'none'}} onClick={()=>onLogout()}>
                {/* <ToastContainer /> */}
                <span style={{fontWeight:'700',color:'#ffffff',background:'#FF7F8F', borderRadius:'2rem',padding:'0.6rem 1rem'}}>로그아웃</span>
            </li>
        </ul>
    )
}

export default NavView