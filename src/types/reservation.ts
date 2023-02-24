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
    "rsvId": number;
}
export interface IReservationResponse {
    code: string;
}