import { AxiosResponse } from "axios";
import { useMutation } from "react-query";


import { IReservationResponse } from "../../../types/reservation";
import { ICheckData } from "../../../types/performance";
import PerformanceAPI from "../../../api/performance";

const useWithdrawReservation = () => {
    return useMutation((paymentInfo: ICheckData) => PerformanceAPI.withdrawReservation(paymentInfo), {
        
        onSuccess: (data: AxiosResponse<IReservationResponse>,variables:ICheckData) => {
            // console.log('예매 대기열에서 사용자 삭제');
        },
        onError: ((error: unknown, variables: ICheckData, context: unknown) =>{
            alert('예매 대기열에서 사용자 삭제 실패!');
            // console.log(error);
            
        })
    });
};

export default useWithdrawReservation;
