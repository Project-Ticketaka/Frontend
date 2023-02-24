
import axios from "axios";
import { ICancelData } from "../types/reservation";
import client from "./client";

const ReservationAPI = {
    getAllReservationInfo: () => {
        return client.get(`/reservation/lists`);
    },
    getReservationInfo: (reservation_id: string|undefined) => {
        return client.get(`/reservation/list/${reservation_id}`);
    },
    cancelReservation: (rsvId: number) => {
        // return client.delete(`/reservation/delete/${rsvId.rsvId}`,{
            // headers: {
            //   "x-authorization": localStorage.getItem("accessToken"),
            //   "r-authorization": localStorage.getItem("refreshToken"),
            // },
        //     data: {
        //       rsvId: rsvId.rsvId
        //     }
        //   }
        // );
        return client.delete(`/reservation/delete/${rsvId}`, {
            headers: {
                "x-authorization": localStorage.getItem("accessToken"),
                "r-authorization" : localStorage.getItem("refreshToken"),
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Content-Type, Accept',
                "X-Requested-With":'XMLHttpRequest',
                'X-CSRF-TOKEN':'{{ csrf_token() }}',
                'content-type':'application/json',
            }
          });
    },
};

export default ReservationAPI;
