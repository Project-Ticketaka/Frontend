import React from "react";
import './FormContainer.scss'

function FormContainer({children}:any) {
    return (
    <div className="FormContainer">
        {children}
    </div>
    );
}

export default FormContainer;