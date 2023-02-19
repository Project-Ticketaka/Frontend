import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

import { TNavigate } from "../../../types/navigate";
import ReservationAPI from "../../../api/reservation";
import { IReservationInfo, IReservationResponse } from "../../../types/reservation";

const useCreateReservation = (navigate: TNavigate) => {
    return useMutation((reservationInfo: IReservationInfo) => ReservationAPI.createReservation(reservationInfo), {
        onSuccess: (data: AxiosResponse<IReservationResponse>) => {
            console.log(data);
        },
        onError: ((error: unknown, variables: IReservationInfo, context: unknown) =>{
            alert('예매 실패!');
            console.log(error);
            console.log(variables);
        })
    });
};

export default useCreateReservation;