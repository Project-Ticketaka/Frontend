import barcode_example from '../../../assets/images/barcode_example.png'
import NoData from "../../../components/Common/NoData"
import Nav from "../Nav"

const ReservationInfoView = ({data}:any) => {
    console.log(!data)
    return (
        <ul style={{display:'flex',justifyContent:'center',listStyle:'none',margin:'0',padding:'0',width:'100%',gridColumn:'span 4'}}>
        {
            // <li style={{paddingRight:'10rem',display:'flex',flexDirection:'row',height:'fit-content',width:'fit-content',margin:'0',padding:'0'}}>
            <li style={{height:'13rem',justifyContent:'center',alignItems:'center',display:'flex',backgroundColor:'#F2F2F2',borderRadius:'0 1rem 1rem 0'}}>
                
                    <img src="http://www.kopis.or.kr/upload/pfmPoster/PF_PF209894_230117_133614.gif" alt="poster" style={{height:'13rem',borderRadius:'1rem 0 0 1rem'}}/>    
                    <div style={{display:'grid',gridTemplateRows: 'repeat(3, 1fr)',padding:'0 3rem',alignItems:'center'}}>
                        
                        
                        <div style={{height:'100%',display:'flex',flexDirection:'row',alignItems:'center',gap:'1rem',borderBottom:'2px solid #C4C4C4'}}>
                            <p style={{margin:'0',padding:'0',fontSize:'1.4rem',fontWeight:'700'}}>오페라의 유령 [부산]</p>
                        </div>
                        
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'3rem',borderBottom:'2px solid #C4C4C4'}}>
                            <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem'}}>
                                <p>일시</p>
                                <p style={{fontSize:'1.4rem',fontWeight:'500'}}>23년 2월 23일</p>
                            </div>
                            <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem'}}>
                                <p>회차</p>
                                <p style={{fontSize:'1.4rem',fontWeight:'500'}}>14:00</p>
                            </div>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem'}}>
                            <p>인원</p>
                            <p style={{fontSize:'1.4rem',fontWeight:'500'}}>2명</p>
                        </div>
                    </div>
                    <img src={barcode_example} alt="barcode" style={{height:'11rem',padding:'2rem',borderLeft:'3px dashed #ffffff'}}/>
            </li>
        }
    </ul>
    )
  
}

export default ReservationInfoView