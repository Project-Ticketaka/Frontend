import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";

import { TNavigate } from "../../../types/navigate";
import ReservationAPI from "../../../api/reservation";
import { IReservationInfo, IReservationResponse } from "../../../types/reservation";
import { ICheckReservationData } from "../../../types/performance";

const useCreateReservation = (navigate:TNavigate) => {
    return useMutation((paymentInfo: ICheckReservationData) => ReservationAPI.createReservation({"memberId": paymentInfo.checkData.memberId,
    "memberEmail": paymentInfo.checkData.memberId,
    "performanceId": paymentInfo.reservationInfo.detail.data.performanceDetailInfo.prfId,
    "prf_poster": paymentInfo.reservationInfo.detail.data.performanceDetailInfo.poster,
    "prfSessionId": paymentInfo.reservationInfo.detail.data.prfSessionList[0].prfSessionId,
    "price": paymentInfo.reservationInfo.seatPrice*paymentInfo.reservationInfo.people}), {
        
        onSuccess: (data: AxiosResponse<IReservationResponse>,variables:ICheckReservationData) => {
            alert('예매 완료!');
            
            navigate('/ticket',{state: variables.reservationInfo})
        },
        onError: ((error: unknown, variables: ICheckReservationData, context: unknown) =>{
            alert('예매 실패!');
            console.log(error);
            console.log(variables);
        })
    });
};

export default useCreateReservation;
