import { useState } from "react";
import useCancelReservation from "../../../hooks/mutation/reservation/useCancelResservation";
import { useNavigate } from "react-router-dom";
import cancelimg from "../../../assets/images/cancelReservation.png";
import useToastElement from "../../../hooks/common/useToastElement";
import useToastMessage from "../../../hooks/common/useToastMessage";
import ReservationItem from "../ReservationItem";



const ReservationInfoView = ({data}:any) => {

    const [open, setOpen] = useState(false);
    const [detail, setDetail] = useState({
        "reservationId": 0,
        "reservationTicketCount": 0,
        "performanceTitle": "",
        "reservationDate": "0000-00-00",
        "reservationTime": "00:00",
        "reservationPrice": 0,
        "reservationTotalPrice": 0,
        "reservationPoster": "0",
        "reservationDeleted": "N",
        "reservationCreateAt": "0000-00-00T00:00:00"
    });

    const showToast = useToastMessage();
    const handleClickOpen = (reservationItem:any) => {
        setOpen(true);
        setDetail(reservationItem)
      };
      const handleClose = () => {
        setOpen(false);
      };

      const navigate=useNavigate();
      const { mutate: cancelReservation } = useCancelReservation(navigate);
      const showToastElement = useToastElement();

      const onCancelReservation = (reservation_id:number) => {

        showToastElement(
          <div style={{display:'flex',flexDirection:'column'}}>
              <p>정말로 취소하시겠습니까?</p>
              
              <span style={{color:'#E57583',textAlign:'end'}}
              onClick={()=>{
                cancelReservation(reservation_id);
              }}>확인</span>
          </div>
      )
        
      }
    return (
        <ul style={{display:'flex',flexDirection:'column',justifyContent:'center',listStyle:'none',margin:'0',padding:'0',width:'100%',gridColumn:'span 4',gap:'3rem'}}>
        {data.map((item:any)=>{
            return(
                <>
                {item.reservationDeleted==="N"?
                    <ReservationItem item={item}/>
                  :
                  
                  <li key={item.reservationId} style={{display:'flex',justifyContent:'center',padding:'0 18rem',cursor:'pointer'}} onClick={()=>showToast("error","예매취소된 공연입니다!")}>
                    
                  <div style={{position:'relative',height:'13rem',width:'100%',justifyContent:'center',alignItems:'center',display:'flex',backgroundColor:'#F2F2F2',borderRadius:'1rem'}}>
                  <img src={cancelimg} alt="cancel" style={{position:'absolute', zIndex:'99'}} />
                    <div style={{position:'absolute',height:'13rem',width:'100%',justifyContent:'center',alignItems:'center',display:'flex',backgroundColor:'#333',opacity:'0.5',borderRadius:'1rem', zIndex:'1'}}/>
                  
                        <img src={item.reservationPoster} alt="poster" style={{height:'13rem',borderRadius:'1rem 0 0 1rem'}}/>
                        <div style={{width:'100%',display:'grid',gridTemplateRows: 'repeat(3, 1fr)',margin:'0 3rem',alignItems:'center'}}>
                            <div style={{height:'100%',display:'flex',flexDirection:'row',alignItems:'center',gap:'1rem',borderBottom:'2px solid #C4C4C4'}}>
                                <p style={{margin:'0',padding:'0',fontSize:'1.4rem',fontWeight:'700'}}>{item.performanceTitle}</p>
                            </div>
                            
                            <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderBottom:'2px solid #C4C4C4'}}>
                                <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem'}}>
                                    <p>일시</p>
                                    <p style={{fontSize:'1.4rem',fontWeight:'500'}}>{item.reservationDate}</p>
                                </div>
                                <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem'}}>
                                    <p>회차</p>
                                    <p style={{fontSize:'1.4rem',fontWeight:'500'}}>{item.reservationTime}</p>
                                </div>
                            </div>
                            <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem'}}>
                                <p>인원</p>
                                <p style={{fontSize:'1.4rem',fontWeight:'500'}}>{item.reservationTicketCount} 명</p>
                            </div>
                        </div>
                    </div>
                    
                    </li>    
                  }
                    
                    
                
                {/* <ReservationInfoModal open={open} setOpen={setOpen} detail={detail}/> */}
              </>
            )
        })
        }
    </ul>
    
    
    )
  
}

export default ReservationInfoView