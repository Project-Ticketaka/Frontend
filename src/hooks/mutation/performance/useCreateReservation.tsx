import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";

import { TNavigate } from "../../../types/navigate";
import { IReservationInfo, IReservationResponse } from "../../../types/reservation";
import { ICheckReservationData,ICreateReservationData } from "../../../types/performance";
import PerformanceAPI from "../../../api/performance";
import customHistory from "../../../utils/history";

const useCreateReservation = (navigate:TNavigate) => {
    return useMutation((paymentInfo: ICheckReservationData) => PerformanceAPI.createReservation({
        "performanceId": paymentInfo.reservationInfo.detail.data.performanceDetailInfo.prfId,
        "prfPoster": paymentInfo.reservationInfo.detail.data.performanceDetailInfo.poster,
        "prfSessionId": Number(paymentInfo.reservationInfo.detail.data.prfSessionList[0].prfSessionId),
        "price": paymentInfo.reservationInfo.seatPrice*paymentInfo.reservationInfo.people}), {
        
        onSuccess: (data: AxiosResponse<IReservationResponse>,variables:ICheckReservationData) => {
            alert('예매 완료!');
            navigate('/ticket',{state: variables.reservationInfo})
        },
        onError: ((error: unknown, variables: ICheckReservationData, context: unknown) =>{
            alert('예매 실패!');
            console.log(error);
            console.log(variables);
            customHistory.back()
        })
    });
};

export default useCreateReservation;
