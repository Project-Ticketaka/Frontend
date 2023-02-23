import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";

import { TNavigate } from "../../../types/navigate";
import ReservationAPI from "../../../api/reservation";
import { ICancelData, IReservationResponse } from "../../../types/reservation";

const useCancelReservation = () => {
    return useMutation((rsvId: ICancelData) => ReservationAPI.cancelReservation(rsvId), {
        onSuccess: (data: AxiosResponse<IReservationResponse>) => {
            console.log(data);
        },
        onError: ((error: unknown, variables: ICancelData, context: unknown) =>{
            alert('예약 취소 실패!');
            console.log(error);
            console.log(variables);
        })
    });
};

export default useCancelReservation;
