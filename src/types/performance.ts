export interface IPerformanceData {
    id: string;
    title: string;
    start_date: string;
    end_date: string;
    cast: string;
    crew: string;
	runtime: string;
	prd_comp: string;
	viewing_age: string;
	ticket_price: {seat_type: string, price: number}[],
	poster: string;
	story: string;
	genre: string;
	openrun: boolean;
	styurls: string[]; 
	state: string;
}

export interface IPerformanceSearch {
    performance_id: string;
    title: string;
    start_date: string;
    end_date: string;
	viewing_age: string;
	genre: string;
	poster: string;
	facility_name: string;
}

export interface ICheckReservationData {
	memberId: string;
	prfSessionId: number;
	count: number;
}