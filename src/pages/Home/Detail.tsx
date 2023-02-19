import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PerformanceAPI from "../../api/performance";
import useGetPerformanceById from "../../hooks/query/performance/useGetPerformanceById";
import DeatilView from "./Views/DeatilView"

const Detail = () => {
    const params = useParams();
    console.log(params?.prf_id);
    const { data, isLoading } = useGetPerformanceById(params?.prf_id);
    console.log(data)

    

    return (
        <DeatilView/>
    )
}

export default Detail