import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import PerformanceAPI from "../../api/performance";
import { IPerformanceData } from "../../types/performance";

const useGetPerformanceById = (prf_id: string | undefined) => {
    return useQuery(["getPerformanceById", prf_id], () => PerformanceAPI.getPerformanceById(prf_id), {
        select: (data: AxiosResponse<IPerformanceData>) => {
            return data.data;
        },
    });
}

export default useGetPerformanceById