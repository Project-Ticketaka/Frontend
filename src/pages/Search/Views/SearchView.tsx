import styled from "@emotion/styled";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { Button } from "@mui/material";
import red from '@mui/icons-material'

const ReservationButton = styled(Button)`
    color: #ffffff;
`
const ReservationIcon = styled(ReceiptLongIcon)`
    color: #ffffff;
    fill: #ffffff;
`

const SearchView = ({searchKeyword,searchCount}:any) => {
  return (
    <div style={{padding:'2rem 1rem',display:'flex',flexDirection:'column',width:'100%',gap:'1rem'}}>
        <div>
            <span style={{color:'#FF7F8F', fontSize:'1.3rem',margin:'0 0.5rem'}}>“{searchKeyword}”</span> 에 대한 검색결과 총 <span style={{color:'#FF7F8F', fontSize:'1.3rem',margin:'0 0.5rem'}}>{searchCount}</span>건
        </div>
        <ul style={{margin:'0',padding:'0'}}>
            <li style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingBottom:'1.5rem',borderBottom:'1px #CACACA solid'}}>
                
                    <div style={{display:'flex',flexDirection:'row',gap:'1.3rem',alignItems:'center'}}>
                    <img src="http://www.kopis.or.kr/upload/pfmPoster/PF_PF209894_230117_133614.gif" alt="오페라의 유령 [부산]" style={{width:'7rem',height:'9rem',borderRadius:'5px'}}/>
                    <div style={{display:'flex',flexDirection:'column',gap:'1rem',alignSelf:'center'}}>
                        <div>
                            <p style={{fontSize:"1.4rem", fontWeight:'500', margin:'0'}}>오페라의 유령 [부산]</p>
                        </div>
                        <div>
                            <p style={{fontSize:"0.9rem", color:'#575757', padding:'0', margin:'1rem 0 0 0'}}>장소 | 한전아트센터</p>
                            <p style={{fontSize:"0.9rem", color:'#A6A6A6', padding:'0', margin:'1rem 0 0 0'}}>기간 | 2022.11.26 ~ 2023.01.29</p>
                        </div>
                    </div>
                    </div>
                    <ReservationButton variant="contained" startIcon={<ReservationIcon/>}>예매하기</ReservationButton>
            </li>
            
        </ul>
    </div>
  )
}

export default SearchView