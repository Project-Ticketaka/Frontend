import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import PerformanceAPI from "../../../api/performance";
import { IPerformanceData } from "../../../types/performance";

const useGetPerformanceSession = (prf_session_id: string | undefined) => {
    return useQuery(["getPerformanceSession", prf_session_id], () => PerformanceAPI.getPerformanceSession(prf_session_id), {
        select: (data: AxiosResponse<IPerformanceData>) => {
            return data.data;
        },
    });
}

export default useGetPerformanceSession