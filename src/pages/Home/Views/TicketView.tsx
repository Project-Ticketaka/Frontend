import bg_ticket_start from '../../../assets/images/bg_ticket_start.png'
import bg_ticket from '../../../assets/images/bg_ticket.png'
import barcode_example from '../../../assets/images/barcode_example.png'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const TicketView = ({reservationInfo}:any) => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(function() {
            navigate('/my',{state:'reservationInfo'});
          }, 5000);
    },[])
  return (
    <div style={{padding:'2rem 1rem',width:'100%',justifyContent:'center',alignItems:'center',display:'flex',position:'relative'}}>
        <img src={reservationInfo.data.reservation_poster} alt="poster" style={{height:'20rem',width:'13rem',borderRadius:'1rem 0 0 1rem'}}/>
        <img src={bg_ticket} alt="poster" style={{height:'22rem'}}/>
        
        <div style={{display:'grid',gridTemplateColumns: 'repeat(2, 1fr)',position:'absolute',top:'51%',left:'60%',transform:'translate(-50%,-50%)',justifyContent:'center',alignItems:'center'}} >
            <div style={{display:'grid',gridTemplateColumns: 'repeat(2, 1fr)',height:'20rem',width:'26rem',padding:'0'}}>
                <p style={{gridColumn:'span 2/ span 2',fontSize:'1.4rem',fontWeight:'700'}}>오페라의 유령 [부산]</p>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <p>일시</p>
                    <p style={{fontSize:'1.4rem',fontWeight:'700'}}>{reservationInfo.data.reservation_date}</p>
                </div>

                <div style={{display:'flex',flexDirection:'column'}}>
                    <p>회차</p>
                    <p style={{fontSize:'1.4rem',fontWeight:'700'}}>{reservationInfo.data.reservation_time}</p>
                </div>

                <div style={{display:'flex',flexDirection:'column'}}>
                    <p>인원</p>
                    <p style={{fontSize:'1.4rem',fontWeight:'700'}}>{reservationInfo.data.reservation_ticket_count} 명</p>
                </div>

                <div style={{display:'flex',flexDirection:'column'}}>
                    <p>가격</p>
                    <p style={{fontSize:'1.4rem',fontWeight:'700'}}>{reservationInfo.data.reservation_price}</p>
                </div>
            </div>
            
            <img src={barcode_example} alt="barcode" style={{display:'inline-block',height:'18rem'}}/>
                
            
        </div>
        
        {/* <div style={{display:'grid',gridTemplateColumns: 'repeat(3, 1fr)',width:'fit-content',placeItems:'center',gap:'0',backgroundImage:"url('../../../assets/images/bg_ticket.png')"}}>
            <img src={reservationInfo.data.reservation_poster} alt="poster" style={{height:'20rem',width:'13rem',borderRadius:'1rem 0 0 1rem'}}/>
            
            <div style={{display:'grid',gridTemplateColumns: 'repeat(2, 1fr)',height:'100%',width:'100%',padding:'0 0 0 2rem',position:'relative'}}>
                
                <p style={{gridColumn:'span 2/ span 2'}}>오페라의 유령 [부산]</p>

                <div style={{display:'flex',flexDirection:'column'}}>
                    <p>일시</p>
                    <p>{reservationInfo.data.reservation_date}</p>
                </div>
                
                <div style={{display:'flex',flexDirection:'column'}}>
                    <p>회차</p>
                <p>{reservationInfo.data.reservation_time}</p>
                </div>
                
                <div style={{display:'flex',flexDirection:'column'}}>
                    <p>인원</p>
                <p>{reservationInfo.data.reservation_ticket_count}</p>
                </div>

                <div style={{display:'flex',flexDirection:'column'}}>
                    <p>가격</p>
                <p>{reservationInfo.data.reservation_price}</p>
                </div>
                
            </div>
            <div>
                
                <img src={barcode_example} alt="barcode" style={{display:'inline',height:'18rem'}}/>
            </div>

            
        
        </div> */}
    </div>
  )
}

export default TicketView