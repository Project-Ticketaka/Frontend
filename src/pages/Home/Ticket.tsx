import React from 'react'
import { useLocation } from "react-router-dom"
import TicketView from "./Views/TicketView"

const Ticket = () => {
    const {state} = useLocation();
    //console.log(state);
    return (
        <TicketView reservationInfo={state}/>
    )
}

export default Ticket