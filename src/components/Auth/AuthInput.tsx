import React from "react";
import './Input.scss';
import classNames from "classnames";

function AuthInput({children,type,placeholder,...rest}:any) {
   return <input type={type} placeholder={placeholder} className={classNames('Input')} {...rest}>{children}</input>;
}

export default AuthInput;