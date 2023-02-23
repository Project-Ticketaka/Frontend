import styled from "@emotion/styled";
import { Button } from "@mui/material"
import CustomButton from "../../../components/Common/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import useCreateReservation from "../../../hooks/mutation/performance/useCreateReservation";
import { IReservationInfo } from "../../../types/reservation";
import customHistory from "../../../utils/history";
import useWithdrawReservation from "../../../hooks/mutation/performance/useWithdrawReservation";

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
    const { mutate: withdrawReservation } = useWithdrawReservation();

    const goCharge = () => {
        console.log(paymentInfo)
        createReservationMutate(paymentInfo);
    }

    const unlisten = customHistory.listen((location) => {
        if (customHistory.action === 'POP') {
            withdrawReservation(paymentInfo.checkData)
        }
    });

    const preventClose = (e:BeforeUnloadEvent) => {
        e.preventDefault();
        e.returnValue = "정말?"; // chrome에서는 설정이 필요해서 넣은 코드
    }
    useEffect(()=>{
        //뒤로가기 이벤트
        unlisten();
        //창 닫기 및 새로고침 이벤트
        (() => {
            window.addEventListener("beforeunload", preventClose);    
        })();
    
        return () => {
            window.removeEventListener("beforeunload", preventClose);
        };
    })

  return (
    <div style={{padding:'2rem 1rem',display:'flex',flexDirection:'column',width:'100%',gap:'1.5rem'}}>
        <h1 style={{margin:'0', padding:'0'}}>₩ 결제하기</h1>
        <div style={{display:'flex',flexDirection:'row',gap:'1.3rem',alignItems:'center',justifyContent:'space-between'}}>
                <div style={{display:'flex',flexDirection:'row',gap:'1.5rem',alignItems:'center',flex:'2'}}>
                    <img src={paymentInfo.reservationInfo.detail.data.performanceDetailInfo.poster} alt={paymentInfo.reservationInfo.detail.data.performanceDetailInfo.title} style={{width:'9rem',height:'11.7rem',borderRadius:'5px'}}/>
                    
                    <div >
                        <p style={{fontSize:"1.6rem", fontWeight:'500', margin:'0'}}>{paymentInfo.reservationInfo.detail.data.performanceDetailInfo.title}</p>
                        <p style={{fontSize:"1.2rem", fontWeight:'500'}}>{paymentInfo.reservationInfo.selectedDate}</p>
                        <p style={{fontSize:"1.2rem", fontWeight:'500'}}>{paymentInfo.reservationInfo.selectedTime}</p>
                        <div style={{display:'flex', alignItems:'center',gap:'0.4rem'}}>
                            <svg style={{width:'1.2rem'}} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.6461 8.64708C10.9752 8.64708 12.8617 6.76059 12.8617 4.43145C12.8617 2.10231 10.9752 0.21582 8.6461 0.21582C6.31697 0.21582 4.43047 2.10231 4.43047 4.43145C4.43047 6.76059 6.31697 8.64708 8.6461 8.64708ZM8.6461 10.7549C5.83217 10.7549 0.214844 12.1671 0.214844 14.9705V17.0783H17.0774V14.9705C17.0774 12.1671 11.46 10.7549 8.6461 10.7549Z" fill="black"/>
                            </svg>
                            <p style={{fontSize:"1.2rem", fontWeight:'500', margin:'0'}}>{paymentInfo.reservationInfo.people}</p>
                        </div>
                    </div>
                </div>
                
                <div style={{display:'flex',flexDirection:'column',gap:'1rem',padding:'0',flex:'1'}}>
                
                    <p style={{margin:'0',color:'#4A4A4A'}}>결제 방식 선택</p>
                    <div style={{display:'flex',flexDirection:'row',gap:'1.3rem',justifyContent:'end'}}>
                        
                        <PaymentWayButton className={paymentWay==="card"?'active':'inactive'} size="large" variant="outlined" id="card" onClick={()=>setPaymentWay('card')}>카드</PaymentWayButton>
                        <PaymentWayButton className={paymentWay==="cash"?'active':'inactive'} size="large" variant="outlined" id="cash" onClick={()=>setPaymentWay('cash')}>무통장 입금</PaymentWayButton>
                        
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
            
        <div style={{border:'2px #C8C8C8 solid',borderRadius:'11px',padding:'1rem'}}>
            <p>⚠️ 결제 시 유의 사항</p>
            <p>카드 결제 : 카드취소 승인일로부터 5~7일 (카드사 업무일기준) 이내에 취소 승인확인이 가능합니다.(카드결제는 결제하신 수단 그대로만 환불 가능)</p>
            <p>무통장 입금 : 취소 승인일로부터 5~7일 후 결제한 은행으로 자동 입금</p>
        </div>
    </div>
  )
}

export default PaymentView