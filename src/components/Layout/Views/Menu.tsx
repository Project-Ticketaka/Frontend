import classNames from "classnames"
import React from 'react'
import './Menu.scss'

function Menu({children,menu,...rest}:any) {
    return (
    <li className={classNames("Menu",menu)} {...rest}>
        <p>{children}</p>
    </li>
    )
}

Menu.defaultProps={
    menu:'home'
}

export default Menu