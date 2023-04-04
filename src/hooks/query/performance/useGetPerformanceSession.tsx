import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import PerformanceAPI from "../../../api/performance";
import { IPerformanceSessionResponse } from "../../../types/performance";

const useGetPerformanceSession = (prf_session_id: string | undefined) => {
    return useQuery(["getPerformanceSession", prf_session_id], () => PerformanceAPI.getPerformanceSession(prf_session_id), {
        select: (data: AxiosResponse<IPerformanceSessionResponse>) => {
            // console.log(data.data.data)
            return data.data.data;
        },
    });
}

export default useGetPerformanceSession