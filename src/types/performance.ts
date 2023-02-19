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
    prfId: string;
    title: string;
    startDate: string;
    endDate: string;
	viewingAge: string;
	genre: string;
	poster: string;
	facilityName: string;
}

export interface IPerformanceByCategoryResponse {
	data: {
		content: IPerformanceSearch[];
		pageable: {
            sort: {
                empty: boolean;
                sorted: boolean;
                unsorted: boolean;
            },
            offset: number;
            pageNumber: number;
            pageSize: number;
            paged: boolean;
            unpaged: boolean;
        },
        size: number;
        number: number;
        numberOfElements: number;
        sort: {
            empty: boolean;
            sorted: boolean;
            unsorted: boolean;
        },
        first: boolean;
        last: boolean;
        empty: boolean;
	}
}
export interface IPerformanceReservationInfo {
	selectedDate: string;
	selectedTime: string;
	people: number;
	seatType: string;
	seatPrice: number;
	detail: IPerformanceData;
}

export interface ICheckData {
	prfSessionId: string;
	count: number;
}
export interface ICheckReservationData {
	checkData: ICheckData;
	reservationInfo: IPerformanceReservationInfo;
}