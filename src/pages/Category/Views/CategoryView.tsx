import styled from "@emotion/styled"
import React, { useCallback, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
const MainContainer = styled.div`
    padding: 1rem;
    padding-top: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

`

const CategoryView = ({performanceData,setPerformanceData,data,setPage}:any) => {
    const navigate = useNavigate();
    
    
    
    useEffect(()=>{
        setTimeout(()=>{
            setPerformanceData(data.content)
        },200)
    })
    
    console.log(performanceData)
    
    const handleScroll = useCallback((): void => {
        const { innerHeight } = window;
        const { scrollHeight } = document.body;
        const { scrollTop } = document.documentElement;
    
        if (Math.round(scrollTop + innerHeight) >= scrollHeight && !data.last) {
            console.log("api호출")
            setPerformanceData((prevPerformanceData: any) => prevPerformanceData.concat(data.content));
            setPage((prevPage: number) => prevPage + 1);
        }
    }, [data.content, data.last, setPage, setPerformanceData]);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
    
        return () => {
            window.removeEventListener('scroll', handleScroll, true);
        }
    }, [handleScroll]);

    
    return (
    <div style={{display:'flex',flexDirection:'column',width:'100%',gap:'1rem',padding:'2rem 0'}}>
        <MainContainer>
            {   
                performanceData.length=== 0?
                Array(data.content.length).fill(0).map((_,idx)=>{
                        return(
                            <div key={idx}>
                                <div style={{justifyContent: 'center',display:'flex'}}>
                                    
                                    <div style={{width:'9rem',height:'11.7rem',borderRadius:'5px',backgroundColor:'#B8B8B8'}}></div>
                                    
                                </div>
                                <p style={{margin:'0.3rem 0',borderRadius:'5px',width:'100%',backgroundColor:'#B8B8B8',color:'#B8B8B8',fontSize:'1.25rem',fontWeight:'500',textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>performance name</p>
                                <p style={{margin:'0.3rem 0',borderRadius:'5px',width:'fit-content',backgroundColor:'#B8B8B8',color:'#B8B8B8',fontSize:'1rem',fontWeight:'300',textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>performance place</p>
                                <p style={{margin:'0.3rem 0',borderRadius:'5px',width:'fit-content',backgroundColor:'#B8B8B8',color:'#B8B8B8',fontSize:'1rem',fontWeight:'300'}}>yyyy.mm.dd~yyyy.mm.dd</p>

                            </div>
                        )
                                })
                                :
                                performanceData.map((el:any)=>{
                    return(
                        <div key={el.prfId} style={{width:'13rem',cursor:'pointer'}}  onClick={()=>navigate(`/detail/${el.prfId}`)}>
                            <div style={{textAlign: 'center'}}>
                                <div>
                                    <img src={el.poster} style={{width:'9rem',height:'11.7rem',borderRadius:'5px'}} alt={el.title}/>
                                    
                                </div>
                            </div>
                            <p style={{margin:'0.3rem 0',fontSize:'1.25rem',fontWeight:'500',textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>{el.title}</p>
                            <p style={{margin:'0.3rem 0',color:'#575757',fontSize:'1rem',fontWeight:'300',textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>{el.facilityName}</p>
                            <p style={{margin:'0.3rem 0',color:'#A6A6A6',fontSize:'1rem',fontWeight:'300'}}>{el.startDate}~{el.endDate}</p>

                        </div>
                    )
                })
            }
        
        </MainContainer>
    </div>
  )
}

export default React.memo(CategoryView)