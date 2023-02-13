import React from "react";
import './GenderSelect.scss'
import classNames from "classnames";

function GenderSelect({children,type,state,...rest}:any) {
    return <button className={classNames(type,state)} {...rest}>{children}</button>;
}

GenderSelect.defaultProps = {
    state:'M'
};

export default GenderSelect;