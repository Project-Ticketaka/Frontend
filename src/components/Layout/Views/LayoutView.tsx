import React, { useState } from 'react'
import styled from "@emotion/styled";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header";
import { IHeaderProps, ILayoutProps } from "../types";
import Footer from "../Footer";
import PerformanceAPI from "../../../api/performance";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
`;

const OutletContainer = styled.div`
    display: flex;
    flex: 1;
    height: fit-content;
    flexDirection: column;
    width: 100%;
`;

const LayoutView = ({menu,onSetMenu}:ILayoutProps) => {
    const navigate=useNavigate();
    const [keyword, setKeyword] = useState("");
    
    const headerProps:IHeaderProps={
        menu,
        onSetMenu,
        category:[
            {title:'홈',id:'home'},
            {title:'연극',id:'a4'},
            {title:'무용',id:'b3c'},
            {title:'클래식',id:'c3a'},
            {title:'국악',id:'c4'},
            {title:'대중음악',id:'c3d'},
            {title:'복합',id:'e3a'},
            {title:'서커스/마술',id:'e3b'},
            {title:'뮤지컬',id:'g3a'},
        ],
        goMyPage: () => {
            
            localStorage.getItem('accessToken')
            ?navigate('/my/info',{state:'info'})
            :navigate('/login')
        },
        onSearchChange: (e) => {
            setKeyword(e.target.value);
        },
        onSearch: (e)=>{
            if (e.code === 'Enter') {
                //e.preventDefault();
                // alert(keyword)
                PerformanceAPI.getPerformanceByKeyword(keyword,0).then(res=>{
                    // console.log(res.data.data)
                    // console.log(res.data)
                    if(res.data.code===202){
                        
                        navigate(`/search/${keyword}`,{ state:{keyword:keyword, page:0, data: res.data}, replace:true })
                        window.location.reload()
                    }else{
                        
                        navigate(`/search/${keyword}`,{ state:{keyword:keyword, page:0, data: res.data.data}, replace:true })
                        window.location.reload()
                    }
                    
                }).catch((error)=>{
                    // console.log(data)
                    console.log(error)
                });
                
            }
        },
        keyword: keyword,
        onSetKeyword: (k)=>{
            setKeyword(k)
        }
    }
    return (
        <Container>
            <Header {...headerProps}/>
            <OutletContainer>
                <Outlet/>
            </OutletContainer>
            <Footer/>
        </Container>
    )
}

export default React.memo(LayoutView)