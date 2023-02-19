import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import PerformanceAPI from "../../../api/performance";
import { IPerformanceByIdResponse } from "../../../types/performance";

const useGetPerformanceById = (prf_id: string | undefined) => {
    // return useQuery(["getPerformanceById", prf_id], () => PerformanceAPI.getPerformanceById(prf_id), {
    //     select: (data: AxiosResponse<IPerformanceByIdResponse>) => {
    //         console.log(data.data.data);
    //         return data.data.data;
    //     },
    // });
    return useQuery(["getPerformanceById", prf_id], () => PerformanceAPI.getPerformanceById(prf_id));
}

export default useGetPerformanceById
