import styled from "@emotion/styled";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NoData from "../../../components/Common/NoData";
import { useEffect, useState } from "react";

const ReservationButton = styled(Button)`
    color: #ffffff;
`
const ReservationIcon = styled(ReceiptLongIcon)`
    color: #ffffff;
    fill: #ffffff;
`
const LoadingButton = styled(Button)`
    color: #B8B8B8;
`
const LoadingIcon = styled(ReceiptLongIcon)`
    color: #B8B8B8;
    fill: #B8B8B8;
`
const SearchView = ({data,keyword}:any) => {
    const navigate= useNavigate();
    const [searchResult,setSearchResult]=useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult(data.data.content)
        },200)
    })
    if (data.code!==202){
  return (
    
    <div style={{padding:'2rem 1rem',display:'flex',flexDirection:'column',width:'100%',gap:'1rem'}}>
        <div>
            <span style={{color:'#FF7F8F', fontSize:'1.3rem',margin:'0 0.5rem'}}>“{keyword}”</span> 에 대한 검색결과 총 <span style={{color:'#FF7F8F', fontSize:'1.3rem',margin:'0 0.5rem'}}>{data.data.content.length}</span>건
        </div>
        <ul style={{margin:'0',padding:'0'}}>
            {
                searchResult.length=== 0?
                Array(data.data.content.length).fill(0).map((_,idx)=>{
                    return(
                        <li key={idx} style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:'1.5rem 0',borderBottom:'1px #CACACA solid'}}>
                        
                            <div style={{display:'flex',flexDirection:'row',gap:'1.3rem',alignItems:'center'}}>
                            {/* <img src={el.poster} alt={el.title} style={{width:'7rem',height:'9rem',borderRadius:'5px'}}/>*/}
                            <div style={{width:'7rem',height:'9rem',borderRadius:'5px',backgroundColor:'#B8B8B8'}}></div>
                            <div style={{display:'flex',flexDirection:'column',gap:'1rem',alignSelf:'center'}}>
                                <div>
                                    <p style={{fontSize:"1.4rem", fontWeight:'500', margin:'0',borderRadius:'5px',backgroundColor:'#B8B8B8',color:'#B8B8B8'}}>searchResult</p>
                                </div>
                                <div>
                                    <p style={{fontSize:"0.9rem", padding:'0', margin:'1rem 0 0 0',borderRadius:'5px',backgroundColor:'#B8B8B8',color:'#B8B8B8'}}>장소 | searchResult</p>
                                    <p style={{fontSize:"0.9rem", padding:'0', margin:'1rem 0 0 0',borderRadius:'5px',backgroundColor:'#B8B8B8',color:'#B8B8B8'}}>기간 | yyyy-mm-dd ~ yyyy-mm-dd</p>
                                </div>
                            </div>
                            </div>
                            <LoadingButton variant="contained" color="warning" startIcon={<LoadingIcon/>}>예매하기</LoadingButton>
                        </li>
                        )
                })
            :data.data.content.map((el:any)=>{
                return(
                <li key={el.prfId} style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:'1.5rem 0',borderBottom:'1px #CACACA solid'}}>
                
                    <div style={{display:'flex',flexDirection:'row',gap:'1.3rem',alignItems:'center'}}>
                    <img src={el.poster} alt={el.title} style={{width:'7rem',height:'9rem',borderRadius:'5px'}}/>
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
  )}else{
    return(
            
    <div style={{padding:'2rem 1rem',display:'flex',flexDirection:'column',width:'100%',gap:'1rem'}}>
    <div>
        <span style={{color:'#FF7F8F', fontSize:'1.3rem',margin:'0 0.5rem'}}>“{keyword}”</span> 에 대한 검색결과 총 <span style={{color:'#FF7F8F', fontSize:'1.3rem',margin:'0 0.5rem'}}>0</span>건
    </div>
    
    <NoData data={data}/>
    
</div>
    )
  }
}

export default SearchView