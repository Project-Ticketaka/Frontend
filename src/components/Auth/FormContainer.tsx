import React from "react";
import './FormContainer.scss'

function FormContainer({children}:any) {
    return (
    <table className="FormContainer">
        {children}
    </table>
    );
}

export default FormContainer;