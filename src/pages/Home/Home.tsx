import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import useGetPerformanceByRank from "../../hooks/query/performance/useGetPerformanceByRank";
import HomeView from "./Views/HomeView"

const Home = () => {

    const navigate = useNavigate();
    // const [detailInfo,setDetailInfo]=useState({});
    // KOPIS API 호출  (전일 TOP 10)
    const { data, isLoading } = useGetPerformanceByRank();

    const onGoToDetail=(prf_id:string)=>{
        navigate(`/detail/${prf_id}`)
    }

    return (
        isLoading? <></> :
        <HomeView top10={data} onGoToDetail={onGoToDetail}/>
    )
}

export default Home
