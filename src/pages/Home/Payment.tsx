import React from 'react'
import { useLocation } from "react-router-dom";
import PaymentView from "./Views/PaymentView"

const Payment = () => {
    const { state } = useLocation();
    //console.log(state)
    return (
        <PaymentView paymentInfo={state}/>
    )
}

export default Payment