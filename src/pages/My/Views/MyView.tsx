import { useState } from "react"
import { useNavigate } from "react-router-dom"
import bg_ticket_start from '../../../assets/images/bg_ticket_start.png'
import bg_ticket from '../../../assets/images/bg_ticket.png'
import barcode_example from '../../../assets/images/barcode_example.png'
import useLogout from "../../../hooks/mutation/auth/useLogout"
const MyView = ({state,my}:any) => {

    const onSetMy = (m:string) => {
        my.current=m;
        navigate('/my',{state:my.current})
    }

    const navigate = useNavigate();
    const { mutate: logoutMutate } = useLogout(navigate);

    const onLogout = () => {
        alert('Logout!')
        logoutMutate({});
    }
    
    return (
    <>
        {my.current==='userInfo'
        ?
        <div style={{padding:'2rem 1rem',display:'grid',gridTemplateColumns: 'repeat(5, 1fr)',width:'100%',gap:'2rem'}}>
            <ul style={{listStyle:'none',margin:'0',padding:'0'}}>
                <li style={{margin:'1rem 0 1rem 0',cursor:'pointer',textAlign:'center'}} onClick={()=>onSetMy('userInfo')}>
                    <span style={{color:'#5C7D92',fontWeight:'700'}}> {">"} </span>회원정보
                </li>
                <li style={{margin:'1rem 0 1rem 0',cursor:'pointer',textAlign:'center',color:'#6A6A6A'}} onClick={()=>onSetMy('reservationInfo')}>
                    <span style={{color:'#ffffff'}}> {">"} </span> 예매내역
                </li>
                <li style={{margin:'1rem 0 1rem 0',cursor:'pointer',textAlign:'center'}} onClick={()=>onLogout()}>
                    <p style={{fontWeight:'700',color:'#ffffff',background:'#FF7F8F', borderRadius:'2rem',padding:'0.3rem 1rem'}}>로그아웃</p>
                </li>
            </ul>
            <ul style={{gridColumn:'span 4',listStyle:'none'}}>
                    <li style={{fontSize:'1.6rem'}}>
                        <p>{`규빈`} 님</p></li>
                    <li style={{width:'fit-content'}}>
                        <p style={{border:'2px solid #598A9E',borderRadius:'2rem',padding:'0.3rem 1rem'}}>💌 이메일 </p><span>{}</span></li>
                        <li style={{width:'fit-content'}}>
                        <p style={{border:'2px solid #598A9E',borderRadius:'2rem',padding:'0.3rem 1rem'}}>📞 연락처 </p><span>{}</span></li>
                        <li style={{width:'fit-content'}}>
                        <p style={{border:'2px solid #598A9E',borderRadius:'2rem',padding:'0.3rem 1rem'}}>🎂 생년월일 </p><span>{}</span>
                    </li>
                
            </ul>
        </div>
        :
        <div style={{padding:'2rem 1rem',display:'grid',gridTemplateColumns: 'repeat(5, 1fr)',width:'100%',gap:'2rem'}}>
            <ul style={{listStyle:'none',margin:'0',padding:'0',float:'left'}}>
                <li style={{margin:'1rem 0 1rem 0',cursor:'pointer',textAlign:'center',color:'#6A6A6A'}} onClick={()=>onSetMy('userInfo')}>
                    <span style={{color:'#ffffff'}}> {">"} </span>회원정보
                </li>
                <li style={{margin:'1rem 0 1rem 0',cursor:'pointer',textAlign:'center'}} onClick={()=>onSetMy('reservationInfo')}>
                    <span style={{color:'#5C7D92',fontWeight:'700'}}> {">"} </span> 예매내역
                </li>
                <li style={{width:'100%',margin:'1rem 0 1rem 0',cursor:'pointer',textAlign:'center'}} onClick={()=>onLogout()}>
                    <p style={{fontWeight:'700',color:'#ffffff',background:'#FF7F8F', borderRadius:'2rem',padding:'0.3rem 1rem'}}>로그아웃</p>
                </li>
            </ul>
            <ul style={{display:'flex',justifyContent:'center',listStyle:'none',margin:'0',padding:'0',width:'100%',gridColumn:'span 4'}}>
                {
                    // <li style={{paddingRight:'10rem',display:'flex',flexDirection:'row',height:'fit-content',width:'fit-content',margin:'0',padding:'0'}}>
                    <li style={{height:'13rem',justifyContent:'center',alignItems:'center',display:'flex',backgroundColor:'#F2F2F2',borderRadius:'0 1rem 1rem 0'}}>
                        
                            <img src="http://www.kopis.or.kr/upload/pfmPoster/PF_PF209894_230117_133614.gif" alt="poster" style={{height:'13rem',borderRadius:'1rem 0 0 1rem'}}/>    
                            <div style={{display:'grid',gridTemplateRows: 'repeat(3, 1fr)',padding:'0 3rem',alignItems:'center'}}>
                                
                                
                                <div style={{height:'100%',display:'flex',flexDirection:'row',alignItems:'center',gap:'1rem',borderBottom:'2px solid #C4C4C4'}}>
                                    <p style={{margin:'0',padding:'0',fontSize:'1.4rem',fontWeight:'700'}}>오페라의 유령 [부산]</p>
                                </div>
                                
                                <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'3rem',borderBottom:'2px solid #C4C4C4'}}>
                                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem'}}>
                                        <p>일시</p>
                                        <p style={{fontSize:'1.4rem',fontWeight:'500'}}>23년 2월 23일</p>
                                    </div>
                                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem'}}>
                                        <p>회차</p>
                                        <p style={{fontSize:'1.4rem',fontWeight:'500'}}>14:00</p>
                                    </div>
                                </div>
                                <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem'}}>
                                    <p>인원</p>
                                    <p style={{fontSize:'1.4rem',fontWeight:'500'}}>2명</p>
                                </div>
                            </div>
                            <img src={barcode_example} alt="barcode" style={{height:'11rem',padding:'2rem',borderLeft:'3px dashed #ffffff'}}/>
                    </li>
                }
            </ul>
            
        </div>
        }
        </>

    
  )
}

export default MyView