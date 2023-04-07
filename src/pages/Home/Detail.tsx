
import React from "react";
import { useParams } from "react-router-dom";
import NoData from "../../components/Common/NoData";
import useGetPerformanceById from "../../hooks/query/performance/useGetPerformanceById";
import DeatilView from "./Views/DeatilView"

const Detail = () => {
    const params = useParams();
    //console.log(params?.prf_id);
    const { data, isLoading } = useGetPerformanceById(params?.prf_id);
    // console.log(data)
    
    return ( 
        isLoading? <></> : 
        data?<DeatilView performanceData={data}/>
        :
        <div style={{padding:'2rem 1rem',display:'flex',flexDirection:'column',width:'100%',gap:'1rem'}}>
            <NoData data={{code:202,description:'조회한 데이터를 찾을 수 없습니다.'}}/>
        </div>
    )
}

export default React.memo(Detail)