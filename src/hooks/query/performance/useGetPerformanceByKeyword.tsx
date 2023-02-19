import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import PerformanceAPI from "../../../api/performance";
import { IPerformanceData } from "../../../types/performance";

const useGetPerformanceByKeyword = (keyword: string | undefined) => {
    return useQuery(["getPerformanceByKeyword", keyword], () => PerformanceAPI.getPerformanceByKeyword(keyword), {
        select: (data: AxiosResponse<IPerformanceData>) => {
            return data.data;
        },
    });
}

export default useGetPerformanceByKeyword