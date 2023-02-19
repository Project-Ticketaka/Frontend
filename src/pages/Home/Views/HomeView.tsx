import styled from "@emotion/styled"
import { media } from "../../../styles/media"

const MainContainer = styled.div`
    padding: 1rem;
    padding-top: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

    ${media.phone`
        
    `}
`
const HomeView = ({top10,onGoToDetail}:any) => {
    return (
        <div style={{display:'flex',flexDirection:'column',width:'100%',gap:'1rem'}}>
        <div style={{width:'100%', height:'15rem',backgroundColor:'#B65C87'}}>

        </div>
        <p style={{margin:'0 1rem',fontSize:'2rem',fontWeight:'300'}}>오늘의 TOP 10!</p>
        {/* <div style={{padding:'1rem',paddingTop:'0',display:'grid' ,gridTemplateColumns: 'repeat(5, 1fr)',gap:'1rem'}}> */}
        <MainContainer>
            {
                top10.length!==0
                ?top10.map((el:any)=>{
                    return(
                        <div style={{width:'13rem',cursor:'pointer'}}  onClick={()=>onGoToDetail(el.mt20id._text)}>
                            <div style={{textAlign: 'center'}}>
                                <div style={{position:'relative'}}>
                                    <img src={`http://kopis.or.kr/${el.poster._text}`} style={{width:'9rem',height:'11.7rem',borderRadius:'5px'}} alt={el.prfnm._text}/>
                                    <span style={{position:'absolute',color:'#ffffff',left:'2rem',bottom:'-0.3rem',fontSize:'3.5rem',fontWeight:'700',letterSpacing:'-0.5rem'}}>{el.rnum._text}</span>
                                </div>
                            </div>
                            <p style={{margin:'0.3rem 0',fontSize:'1.25rem',fontWeight:'500',textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>{el.prfnm._text}</p>
                            <p style={{margin:'0.3rem 0',color:'#575757',fontSize:'1rem',fontWeight:'300',textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>{el.prfplcnm._text}</p>
                            <p style={{margin:'0.3rem 0',color:'#A6A6A6',fontSize:'1rem',fontWeight:'300'}}>{el.prfpd._text}</p>
                            {/* <Button 
                                size='md'
                                color='blue'>예매하기</Button> */}
                        </div>
                    )
                })
                :
                Array(10).fill(0).map(()=>{
                    return(
                    <div style={{}}>
                        <div style={{justifyContent: 'center',display:'flex'}}>
                            
                            <div style={{width:'9rem',height:'11.7rem',borderRadius:'5px',backgroundColor:'#B8B8B8'}}></div>
                            
                        </div>
                        <p style={{margin:'0.3rem 0',borderRadius:'5px',width:'100%',backgroundColor:'#B8B8B8',color:'#B8B8B8',fontSize:'1.25rem',fontWeight:'500',textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>performance name</p>
                        <p style={{margin:'0.3rem 0',borderRadius:'5px',width:'fit-content',backgroundColor:'#B8B8B8',color:'#B8B8B8',fontSize:'1rem',fontWeight:'300',textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>performance place</p>
                        <p style={{margin:'0.3rem 0',borderRadius:'5px',width:'fit-content',backgroundColor:'#B8B8B8',color:'#B8B8B8',fontSize:'1rem',fontWeight:'300'}}>yyyy.mm.dd~yyyy.mm.dd</p>
                        {/* <Button 
                            size='md'
                            color='gray'>예매하기</Button> */}
                    </div>)              
                })
            }
        {/* </div> */}
        </MainContainer>
    </div>
    )
}

export default HomeView