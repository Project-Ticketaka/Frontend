import { useState } from "react"
import { useNavigate } from "react-router-dom"
import bg_ticket_start from '../../../assets/images/bg_ticket_start.png'
import bg_ticket from '../../../assets/images/bg_ticket.png'
import barcode_example from '../../../assets/images/barcode_example.png'
const MyView = ({state,my}:any) => {

    const onSetMy = (m:string) => {
        my.current=m;
        navigate('/my',{state:my.current})
    }

    const navigate = useNavigate();
    const onLogout = () => {
        alert('Logout!')
        navigate('/')
    }
    
    return (
    <>
        {my.current==='userInfo'
        ?
        <div style={{padding:'2rem 1rem',display:'flex',flexDirection:'row',width:'100%',gap:'2rem'}}>
            <ul style={{listStyle:'none',margin:'0',padding:'0',width:'fit-content'}}>
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
            <div>
                <p>{} 님</p>
                <p>💌 이메일 </p><span>{}</span>
                <p>📞 연락처 </p><span>{}</span>
                <p>🎂 생년월일 </p><span>{}</span>
            </div>
        </div>
        :
        <div style={{padding:'2rem 1rem',display:'flex',flexDirection:'row',width:'100%',gap:'2rem'}}>
            <ul style={{listStyle:'none',margin:'0',padding:'0',width:'fit-content'}}>
                <li style={{margin:'1rem 0 1rem 0',cursor:'pointer',textAlign:'center',color:'#6A6A6A'}} onClick={()=>onSetMy('userInfo')}>
                    <span style={{color:'#ffffff'}}> {">"} </span>회원정보
                </li>
                <li style={{margin:'1rem 0 1rem 0',cursor:'pointer',textAlign:'center'}} onClick={()=>onSetMy('reservationInfo')}>
                    <span style={{color:'#5C7D92',fontWeight:'700'}}> {">"} </span> 예매내역
                </li>
                <li style={{margin:'1rem 0 1rem 0',cursor:'pointer',textAlign:'center'}} onClick={()=>onLogout()}>
                    <p style={{fontWeight:'700',color:'#ffffff',background:'#FF7F8F', borderRadius:'2rem',padding:'0.3rem 1rem'}}>로그아웃</p>
                </li>
            </ul>
            <div>
            <ul style={{width:'100%',listStyle:'none'}}>
                {
                    <li style={{paddingRight:'10rem'}}>
                        <div style={{width:'100%',justifyContent:'center',alignItems:'center',display:'flex',position:'relative'}}>
                            <img src="http://www.kopis.or.kr/upload/pfmPoster/PF_PF209894_230117_133614.gif" alt="poster" style={{height:'13rem',width:'10rem',borderRadius:'1rem 0 0 1rem'}}/>
                            <img src={bg_ticket} alt="poster" style={{height:'14.2rem',width:'35rem'}}/>
                            <div style={{display:'grid',gridTemplateColumns: 'repeat(2, 1fr)',position:'absolute',top:'50%',left:'59%',transform:'translate(-50%,-50%)',justifyContent:'center',alignItems:'center'}} >
                                <div style={{display:'grid',gridTemplateColumns: 'repeat(2, 1fr)',height:'14rem',width:'27rem',padding:'0'}}>
                                    <p style={{gridColumn:'span 2/ span 2',fontSize:'1.4rem',fontWeight:'00'}}>오페라의 유령 [부산]</p>
                                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'0.5rem'}}>
                                        <p>일시</p>
                                        <p style={{fontSize:'1.4rem',fontWeight:'500'}}>23년 2월 23일</p>
                                    </div>

                                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'0.5rem'}}>
                                        <p>회차</p>
                                        <p style={{fontSize:'1.4rem',fontWeight:'500'}}>14:00</p>
                                    </div>

                                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'0.5rem'}}>
                                        <p>인원</p>
                                        <p style={{fontSize:'1.4rem',fontWeight:'500'}}>2명</p>
                                    </div>

                                </div>
            
                                <img src={barcode_example} alt="barcode" style={{display:'inline-block',height:'11rem'}}/>
                
            
                            </div>            
                        </div>
                    </li>
                }
            </ul>
            </div>
            
        </div>
        }
        </>

    
  )
}

export default MyView