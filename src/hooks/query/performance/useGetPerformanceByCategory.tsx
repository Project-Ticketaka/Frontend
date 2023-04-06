import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import PerformanceAPI from "../../../api/performance";
import { IPerformanceByCategoryResponse } from "../../../types/performance";

const useGetPerformanceByCategory = (genre: string | undefined, page: number) => {
    return useQuery(["getPerformanceByCategory", genre,page], () => PerformanceAPI.getPerformanceByCategory(genre,page), {
        select: (data: AxiosResponse<IPerformanceByCategoryResponse>) => {
            
            // console.log(data.data.data)
            //console.log(data)

            return(
                data.data.code === 202
                ? data.data.description
                : data.data.data
            );
            
        },
        keepPreviousData:true
    });
}

export default useGetPerformanceByCategory