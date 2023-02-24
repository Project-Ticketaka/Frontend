import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import PerformanceAPI from "../../../api/performance";
import { IPerformanceByCategoryResponse } from "../../../types/performance";

const useGetPerformanceByCategory = (genre: string | undefined) => {
    return useQuery(["getPerformanceByCategory", genre], () => PerformanceAPI.getPerformanceByCategory(genre), {
        select: (data: AxiosResponse<IPerformanceByCategoryResponse>) => {
            console.log(data.data.data)
            // setTimeout(()=>{
                
            // },2000)
            return data.data.data;
        },
    });
}

export default useGetPerformanceByCategory