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

export interface ICheckReservationData {
	memberId: string;
	prfSessionId: number;
	count: number;
}