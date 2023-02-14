export interface IReservationInfo {
    member_id: number;
	performance_id: string;
	reservation_ticket_count: number;
	reservation_date: string;
	reservation_time: string;
	reservation_price: number;
	reservation_poster: string;
}

export interface IReservationData {
    reservation_id : string;
	reservation_ticket_count : number;
	reservation_date : string;
	reservation_time : string;
	reservation_price : string;
	reservation_total_price : string;
	reservation_poster : string;
	reservation_deleted: string;
	reservation_createAt : string;
}