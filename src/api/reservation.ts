

import tokenClient from "./tokenClient";

const ReservationAPI = {
    getAllReservationInfo: () => {
        return tokenClient.get(`/reservation/lists`);
    },
    getReservationInfo: (reservation_id: string|undefined) => {
        return tokenClient.get(`/reservation/list/${reservation_id}`);
    },
    cancelReservation: (rsvId: number) => {
        return tokenClient.delete(`/reservation/delete/${rsvId}`)
    },
};

export default ReservationAPI;
