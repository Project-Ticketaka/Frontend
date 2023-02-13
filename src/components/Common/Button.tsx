import React from "react";
import './Button.scss'
import classNames from "classnames";

function Button({children,color,state,size,...rest}:any) {
    return <button className={classNames("Button",color,state,size)} {...rest}>{children}</button>;
}

Button.defaultProps = {
    color: 'pink',
    state: 'false',
    size: 'lg'
};

export default Button;