import React, { useRef, useState } from 'react'
import { useLocation } from "react-router-dom"
import useGetMemberInfo from "../../hooks/query/member/useGetMemberInfo";
import MyView from "./Views/MyView"

const My = () => {
  // const {state}=useLocation();
  // console.log(state);
  
  // const my=useRef(state);
  // const { data, isLoading } = useGetMemberInfo();
  
  
  return (
    <MyView />
    
  )
}

export default My