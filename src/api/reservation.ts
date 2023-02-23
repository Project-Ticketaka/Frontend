
import { ICancelData } from "../types/reservation";
import client from "./client";

const ReservationAPI = {
    getAllReservationInfo: () => {
        return client.get(`/reservation/lists`);
    },
    getReservationInfo: (reservation_id: string|undefined) => {
        return client.get(`/reservation/list/${reservation_id}`);
    },
    cancelReservation: (rsvId: ICancelData) => {
        return client.delete(`/reservation/delete/${rsvId.rsvId}`,{
            headers: {
              "x-authorization": localStorage.getItem("accessToken"),
              "r-authorization": localStorage.getItem("refreshToken"),
            },
            data: {
              rsvId: rsvId.rsvId
            }
          }
        );
    },
};

export default ReservationAPI;
