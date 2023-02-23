export interface IReservationInfo {
	memberId: string|null;
	memberEmail: string|null;
	performanceId: string;
	prf_poster: string;
	prfSessionId: string;
	price: number;
}

export interface IGetAllReservationInfo {
	code: number;
    data: {
		reservationId: number;
        reservationTicketCount: number;
        reservationDate: string;
        reservationTime: string;
        reservationPrice: number;
        reservationTotalPrice: number;
        reservationPoster: string;
        reservationDeleted: string;
        reservationCreateAt: string;
    }[];
    description: string;
}
export interface ICancelData{
    rsvId: number;
}
export interface IReservationResponse {
    code: string;
}
// export interface IReservationData {
//     reservation_id : string;
// 	reservation_ticket_count : number;
// 	reservation_date : string;
// 	reservation_time : string;
// 	reservation_price : string;
// 	reservation_total_price : string;
// 	reservation_poster : string;
// 	reservation_deleted: string;
// 	reservation_createAt : string;
// }