import styled from "@emotion/styled";
import { Button } from "@mui/material"
import CustomButton from "../../../components/Common/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import useCreateReservation from "../../../hooks/mutation/performance/useCreateReservation";
import { IReservationInfo } from "../../../types/reservation";

const PaymentWayButton = styled(Button)`
    
    width: fit-content;
    height: fit-content;
    padding: 0.8rem 2rem;
    color: #858585;
    
    border:0.2rem #CACACA solid;
    border-radius: 2rem;


    &:hover {
        border:0.2rem #FF7F8F solid;
        background: #ffffff;
    }

    &.active{
        border:0.2rem #FF7F8F solid;
        color: #333;
    }

`;

const ChargeButton = styled(Button)`
    
    height: fit-content;
    width: 100%;
    
    padding: 0.3rem 3rem;
    
    color: #858585;
    
    border:0.2rem #CACACA solid;
    border-radius: 2rem;

    &:hover {
        border:0.2rem #FF7F8F solid;
        background: #ffffff;
    }

    &.active{
        border:0.2rem #FF7F8F solid;
        color: #333;
    }

`;




const PaymentView = ({paymentInfo}:any) => {
    const navigate=useNavigate()
    const [paymentWay,setPaymentWay]=useState('')
    const { mutate: createReservationMutate } = useCreateReservation(navigate);

    const goCharge = () => {
        
        // let reservationInfo:IReservationInfo = {
            // "memberId": paymentInfo.checkData.memberId,
            // "memberEmail": paymentInfo.checkData.memberId,
            // "performanceId": paymentInfo.reservationInfo.detail.performanceDetailInfo.prfId,
            // "prf_poster": paymentInfo.reservationInfo.detail.performanceDetailInfo.poster,
            // "prfSessionId": paymentInfo.reservationInfo.detail.prfSessionList[0].prfSessionId,
            // "price": paymentInfo.reservationInfo.seatPrice*paymentInfo.people,
            // "reservationInfo": paymentInfo.reservationInfo
        // };
        
        
        createReservationMutate(paymentInfo);
        
    }

  return (
    <div style={{padding:'2rem 1rem',display:'flex',flexDirection:'column',width:'100%'}}>
        <h1 style={{margin:'0', padding:'0'}}>₩ 결제하기</h1>
        <div style={{paddingTop :'2rem',display:'flex',flexDirection:'row',gap:'1.3rem',alignItems:'center',justifyContent:'space-between'}}>
            
                
                <div style={{display:'flex',flexDirection:'row',gap:'1.5rem',alignItems:'center',flex:'2'}}>
                    <img src={paymentInfo.reservationInfo.detail.performanceDetailInfo.poster} alt={paymentInfo.reservationInfo.detail.performanceDetailInfo.title} style={{width:'9rem',height:'11.7rem',borderRadius:'5px'}}/>
                    
                    <div >
                        <p style={{fontSize:"1.6rem", fontWeight:'500', margin:'0'}}>{paymentInfo.reservationInfo.detail.performanceDetailInfo.title}</p>
                        <p style={{fontSize:"1rem", fontWeight:'500'}}>{paymentInfo.reservationInfo.selectedDate}</p>
                        <p style={{fontSize:"1rem", fontWeight:'500'}}>{paymentInfo.reservationInfo.selectedTime}</p>
                        <div style={{display:'flex', alignItems:'center',gap:'0.4rem'}}>
                            <svg style={{width:'1.3rem'}} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.6461 8.64708C10.9752 8.64708 12.8617 6.76059 12.8617 4.43145C12.8617 2.10231 10.9752 0.21582 8.6461 0.21582C6.31697 0.21582 4.43047 2.10231 4.43047 4.43145C4.43047 6.76059 6.31697 8.64708 8.6461 8.64708ZM8.6461 10.7549C5.83217 10.7549 0.214844 12.1671 0.214844 14.9705V17.0783H17.0774V14.9705C17.0774 12.1671 11.46 10.7549 8.6461 10.7549Z" fill="black"/>
                            </svg>
                            <p style={{fontSize:"1rem", fontWeight:'500', margin:'0'}}>{paymentInfo.reservationInfo.people}</p>
                        </div>
                    </div>
                </div>
                
                <div style={{display:'flex',flexDirection:'column',gap:'1rem',padding:'0',flex:'1'}}>
                
                    <p style={{margin:'0',color:'#4A4A4A'}}>결제 방식 선택</p>
                    <div style={{display:'flex',flexDirection:'row',gap:'1.3rem',justifyContent:'end'}}>
                        
                        <PaymentWayButton className={paymentWay==="card"?'active':'inactive'} size="large" variant="outlined" id="card" onClick={()=>setPaymentWay('card')}>카드</PaymentWayButton>
                        <PaymentWayButton className={paymentWay==="cash"?'active':'inactive'} size="large" variant="outlined" id="cash" onClick={()=>setPaymentWay('cash')}>무통장입금</PaymentWayButton>
                        
                    </div>
                    <p style={{margin:'0',color:'#4A4A4A'}}>최종 결제 금액</p>
                    <div style={{display:'flex',flexDirection:'row',gap:'1.3rem',alignItems:'center',justifyContent:'end'}}>
                        <p style={{margin:'0',fontSize:'1.7rem',color:'#5C7D92'}}>₩ {Number(paymentInfo.reservationInfo.seatPrice*paymentInfo.reservationInfo.people).toLocaleString('ko-KR')}</p>
                        <CustomButton color="blue" size="lg" onClick={()=>goCharge()}>
                            결제하기
                        </CustomButton>
                    </div>
                </div>
        </div>
            
        
    </div>
  )
}

export default PaymentView