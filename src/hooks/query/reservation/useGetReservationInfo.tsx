import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import ReservationAPI from "../../../api/reservation";
import { IReservationInfo } from "../../../types/reservation";

const useGetReservationInfo = (reservation_id: string | undefined) => {
    return useQuery(["getReservationInfo", reservation_id], () => ReservationAPI.getReservationInfo(reservation_id), {
        select: (data: AxiosResponse<IReservationInfo>) => {
            return data.data;
        },
    });
}

export default useGetReservationInfo