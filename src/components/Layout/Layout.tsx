import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ILayoutProps } from "./types";
import LayoutView from "./Views/LayoutView"

const Layout = () => {
    const [menu,setMenu] = useState("home");
    const navigate = useNavigate();
    
    const layoutProps: ILayoutProps = {
        menu,
        onSetMenu: (id:string)=>{
            setMenu(id)
            id!=='home'?navigate(`/${id}`):navigate('/')
        }    
    };
    return (
        <LayoutView {...layoutProps}/>
    )
}

export default Layout