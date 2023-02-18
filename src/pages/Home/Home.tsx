import axios from "axios";
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { xml2json } from "xml-js";
import useGetPerformanceById from "../../hooks/query/performance/useGetPerformanceById";
import HomeView from "./Views/HomeView"

const Home = () => {
    const [top10, setTop10] = useState([])
    const navigate = useNavigate();
    // const [detailInfo,setDetailInfo]=useState({});
    // KOPIS API 호출  (전일 TOP 10)
    useEffect(() => {    
        axios.get(`/api?service=${process.env.REACT_APP_KOPIS_SECRET}&ststype=day&date=${new Date(new Date().setDate(new Date().getDate()-1)).toISOString().substring(0,10).replace(/-/g,'')}`)
        .then((res:any)=>{
            //console.log(res.data)
            const data = JSON.parse(
                xml2json(res.data, { compact: true, spaces: 4 })
            );
            //console.log(data.boxofs.boxof.splice(0,10))
            setTop10(data.boxofs.boxof.splice(0,10))
        }).catch((err) => {
            console.log(err);
        });
    },[new Date().getDate()]);

    

    const goDetail=(prf_id:string)=>{
        
        let detailInfoExample = {
            "prf_data": {
                "id": "PF209894",
                "title": "오페라의 유령 [부산]",
                "start_date": "2023.03.25",
                "end_date": "2023.06.18",
                "cast": "조승우, 김주택, 전동석, 손지수, 송은혜, 송원근, 황건하 등",
                "crew": "",
                "runtime": "2시간 30분",
                "prd_comp": "The Really Useful Group, 에스앤코(S&CO)",
                "viewing_age": "만 7세 이상",
                "ticket_price": [
                    //"전석무료": 전석 무료인 경우 혹은 좌석 가격 정보가 없을 때
                    {"seat_type": "VIP석", "price": 100000},
                    {"seat_type": "R석", "price": 160000},
                    {"seat_type": "S석", "price": 90000},
                    {"seat_type": "A석", "price": 90000},
                    {"seat_type": "B석", "price": 70000}
                ],
                "poster": "http://www.kopis.or.kr/upload/pfmPoster/PF_PF209894_230117_133614.gif",
                "story": "어쩌고 저쩌고",
                "genre": "뮤지컬",
                "openrun": true,
                "styurls": [
                    "http://www.kopis.or.kr/upload/pfmIntroImage/PF_PF209894_230117_0136142.jpg",
                    "http://www.kopis.or.kr/upload/pfmIntroImage/PF_PF209894_230117_0136141.jpg",
                    "http://www.kopis.or.kr/upload/pfmIntroImage/PF_PF209894_230117_0136140.jpg"
                ],
                "state": "공연예정" // 1: 공연마감, 2: 공연중, 3: 공연예정,
            },
            "prf_session_data": [
                {
                    "prf_session_id": 1,
                    "prf_session_date": "2023.03.25",
                    "prf_session_time": "14:00",
                    "is_available": true
                },
                {
                    "prf_session_id": 2,
                    "prf_session_date": "2023.03.25",
                    "prf_session_time": "19:00",
                    "is_available": true
                },
                {
                    "prf_session_id": 3,
                    "prf_session_date": "2023.03.26",
                    "prf_session_time": "14:00",
                    "is_available": true
                },
                {
                    "prf_session_id": 4,
                    "prf_session_date": "2023.03.26",
                    "prf_session_time": "19:00",
                    "is_available": true
                },
                {
                    "prf_session_id": 5,
                    "prf_session_date": "2023.03.28",
                    "prf_session_time": "19:30",
                    "is_available": true
                },
                {
                    "prf_session_id": 6,
                    "prf_session_date": "2023.03.29",
                    "prf_session_time": "19:30",
                    "is_available": true
                },
                {
                    "prf_session_id": 7,
                    "prf_session_date": "2023.03.30",
                    "prf_session_time": "19:30",
                    "is_available": true
                },
                {
                    "prf_session_id": 8,
                    "prf_session_date": "2023.03.31",
                    "prf_session_time": "19:30",
                    "is_available": true
                }
                
            ],
            "fclty_data": {
                "facility_name": "드림씨어터 [부산]",
                "address": "부산광역시 남구 전포대로 133 (문현동)",
                "telno": "00-1833-3755",
                "latitude": "35.1482786",
                "longitude": "129.0654385"
            }
        };
            
        
        
        navigate(`/detail/${prf_id}`,{ state: detailInfoExample })
    }

    return (
        <HomeView top10={top10} goDetail={goDetail}/>
    )
}

export default Home
