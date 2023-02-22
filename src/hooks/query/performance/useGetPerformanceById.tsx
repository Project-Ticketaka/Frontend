import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import PerformanceAPI from "../../../api/performance";
import { IPerformanceByIdResponse,IPerformanceByIdBadResponse, IPerformanceByCategoryResponse } from "../../../types/performance";


const useGetPerformanceById = (prf_id: string | undefined) => {
    return useQuery(["getPerformanceById", prf_id], () => PerformanceAPI.getPerformanceById(prf_id), {
        select: (data: AxiosResponse<IPerformanceByIdResponse>) => {
            console.table(data.data)
            return data.data;
        },
    });
}

export default useGetPerformanceById
