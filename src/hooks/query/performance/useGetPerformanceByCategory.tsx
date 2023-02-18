import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import PerformanceAPI from "../../../api/performance";
import { IPerformanceData } from "../../../types/performance";

const useGetPerformanceByCategory = (genre: string | undefined) => {
    return useQuery(["getPerformanceByCategory", genre], () => PerformanceAPI.getPerformanceByCategory(genre), {
        select: (data: AxiosResponse<IPerformanceData>) => {
            return data.data;
        },
    });
}

export default useGetPerformanceByCategory