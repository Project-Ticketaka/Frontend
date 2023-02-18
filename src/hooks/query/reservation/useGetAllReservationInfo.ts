import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import ReservationAPI from "../../../api/reservation";
import { IReservationInfo } from "../../../types/reservation";

const useGetAllReservationInfo = () => {
    return useQuery(["getAllReservationInfo"], () => ReservationAPI.getAllReservationInfo(), {
        select: (data: AxiosResponse<IReservationInfo>) => {
            return data.data;
        },
    });
}

export default useGetAllReservationInfo