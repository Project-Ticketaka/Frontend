import { AxiosResponse } from "axios";
import { useMutation } from "react-query";

import { TNavigate } from "../../../types/navigate";
import { IReservationResponse } from "../../../types/reservation";
import { ICheckReservationData } from "../../../types/performance";
import PerformanceAPI from "../../../api/performance";
import customHistory from "../../../utils/history";
import useToastMessage from "../../common/useToastMessage";

const useCreateReservation = (navigate:TNavigate) => {
    const showToast = useToastMessage();
    return useMutation((paymentInfo: ICheckReservationData) => PerformanceAPI.createReservation({
        "performanceId": paymentInfo.reservationInfo.detail.data.performanceDetailInfo.prfId,
        "prfTitle": paymentInfo.reservationInfo.detail.data.performanceDetailInfo.title,
        "prfPoster": paymentInfo.reservationInfo.detail.data.performanceDetailInfo.poster,
        "prfSessionId": Number(paymentInfo.checkData.prfSessionId),
        "price": paymentInfo.reservationInfo.seatPrice*paymentInfo.reservationInfo.people}), {
        
        onSuccess: (data: AxiosResponse<IReservationResponse>,variables:ICheckReservationData) => {
            //alert('예매 완료!');
            showToast('success',"예매 완료!");
            navigate('/ticket',{state: variables.reservationInfo})
        },
        onError: ((error: unknown, variables: ICheckReservationData, context: unknown) =>{
            //alert('예매 실패!');
            showToast('error',"예매 실패!");
            // console.log(error);
            // console.log(variables);
            customHistory.back()
        })
    });
};

export default useCreateReservation;
