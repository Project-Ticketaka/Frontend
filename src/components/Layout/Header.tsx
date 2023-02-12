import React from 'react'
import { useNavigate } from "react-router-dom";
import { IHeaderProps } from "./types"
import HeaderView from "./Views/HeaderView"

const Header = ({ menu,onSetMenu,category }: IHeaderProps) => {
    const HeaderProps = {
        menu,
        onSetMenu,
        category,
    };
    return (
        <HeaderView {...HeaderProps}/>
    )
}

export default Header