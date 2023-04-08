import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import ReservationAPI from "../../../api/reservation";
import { IGetAllReservationInfo } from "../../../types/reservation";

const useGetAllReservationInfo = () => {
    return useQuery(["getAllReservationInfo"], () => ReservationAPI.getAllReservationInfo(), {
        select: (data: AxiosResponse<IGetAllReservationInfo>) => {
            return data.data.data;
        },
    });
}

export default useGetAllReservationInfo