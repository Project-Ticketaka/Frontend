import React from 'react'
import { IHeaderProps } from "./types"
import HeaderView from "./Views/HeaderView"

const Header = ({ menu,onSetMenu,category,goMyPage,onSearchChange,onSearch }: IHeaderProps) => {
    
    const HeaderProps = {
        menu,
        onSetMenu,
        category,
        goMyPage,
        onSearchChange,
        onSearch
    };
    return (
        <HeaderView {...HeaderProps}/>
    )
}

export default Header