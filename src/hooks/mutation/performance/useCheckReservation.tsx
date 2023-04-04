import { AxiosResponse } from "axios";
import { useMutation } from "react-query";

import { TNavigate } from "../../../types/navigate";
import PerformanceAPI from "../../../api/performance";
import { IReservationResponse } from "../../../types/reservation";
import { ICheckReservationData } from "../../../types/performance";

const useCheckReservation = (navigate:TNavigate) => {
    
    return useMutation((checkReservationData: ICheckReservationData) => PerformanceAPI.checkReservation(checkReservationData.checkData), {
        onSuccess: (data: AxiosResponse<IReservationResponse>,variables: ICheckReservationData) => {
            alert('예매 가능!');
            // console.log(variables);
            navigate('/payment',{state:variables})
        },
        onError: ((error: unknown, variables: ICheckReservationData, context: unknown) =>{
            alert('예매 실패!');
            //console.log(error);
            //console.log(variables);
        })
    });
};

export default useCheckReservation;
