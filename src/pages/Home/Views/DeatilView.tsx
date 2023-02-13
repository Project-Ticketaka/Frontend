import { Button } from "@mui/material";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Map from "../Map";
import styled from "@emotion/styled";

const SessionButton = styled(Button)`
    
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

const ReservationButton = styled(Button)`
    
    
    width: 100%;
    padding: 0.8rem 3rem;

    color: #ffffff;
    background: #5C7D92;
    
    
    border-radius: 2rem;

    &:hover {
        background: #5C7D92;
    }

    
`;

const DeatilView = ({detail}:any) => {

    registerLocale("ko", ko); //한국어 설정
    const [selectedDate,setSelectedDate] = useState(detail.prf_data.start_date)
    const [selectedTime,setSelectedTime] = useState('')
    const [selectedTimeId,setSelectedTimeId] = useState('')
    const [sessionTime,setSessionTime] = useState(detail.prf_session_data.filter((data: { prf_session_date: any; })=>data.prf_session_date===selectedDate).map((data: { prf_session_time: any; })=>data.prf_session_time))
    const [inform,setInform] = useState('pf')
    const navigate=useNavigate()
    
    const onChangeDate = (e:any) =>{
        setSelectedDate(`${new Date(e).getFullYear()}.${new Date(e).getMonth()>=10?new Date(e).getMonth()+1:'0'+(new Date(e).getMonth()+1)}.${new Date(e).getDate()}`)
    }
    

    useEffect(()=>{
        setSessionTime(detail.prf_session_data.filter((data: { prf_session_date: any; })=>data.prf_session_date===selectedDate).map((data: { prf_session_time: any; })=>data.prf_session_time))
    
    },[selectedDate]);

    const selectSessionTime = (idx:string, time:string) => {
        alert(`${idx}, ${time}`)
        setSelectedTimeId(idx)
        setSelectedTime(time)
    }

    const [people,setPeople] = useState(1)

    const goReservation = () => {
        // console.log(selectedDate)
        // console.log(selectedTime)
        // console.log(people)
        alert(`${selectedDate} ${selectedTime}회차 ${people}명`)
        let paymentInfo = {
            selectedDate:selectedDate,
            selectedTime:selectedTime,
            people:people,
            detail:detail,
        }
        navigate('/payment',{state:paymentInfo})
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



    return (
        <div style={{padding:'2rem 1rem',display:'flex',flexDirection:'column',width:'100%'}}>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        {/* InfoView {pfId} */}
            <div style={{display:'flex',flexDirection:'row',gap:'1.3rem'}}>
                <img src={detail.prf_data.poster} alt={detail.prf_data.title} style={{width:'9rem',height:'11.7rem',borderRadius:'5px'}}/>
                <div style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
                    <div>
                        <p style={{fontSize:"1.6rem", fontWeight:'500', margin:'0'}}>{detail.prf_data.title}</p>
                    </div>
                    <div>
                        <p style={{fontSize:"0.9rem", color:'#575757', padding:'0', margin:'1rem 0 0 0'}}>장소 | {detail.fclty_data.facility_name}</p>
                        <p style={{fontSize:"0.9rem", color:'#575757', padding:'0', margin:'1rem 0 0 0'}}>관람시간 | {detail.prf_data.runtime}</p>
                        <p style={{fontSize:"0.9rem", color:'#575757', padding:'0', margin:'1rem 0 0 0'}}>관람등급 | {detail.prf_data.viewing_age}</p>
                        <p style={{fontSize:"0.9rem", color:'#575757', padding:'0', margin:'1rem 0 0 0'}}>기간 | {detail.prf_data.start_date} ~ {detail.prf_data.end_date}</p>
                    </div>
                </div>
            </div>

            <div style={{display:'flex', flexDirection:'row',gap:'3rem'}}>
            
                {/* 회차정보 담고있는 캘린더 */}
                <DatePicker
                selected={new Date(selectedDate)}
                highlightDates={detail.prf_session_data.map((data: { prf_session_date: string | number | Date; })=>new Date(data.prf_session_date))}
                onChange={onChangeDate}
                disabledKeyboardNavigation //다른 월의 같은 날짜시 자동 selected 되는 현상 방지
                locale="ko" 
                inline 
                maxDate={new Date(detail.prf_data.end_date)}
                
                popperPlacement="auto" //화면 중앙에 팝업이 출현 
                />
            
            
            <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{display:'flex', flexDirection:'row',gap:'5rem'}}>
                    {/* 회차 시간 선택 */}
                    <div style={{display:'flex', flexDirection:'column',gap:'0.5rem'}}>
                    
                    {
                        sessionTime.map((time: string,idx: { toString: () => string; })=>{
                            return(
                            // <span style={{border:'0.2rem #FF7F8F solid', borderRadius:'2rem', padding:'0.3rem 1rem',fontSize:'1.3rem',color:'#858585'}}>{time}</span>
                                <SessionButton className={`${selectedDate.toString()} ${idx.toString()}`===selectedTimeId?'active':'inactive'} value={time} size="large" variant="outlined" id={`${selectedDate.toString()} ${idx.toString()}`}  onClick={()=>selectSessionTime(`${selectedDate.toString()} ${idx.toString()}`,time)}>{time}</SessionButton>
                            )
                        })
                    }
                    </div>
                    
                    <div>
                    {/* 좌석 유형 선택 */}
                    {
                        detail.prf_data.ticket_price.map((seat: any)=>{
                            return(
                                <p style={{margin:'0 0 1rem 0'}}>{seat.seat_type} | {seat.price}</p>
                            )
                        })
                    }
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',gap:'2rem',alignItems:'center'}}>
                    {/* 인원 수 선택 */}
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'3rem',border:'0.3rem #CACACA solid', borderRadius:'2rem',padding:'0.5rem 1rem'}}>
                        <span style={{cursor:'pointer',fontSize:'1.5rem'}} onClick={()=>onSetPeople(-1)}>-</span>
                        <p style={{fontSize:'1.5rem', margin:'0'}}>{people}</p>
                        <span style={{cursor:'pointer',fontSize:'1.5rem'}} onClick={()=>onSetPeople(+1)}>+</span>
                    </div>

                    {/* 예매하기 버튼 */}
                    <ReservationButton size="large" onClick={()=>goReservation()}>
                        예매하기
                    </ReservationButton>
                </div>
            </div>
            </div>
        </div>

        
        
        {
            inform==='pf'
            ? 
            <>
                <div>
            <ul style={{display: 'flex', flexWrap:'wrap', listStyle:'none',paddingLeft:'0px',margin:'0',paddingRight:'10rem',gap:'2rem'}}>
                <li style={{cursor:'pointer'}} onClick={()=>onSetInform('pf')}>
                    
                        <p style={{display: 'inline-block', padding: '5px 10px',marginBottom: '0.7rem',borderBottom:'0.35rem #597A8D solid'}}>공연 상세 정보</p>
                    
                    
                </li>
                <li style={{cursor:'pointer'}} onClick={()=>onSetInform('pl')}>
                    
                        <p style={{display: 'inline-block', padding: '5px 10px',marginBottom: '0.7rem'}}>장소 정보</p>
                    
                </li>
            </ul>
        </div>
            
            <div style={{display:'flex',flexDirection:'column',justifyItems:'center'}}>
            
            {
                detail.prf_data.styurls.map((url: string | undefined,idx: any)=>{
                    return(<img src={url} alt={`공연 상세 정보 ${idx}`} style={{display:'block',margin:'auto',width:'fit-content'}}/>)})
            }
            </div>
            </>
            :
            
        <>
        <div>
            <ul style={{display: 'flex', flexWrap:'wrap', listStyle:'none',paddingLeft:'0px',margin:'0',paddingRight:'10rem',gap:'2rem'}}>
                <li style={{cursor:'pointer'}} onClick={()=>onSetInform('pf')}>
                
                    <p style={{display: 'inline-block', padding: '5px 10px',marginBottom: '0.7rem'}}>공연 상세 정보</p>
                
                </li>
                <li style={{cursor:'pointer'}} onClick={()=>onSetInform('pl')}>
                
                    <p style={{display: 'inline-block', padding: '5px 10px',marginBottom: '0.7rem',borderBottom:'0.35rem #597A8D solid'}}>장소 정보</p>
                    
                </li>
            </ul>
        </div>
        
            <div style={{display:'flex',flexDirection:'row',justifyItems:'center',gap:'2rem'}}>
                
                
                <Map lat={Number(detail.fclty_data.latitude)} lng={Number(detail.fclty_data.longitude)}/>
                <div>
                    <p>장소 | {detail.fclty_data.facility_name}</p>
                    <p>주소 | {detail.fclty_data.address}</p>
                    <p>대표번호 | {detail.fclty_data.telno}</p>
                </div>
            </div> 
        </>
        
    }


    </div>
    )
}

export default DeatilView