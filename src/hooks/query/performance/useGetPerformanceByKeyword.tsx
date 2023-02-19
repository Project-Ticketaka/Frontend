import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import PerformanceAPI from "../../../api/performance";
import { IPerformanceByCategoryResponse } from "../../../types/performance";

const useGetPerformanceByKeyword = (keyword: string | undefined) => {
    return useQuery(["getPerformanceByKeyword", keyword], () => PerformanceAPI.getPerformanceByKeyword(keyword), {
        select: (data: AxiosResponse<IPerformanceByCategoryResponse>) => {
            console.log(data.data.data)
            return data.data.data;
        },
    });
}

export default useGetPerformanceByKeyword