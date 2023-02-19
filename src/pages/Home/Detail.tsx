
import { useLocation } from "react-router";
import { useParams } from "react-router-dom";
import useGetPerformanceById from "../../hooks/query/performance/useGetPerformanceById";
import DeatilView from "./Views/DeatilView"

const Detail = () => {
    const { state } = useLocation();
    console.log(state)
    const params = useParams();
    const { data, isLoading } = useGetPerformanceById(params?.prf_id);
    return (
        <DeatilView data={data}/>
    )
}

export default Detail