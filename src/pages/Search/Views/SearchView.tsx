import styled from "@emotion/styled";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import noPoster from '../../../assets/images/noPoster.png'

const ReservationButton = styled(Button)`
    color: #ffffff;
`
const ReservationIcon = styled(ReceiptLongIcon)`
    color: #ffffff;
    fill: #ffffff;
`

const SearchView = ({data,setPage,isLast,keyword}:any) => {

    const navigate = useNavigate();

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight && !isLast) {
            // 페이지 끝에 도달하면 추가 데이터를 받아온다
            // console.log("끝!")
            setPage((prev:number)=>prev+1)
        }
        
    };

    useEffect(() => {
        // scroll event listener 등록
        window.addEventListener("scroll", handleScroll);

        return () => {
        // scroll event listener 해제
            window.removeEventListener("scroll", handleScroll);
        };
    });

        return (
    
    <div style={{padding:'1rem',display:'flex',flexDirection:'column',width:'100%'}}>
        <div>
            <span style={{color:'#FF7F8F', fontSize:'1.3rem',margin:'0 0.5rem'}}>“{keyword}” </span>에 대한 검색결과 
        </div>
        <ul style={{margin:'0',padding:'0'}}>
            {
            data.map((el:any)=>{
                return(
                <li key={el.prfId} style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:'1.5rem 0',borderBottom:'1px #CACACA solid'}}>
                
                    <div style={{display:'flex',flexDirection:'row',gap:'1.3rem',alignItems:'center'}}>
                    {el.poster?
                        <img src={el.poster} alt={el.title} style={{width:'7rem',height:'9rem',borderRadius:'5px'}}/>
                        :<img src={noPoster} alt={el.title} style={{width:'7rem',height:'9rem',borderRadius:'5px'}}/>
                    }
                    <div style={{display:'flex',flexDirection:'column',gap:'1rem',alignSelf:'center'}}>
                        <div>
                            <p style={{fontSize:"1.4rem", fontWeight:'500', margin:'0'}}>{el.title}</p>
                        </div>
                        <div>
                            <p style={{fontSize:"0.9rem", color:'#575757', padding:'0', margin:'1rem 0 0 0'}}>장소 | {el.facilityName}</p>
                            <p style={{fontSize:"0.9rem", color:'#A6A6A6', padding:'0', margin:'1rem 0 0 0'}}>기간 | {el.startDate} ~ {el.endDate}</p>
                        </div>
                    </div>
                    </div>
                    <ReservationButton variant="contained" startIcon={<ReservationIcon/>} onClick={()=>navigate(`/detail/${el.prfId}`)}>예매하기</ReservationButton>
                </li>
                )
            })
        }
            
        </ul>
    </div>
    )

}

export default React.memo(SearchView)