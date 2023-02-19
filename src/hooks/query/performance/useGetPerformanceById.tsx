import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import PerformanceAPI from "../../../api/performance";
import { IGetPerformanceData } from "../../../types/performance";

const useGetPerformanceById = (prf_id: string | undefined) => {
    return useQuery(["getPerformanceById", prf_id], () => PerformanceAPI.getPerformanceById(prf_id), {
        select: (data: AxiosResponse<IGetPerformanceData>) => {
            console.log(data)
            return data.data;
        },
    });
}

export default useGetPerformanceById