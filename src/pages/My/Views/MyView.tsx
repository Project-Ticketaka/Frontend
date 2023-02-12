import { useState } from "react"
import { useNavigate } from "react-router-dom"

const MyView = () => {
    const [my,setMy]=useState('reservationInfo')
    const onSetMy = (m:string) => {
        setMy(`${m}`)
    }
    const navigate = useNavigate();
    const onLogout = () => {
        alert('Logout!')
        navigate('/')
    }
  return (
    <>
        {my==='userInfo'
        ?
        <div style={{padding:'2rem 1rem',display:'flex',flexDirection:'row',width:'100%',gap:'3rem'}}>
            <ul style={{listStyle:'none',margin:'0',padding:'0',width:'fit-content'}}>
                <li style={{margin:'1rem 0 1rem 0',cursor:'pointer'}} onClick={()=>onSetMy('userInfo')}>
                    <span style={{color:'#5C7D92',fontWeight:'700'}}> {">"} </span>회원정보
                </li>
                <li style={{margin:'1rem 0 1rem 0',cursor:'pointer'}} onClick={()=>onSetMy('reservationInfo')}>
                    <span style={{color:'#ffffff'}}> {">"} </span> 예매내역
                </li>
                <li style={{margin:'1rem 0 1rem 0',cursor:'pointer'}} onClick={()=>onLogout()}>
                    <p style={{fontWeight:'700',color:'#ffffff',background:'#FF7F8F', borderRadius:'2rem',padding:'0.3rem 1rem'}}>로그아웃</p>
                </li>
            </ul>
            <div>
                <p>{} 님</p>
                <p>💌 이메일 </p><span>{}</span>
                <p>📞 연락처 </p><span>{}</span>
                <p>🎂 생년월일 </p><span>{}</span>
            </div>
        </div>
        :
        <div style={{padding:'2rem 1rem',display:'flex',flexDirection:'row',width:'100%',gap:'3rem'}}>
            <ul style={{listStyle:'none',margin:'0',padding:'0',width:'fit-content'}}>
                <li style={{margin:'1rem 0 1rem 0',cursor:'pointer'}} onClick={()=>onSetMy('userInfo')}>
                    <span style={{color:'#ffffff'}}> {">"} </span>회원정보
                </li>
                <li style={{margin:'1rem 0 1rem 0',cursor:'pointer'}} onClick={()=>onSetMy('reservationInfo')}>
                    <span style={{color:'#5C7D92',fontWeight:'700'}}> {">"} </span> 예매내역
                </li>
                <li style={{margin:'1rem 0 1rem 0',cursor:'pointer'}} onClick={()=>onLogout()}>
                    <p style={{fontWeight:'700',color:'#ffffff',background:'#FF7F8F', borderRadius:'2rem',padding:'0.3rem 1rem'}}>로그아웃</p>
                </li>
            </ul>
            <div>
                {
                    <li>
                        
                    </li>
                }
            </div>
        </div>
        }
        </>

    
  )
}

export default MyView