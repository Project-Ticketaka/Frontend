import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

import { TNavigate } from "../../../types/navigate";
import ReservationAPI from "../../../api/reservation";
import { IReservationResponse } from "../../../types/reservation";

const useCancelReservation = (navigate: TNavigate) => {
    return useMutation((reservation_id: string) => ReservationAPI.cancelReservation(reservation_id), {
        onSuccess: (data: AxiosResponse<IReservationResponse>) => {
            console.log(data);
        },
        onError: ((error: unknown, variables: string, context: unknown) =>{
            alert('예약 취소 실패!');
            console.log(error);
            console.log(variables);
        })
    });
};

export default useCancelReservation;
