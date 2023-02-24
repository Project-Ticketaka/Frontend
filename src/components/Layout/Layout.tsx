import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { ILayoutProps } from "./types";
import LayoutView from "./Views/LayoutView"

const Layout = () => {
    const params = useParams();
    //console.log(params.cat);
    const [menu,setMenu] = useState(params.cat||'home');
    const navigate = useNavigate();
    
    const layoutProps: ILayoutProps = {
        menu,
        onSetMenu: (id:string)=>{
            setMenu(id)
            if(id!=='home'){
                navigate(`/${id}`)
                window.location.reload();
            }else {
                navigate('/')
                window.location.reload();
            }
        }    
    };
    return (
        <LayoutView {...layoutProps}/>
    )
}

export default React.memo(Layout)