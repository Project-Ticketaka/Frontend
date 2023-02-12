import React from 'react'
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import { IHeaderProps, ILayoutProps } from "../types";
import Footer from "../Footer";

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
    const headerProps:IHeaderProps={
        menu,
        onSetMenu,
        category:[
            {title:'홈',id:'home'},
            {title:'연극',id:'a4'},
            {title:'무용',id:'b3a'},
            {title:'클래식',id:'c3a'},
            {title:'국악',id:'c4'},
            {title:'대중음악',id:'c3d'},
            {title:'복합',id:'e3a'},
            {title:'서커스/마술',id:'e3b'},
            {title:'뮤지컬',id:'g3a'},
        ]
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

export default LayoutView