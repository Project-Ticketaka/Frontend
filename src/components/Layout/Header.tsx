import React from 'react'
import { IHeaderProps } from "./types"
import HeaderView from "./Views/HeaderView"

const Header = ({ menu,onSetMenu,category,goMyPage,onSearchChange,onSearch,keyword,onSetKeyword }: IHeaderProps) => {
    
    const HeaderProps = {
        menu,
        onSetMenu,
        category,
        goMyPage,
        onSearchChange,
        onSearch,
        keyword,
        onSetKeyword
    };
    return (
        <HeaderView {...HeaderProps}/>
    )
}

export default React.memo(Header)