import { ICheckReservationData } from "../types/performance";
import { IReservationInfo } from "../types/reservation";
import client from "./client";

const ReservationAPI = {
    createReservation: (data: IReservationInfo) => {
        return client.post(`/performance/rsv/create`,data);
    },
    getAllReservationInfo: () => {
        return client.get(`/reservation/create`);
    },
    getReservationInfo: (reservation_id: string|undefined) => {
        return client.get(`/reservation/list/${reservation_id}`);
    },
    cancelReservation: (reservation_id: string|undefined) => {
        return client.get(`/reservation/delete/${reservation_id}`);
    },
};

export default ReservationAPI;
