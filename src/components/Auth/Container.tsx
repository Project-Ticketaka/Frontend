import classNames from "classnames";
import React from "react";
import './Container.scss'

function Container({children,size}:any) {
    return (
    <div className={classNames("Container",size)}>
        {children}
    </div>
    );
    
}
Container.defaultProps = {
    size: 'medium'
};

export default Container;