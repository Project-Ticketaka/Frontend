import styled from "@emotion/styled"
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import noPoster from "../../../assets/images/noPoster.png"

const MainContainer = styled.div`
    padding: 1rem;
    padding-top: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

`

const CategoryView = ({data,setPage,isLast}:any) => {
    //console.log(data)
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
    <div style={{display:'flex',flexDirection:'column',width:'100%',gap:'1rem',padding:'2rem 0'}}>
        <MainContainer>
            {   
                    data.map((el:any,idx:number)=>{  
                    return(
                        
                        <div key={el.prfId} style={{width:'13rem',cursor:'pointer'}}  onClick={()=>navigate(`/detail/${el.prfId}`)}>
                            <div style={{textAlign: 'center'}}>
                                <div>
                                {el.poster?
                                    <img src={el.poster} style={{width:'9rem',height:'11.7rem',borderRadius:'5px'}} alt={el.title}/>
                                    :
                                    <img src={noPoster} style={{width:'9rem',height:'11.7rem',borderRadius:'5px'}} alt={el.title}/>
                                }
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