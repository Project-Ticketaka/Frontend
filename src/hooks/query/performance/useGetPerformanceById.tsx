import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import PerformanceAPI from "../../../api/performance";
import { IPerformanceByIdResponse } from "../../../types/performance";

const useGetPerformanceById = (prf_id: string | undefined) => {
    return useQuery(["getPerformanceById", prf_id], () => PerformanceAPI.getPerformanceById(prf_id), {

        select: (data: AxiosResponse<any>) => {
            console.log(data.data);
            return data.data.data;
        },
    });
}

export default useGetPerformanceById