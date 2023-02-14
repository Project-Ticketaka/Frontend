import React from "react";
import './Logo.scss'
import logo from '../../assets/images/favicon.png';
import classNames from "classnames";
import { Link } from "react-router-dom";

function Logo({children,size,...rest}:any) {
    return (
    <div className={classNames("Logo",size)} {...rest}>
        <img src={logo} alt="Ticketaka"></img>
        <span>Ticketaka</span>
    </div>
    );
}
Logo.defaultProps={
    size:'lg'
}

export default Logo; 