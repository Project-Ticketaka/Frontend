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
//response example
/*
{
  "data": {
		"prf_data": {
			"id": "PF100233"
      "title": "우리 연애할까",
      "start_date": "2016.05.12",
      "end_date": "2016.07.31",
      "cast": "김부연,임정균,최수영",
      "crew": "천정민",
			"runtime": "1시간 30분",
			"prd_comp": "극단 피에로",
			"viewing_age": "만 12세 이상",
			"ticket_price": [
					{"seat_type": "r석", "price": 100000},
					{"seat_type": "s석", "price": 90000}
			],
			"poster": "http://www.kopis.or.kr/upload/pfmPoster/PF_PF132236_160704_142630.gif",
			"story": "어쩌고 저쩌고",
			"genre": "연극",
			"openrun": true,
			"styurls": [
				"http://www.kopis.or.kr/upload/pfmIntroImage/PF_PF132236_160704_0226303.jpg",
				"http://www.kopis.or.kr/upload/pfmIntroImage/PF_PF132236_160704_0226302.jpg",
			],
			"state": "공연중" // 1: 공연마감, 2: 공연중, 3: 공연예정,
		},
		"prf_session_data": [
			{
				"prf_session_id": 1,
				"prf_session_date": "2016.05.12",
				"prf_session_time": "20:00"
				"is_available": true
			},
			{
				"prf_session_id": 2,
				"prf_session_date": "2016.05.13",
				"prf_session_time": "20:00",
				"is_available": true
			},
			{
				"prf_session_id": 3,
				"prf_session_date": "2016.05.14",
				"prf_session_time": "16:00",
				"isAvailable": false
			},
			{
				"prf_session_id": 4,
				"prf_session_date": "2016.05.14",
				"prf_session_time": "19:00",
				"is_available": true
			},
		],
		"fclty_data": {
			"facility_name": "올림픽공원",
			"address": "서울특별시 송파구 방이동",
			"telno": "02-419-1114",
			"latitude": "37.52112",
			"longitude": "127.12836360000005"
		}
	}
}
*/