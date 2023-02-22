import barcode_example from '../../../assets/images/barcode_example.png'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const TicketView = ({reservationInfo}:any) => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(function() {
            navigate('/my/rsv',{state:'rsv'});
        }, 5000);
    },[])
  return (
    <div style={{padding:'2rem 1rem',width:'100%',justifyContent:'center',alignItems:'center',display:'flex',position:'relative'}}>

        <div style={{height:'15rem',justifyContent:'center',alignItems:'center',display:'flex',backgroundColor:'#F2F2F2',borderRadius:'0 1rem 1rem 0'}}>
                
                <img src={reservationInfo.detail.data.performanceDetailInfo.poster} alt="poster" style={{height:'15rem',borderRadius:'1rem 0 0 1rem'}}/>    
                <div style={{display:'grid',gridTemplateRows: 'repeat(3, 1fr)',padding:'0 3rem',alignItems:'center'}}>
                    
                    
                    <div style={{height:'100%',display:'flex',flexDirection:'row',alignItems:'center',gap:'1rem',borderBottom:'2px solid #C4C4C4'}}>
                        <p style={{margin:'0',padding:'0',fontSize:'1.4rem',fontWeight:'700'}}>{reservationInfo.detail.data.performanceDetailInfo.title}</p>
                    </div>
                    
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'3rem',borderBottom:'2px solid #C4C4C4'}}>
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem'}}>
                            <p>일시</p>
                            <p style={{fontSize:'1.4rem',fontWeight:'500'}}>{reservationInfo.selectedDate}</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem'}}>
                            <p>회차</p>
                            <p style={{fontSize:'1.4rem',fontWeight:'500'}}>{reservationInfo.selectedTime}</p>
                        </div>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem'}}>
                        <p>인원</p>
                        <p style={{fontSize:'1.4rem',fontWeight:'500'}}>{reservationInfo.people} 명</p>
                    </div>
                </div>
                <img src={barcode_example} alt="barcode" style={{height:'13rem',padding:'2rem',borderLeft:'3px dashed #ffffff'}}/>
        </div>
    </div>
  )
}

export default TicketView