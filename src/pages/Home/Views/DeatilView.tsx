import { Button } from "@mui/material";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Map from "../Map";
import styled from "@emotion/styled";
import './custom-datepicker.scss';
import useCheckReservation from "../../../hooks/mutation/performance/useCheckReservation";
import useGetPerformanceSession from "../../../hooks/query/performance/useGetPerformanceSession";
import customHistory from "../../../utils/history";
import React from "react";
import { Retryer } from "react-query/types/core/retryer";
import NoData from "../../../components/Common/NoData";

const SessionButton = styled(Button)`
    
    height: fit-content;
    
    padding: 0.2rem 0.4rem;
    font-size: 1.1rem;
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

const ReservationButton = styled(Button)`
    
    
    width: 100%;
    height: fit-content;
    padding: 0.7rem 3rem;
    font-size: 1.1rem;
    color: #ffffff;
    background: #5C7D92;
    
    
    border-radius: 2rem;

    &:hover {
        background: #5C7D92;
    }

    
`;

const DeatilView = ({performanceData}:any) => {

    //console.log(typeof performanceData==='undefined');
    console.log(performanceData.code)

    registerLocale("ko", ko); //한국어 설정
    const [selectedDate,setSelectedDate] = useState(performanceData.data.performanceDetailInfo.startDate)
    
    const [selectedTime,setSelectedTime] = useState('')
    const [selectedTimeId,setSelectedTimeId] = useState('')
    
    const [seatType,setSeatType] = useState('')
    const [seatPrice,setSeatPrice] = useState(0)
    
    const [sessionTimeList,setSessionTimeList] = useState(performanceData.data.prfSessionList.filter((data: { prfSessionId: string,prfSessionDate: string,prfSessionTime:string,available:boolean })=>data.prfSessionDate===selectedDate))

    const [inform,setInform] = useState('pf')
    const navigate=useNavigate()
    
    const onChangeDate = (e:any) =>{
        //console.log(`${new Date(e).getFullYear()}-${new Date(e).getMonth()>=10?new Date(e).getMonth()+1:'0'+(new Date(e).getMonth()+1)}-${new Date(e).getDate()>=10?new Date(e).getDate():'0'+(new Date(e).getDate())}`)
        //console.log(performanceData.prfSessionList.filter((data: { prfSessionId: string,prfSessionDate: string,prfSessionTime:string,available:boolean })=>data.prfSessionDate===`${new Date(e).getFullYear()}.${new Date(e).getMonth()>=10?new Date(e).getMonth()+1:'0'+(new Date(e).getMonth()+1)}.${new Date(e).getDate()}`))
        setSelectedDate(`${new Date(e).getFullYear()}-${new Date(e).getMonth()>=10?new Date(e).getMonth()+1:'0'+(new Date(e).getMonth()+1)}-${new Date(e).getDate()>=10?new Date(e).getDate():'0'+(new Date(e).getDate())}`)
        setSelectedTime('')
        setSessionTimeList(performanceData.data.prfSessionList.filter((data: { prfSessionId: string,prfSessionDate: string,prfSessionTime:string,available:boolean })=>data.prfSessionDate===`${new Date(e).getFullYear()}-${new Date(e).getMonth()>=10?new Date(e).getMonth()+1:'0'+(new Date(e).getMonth()+1)}-${new Date(e).getDate()>=10?new Date(e).getDate():'0'+(new Date(e).getDate())}`))
    }
    
    

    // useEffect(()=>{
    //     // setSessionTimeList(performanceData.prfSessionList.filter((data: { prfSessionId: string,prfSessionDate: string,prfSessionTime:string,available:boolean })=>data.prfSessionDate===selectedDate))
        
    // },[customHistory]);

    const { data, isLoading } = useGetPerformanceSession(selectedTimeId);

    const selectSessionTime = (id:string, time:string) => {
        // alert(`${id}, ${time}`);
        
        setSelectedTimeId(id)
        setSelectedTime(time)
    }

    const onSetSeatType = (seat_type:string, seat_price:string) => {
        setSeatType(seat_type)
        setSeatPrice(Number(seat_price))
    }

    const [people,setPeople] = useState(1)


    const { mutate: checkReservationMutate } = useCheckReservation(navigate);

    const goReservation = () => {

        if(selectedTime){
            alert(`${selectedDate} ${selectedTime}회차 ${seatType} ${people}명  총 ${seatPrice*people}원`)
        }else{
            alert('회차를 선택해 주세요!')
        }
        
        
        if(localStorage.getItem("memberEmail")){
            let reservationInfo = {
                memberId: localStorage.getItem("memberEmail"),
                memberEmail: localStorage.getItem("memberEmail"), 
                selectedDate:selectedDate,
                selectedTime:selectedTime,
                people:people,
                seatType: seatType,
                seatPrice: seatPrice,
                detail:performanceData,
            }
            checkReservationMutate({checkData:{"memberId":localStorage.getItem("memberEmail"),"prfSessionId":selectedTimeId,"count":people},"reservationInfo":reservationInfo})
        }else{
            alert('로그인해주세요!')
            navigate('/login')
        }

        
    }
    
    const onSetInform = (i:string) => {
        setInform(i)
    }

    const onSetPeople = (amount:number) => {
        if(amount <0){
            people===1
            ? alert('선택 가능한 최소 인원은 1명입니다!')
            : setPeople(people-1);
        }else{
            setPeople(people+1);
        }
    }
    const seat_grade = ["#FF7F8F","#94B74B","#B65C87","#598A9E","#F0CC86"]

    
        
    return(
        
        
            
            <div style={{padding:'2rem 1rem',display:'flex',flexDirection:'column',width:'100%'}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            {/* InfoView {pfId} */}
                <div style={{display:'flex',flexDirection:'row',gap:'1.3rem',marginTop:'1rem'}}>
                    <img src={performanceData.data.performanceDetailInfo.poster} alt={performanceData.data.performanceDetailInfo.title} style={{width:'9rem',height:'11.7rem',borderRadius:'5px'}}/>
                    <div style={{display:'flex',flexDirection:'column',gap:'1.5rem',width:'100%'}}>
                        
                        <p style={{fontSize:"1.5rem", fontWeight:'500', margin:'0',textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>{performanceData.data.performanceDetailInfo.title}</p>
                        
                        <p style={{fontSize:"0.9rem", color:'#575757', padding:'0', margin:'0.1rem 0 0 0'}}>장소 | {performanceData.data.facilityDTO.facilityName}</p>
                        <p style={{fontSize:"0.9rem", color:'#575757', padding:'0', margin:'0.1rem 0 0 0'}}>관람시간 | {performanceData.data.performanceDetailInfo.runtime}</p>
                        <p style={{fontSize:"0.9rem", color:'#575757', padding:'0', margin:'0.1rem 0 0 0'}}>관람등급 | {performanceData.data.performanceDetailInfo.viewingAge}</p>
                        <p style={{fontSize:"0.9rem", color:'#575757', padding:'0', margin:'0.1rem 0 0 0'}}>기간 | {performanceData.data.performanceDetailInfo.startDate} ~ {performanceData.data.performanceDetailInfo.endDate}</p>
                        
                    </div>
                </div>
                
                <DatePicker
                        wrapperClassName="datepicker"
                        selected={new Date(selectedDate)}
                        highlightDates={performanceData.data.prfSessionList.map((data: { prfSessionDate: string | number | Date; })=>new Date(data.prfSessionDate))}
                        onChange={onChangeDate}
                        disabledKeyboardNavigation //다른 월의 같은 날짜시 자동 selected 되는 현상 방지
                        locale="ko" 
                        inline
                        minDate={new Date(performanceData.data.performanceDetailInfo.startDate)}
                        maxDate={new Date(performanceData.data.performanceDetailInfo.endDate)}
                        popperPlacement="auto" //화면 중앙에 팝업이 출현
                        />
                    
                    <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gridTemplateRows:'repea(4,1fr)',gap:'1.3rem',marginTop:'0.5rem'}}>
                        <div style={{gridRow:'span 3'}}>
                            <div style={{display:'flex', flexDirection:'column',gap:'0.5rem'}}>
                            {
                                sessionTimeList.map((sessionTime:any)=>{
                                    return(
                                    // <span style={{border:'0.2rem #FF7F8F solid', borderRadius:'2rem', padding:'0.3rem 1rem',fontSize:'1.3rem',color:'#858585'}}>{time}</span>
                                        <SessionButton className={sessionTime.prfSessionId===selectedTimeId?'active':'inactive'} value={sessionTime.prfSessionTime} size="large" variant="outlined" id={sessionTime.prfSessionId}  onClick={()=>selectSessionTime(sessionTime.prfSessionId,sessionTime.prfSessionTime)}>{sessionTime.prfSessionTime}</SessionButton>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div style={{gridRow:'span 3'}}>
                            <div style={{display:'flex', flexDirection:'column',gap:'0.5rem'}}>
                            
                            {
                            performanceData.data.performanceDetailInfo.ticketPrice.map((seat: any,idx:number)=>{
                                return(
                                    seatType===seat.seatType
                                    ?<p style={{margin:'0 0 1rem 0',cursor:'pointer',verticalAlign:'middle'}} onClick={()=>onSetSeatType(seat.seatType,seat.price)}><span style={{fontSize:'1.3rem',marginRight:'1rem',color:`${seat_grade[idx]}`,userSelect:'none',verticalAlign:'middle'}}>■</span>{seat.seatType} | {Number(seat.price).toLocaleString('ko-KR')}원</p>
                                    :<p style={{margin:'0 0 1rem 0',cursor:'pointer',verticalAlign:'middle'}} onClick={()=>onSetSeatType(seat.seatType,seat.price)}><span style={{fontSize:'1.3rem',marginRight:'1rem',color:`${seat_grade[idx]}`,userSelect:'none',verticalAlign:'middle'}}>□</span>{seat.seatType} | {Number(seat.price).toLocaleString('ko-KR')}원</p>
                                    
                                )
                            })
                        }
                            </div>
                        </div>
                        
                            <div style={{display:'flex',flexDirection:'row',height:'fit-content',alignItems:'center',gap:'3rem',border:'0.3rem #CACACA solid', borderRadius:'2rem',padding:'0.5rem 1rem',userSelect:'none'}}>
                                <span style={{cursor:'pointer',fontSize:'1.5rem'}} onClick={()=>onSetPeople(-1)}>-</span>
                                <p style={{fontSize:'1.5rem', margin:'0'}}>{people}</p>
                                <span style={{cursor:'pointer',fontSize:'1.5rem'}} onClick={()=>onSetPeople(+1)}>+</span>
                            </div>
                        
                            <ReservationButton size="large" onClick={()=>goReservation()}>
                                예매하기
                            </ReservationButton>
    
                    </div>
    
            </div>
    
            
            
            {
                inform==='pf'
                ? 
                <>
                    <div>
                <ul style={{display: 'flex', flexWrap:'wrap', listStyle:'none',paddingLeft:'0px',margin:'0',paddingRight:'10rem',gap:'2rem'}}>
                    <li style={{cursor:'pointer',userSelect:'none'}} onClick={()=>onSetInform('pf')}>
                        
                            <p style={{display: 'inline-block', padding: '5px 10px',marginBottom: '0.7rem',borderBottom:'0.35rem #597A8D solid'}}>공연 상세 정보</p>
                        
                        
                    </li>
                    <li style={{cursor:'pointer',userSelect:'none'}} onClick={()=>onSetInform('pl')}>
                        
                            <p style={{display: 'inline-block', padding: '5px 10px',marginBottom: '0.7rem'}}>장소 정보</p>
                        
                    </li>
                </ul>
            </div>
                
                <div style={{display:'flex',flexDirection:'column',justifyItems:'center'}}>
                
                {
                    performanceData.data.performanceDetailInfo.styUrls.map((url: string | undefined,idx: any)=>{
                        return(<img src={url} alt={`공연 상세 정보 ${idx}`} style={{display:'block',margin:'auto',width:'fit-content'}}/>)})
                }
                </div>
                </>
                :
                
            <>
            <div>
                <ul style={{display: 'flex', flexWrap:'wrap', listStyle:'none',paddingLeft:'0px',margin:'0',paddingRight:'10rem',gap:'2rem'}}>
                    <li style={{cursor:'pointer',userSelect:'none'}} onClick={()=>onSetInform('pf')}>
                    
                        <p style={{display: 'inline-block', padding: '5px 10px',marginBottom: '0.7rem'}}>공연 상세 정보</p>
                    
                    </li>
                    <li style={{cursor:'pointer',userSelect:'none'}} onClick={()=>onSetInform('pl')}>
                    
                        <p style={{display: 'inline-block', padding: '5px 10px',marginBottom: '0.7rem',borderBottom:'0.35rem #597A8D solid'}}>장소 정보</p>
                        
                    </li>
                </ul>
            </div>
            
                <div style={{display:'flex',flexDirection:'row',justifyItems:'center',gap:'2rem'}}>
                    
                    
                    <Map lat={Number(performanceData.data.facilityDTO.latitude)} lng={Number(performanceData.data.facilityDTO.longitude)}/>
                    <div>
                        <p>장소 | {performanceData.data.facilityDTO.facilityName}</p>
                        <p>주소 | {performanceData.data.facilityDTO.address}</p>
                        <p>대표번호 | {performanceData.data.facilityDTO.telNo}</p>
                    </div>
                </div> 
            </>
            
        }
    
        </div>

    )
    
}

export default React.memo(DeatilView)