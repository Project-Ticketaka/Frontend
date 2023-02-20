import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";

import { TNavigate } from "../../../types/navigate";
import ReservationAPI from "../../../api/reservation";
import { IReservationInfo, IReservationResponse } from "../../../types/reservation";
import { ICheckReservationData } from "../../../types/performance";

const useCreateReservation = (navigate:TNavigate) => {
    return useMutation((reservationInfo: ICheckReservationData) => ReservationAPI.createReservation({"memberId": reservationInfo.checkData.memberId,
    "memberEmail": reservationInfo.checkData.memberId,
    "performanceId": reservationInfo.reservationInfo.detail.performanceDetailInfo.prfId,
    "prf_poster": reservationInfo.reservationInfo.detail.performanceDetailInfo.poster,
    "prfSessionId": reservationInfo.reservationInfo.detail.prfSessionList[0].prfSessionId,
    "price": reservationInfo.reservationInfo.seatPrice*reservationInfo.reservationInfo.people}), {
        
        onSuccess: (data: AxiosResponse<IReservationResponse>,variables:ICheckReservationData) => {
            alert('예매 완료!');
            console.log(data);
            navigate('/reservation',{state: variables.reservationInfo})
        },
        onError: ((error: unknown, variables: ICheckReservationData, context: unknown) =>{
            alert('예매 실패!');
            console.log(error);
            console.log(variables);
        })
    });
};

export default useCreateReservation;
