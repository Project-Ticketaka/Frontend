
import { useLocation } from "react-router";
import { useParams } from "react-router-dom";
import useGetPerformanceById from "../../hooks/query/performance/useGetPerformanceById";
import DeatilView from "./Views/DeatilView"

const Detail = () => {
    
    const params = useParams();
    console.log(params?.prf_id)
    const { data, isLoading } = useGetPerformanceById(params?.prf_id);
    console.log(data)
    return (
        <DeatilView data={data}/>
    )
}

export default Detail