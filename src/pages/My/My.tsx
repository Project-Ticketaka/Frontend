import React, { useRef, useState } from 'react'
import { useLocation } from "react-router-dom"
import MyView from "./Views/MyView"

const My = () => {
  const {state}=useLocation();
  //alert(state)
  const my=useRef(state);
  
  return (
    <MyView my={my}/>
  )
}

export default My