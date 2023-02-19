export interface IPerformanceDetailInfo {
    prfId: string;
    title: string;
    startDate: string;
    endDate: string;
    cast: string;
    crew: string;
	runtime: string;
	proComp: string;
	viewingAge: string;
	ticketPrice: Array<{seatType: string, price: number}>,
	poster: string;
	story: string;
	genre: string;
	openrun: boolean;
	styUrls: Array<string>; 
	state: string;
}

export interface IPerformanceSessionList {
    prfSessionId: string;
    prfSessionDate: string;
	prfSessionTime: string;
	available: string;
}

export interface IFacilityDTO {
	facilityName: string;
	telNo: string;
	relateUrl: string;
	address: string;
	latitud: string;
	longitude: string;
}

export interface IPerformanceData {
	performanceDetailInfo: IPerformanceDetailInfo;
	prfSessionList: Array<IPerformanceSessionList>;
	facilityDTO: IFacilityDTO;
}

// export interface IPerformanceByIdResponse {
// 	data: IPerformanceData;
// }
export interface IPerformanceByIdResponse {
	data: IPerformanceData;
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


export interface IPerformanceReservationInfo {
	selectedDate: string;
	selectedTime: string;
	people: number;
	seatType: string;
	seatPrice: number;
	detail: IPerformanceData;
}


export interface ICheckReservationData {
	prfSessionId: string;
	count: number;
	reservationInfo: IPerformanceReservationInfo;
}