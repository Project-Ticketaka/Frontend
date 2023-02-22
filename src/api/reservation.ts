
import client from "./client";

const ReservationAPI = {
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
