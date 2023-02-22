import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import ReservationAPI from "../../../api/reservation";
import { IReservationInfo } from "../../../types/reservation";

const useGetAllReservationInfo = () => {
    return useQuery(["getAllReservationInfo"], () => ReservationAPI.getAllReservationInfo(), {
        select: (data: AxiosResponse<IReservationInfo>) => {
            console.log(data)
            return data.data;
        },
    });
}

export default useGetAllReservationInfo