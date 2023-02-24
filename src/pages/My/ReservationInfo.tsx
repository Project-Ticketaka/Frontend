import React from 'react'
import NoData from "../../components/Common/NoData";
import useGetAllReservationInfo from "../../hooks/query/reservation/useGetAllReservationInfo";
import ReservationInfoView from "./Views/ReservationInfoView"

const ReservationInfo = () => {
  
  const { data, isLoading } = useGetAllReservationInfo();
  console.log(data);

  return (
    isLoading?<></>:data?.length?<ReservationInfoView data={data}/>:<NoData data={{code:404,description:'예매 내역이 없습니다.'}}/>
  )
}

export default ReservationInfo