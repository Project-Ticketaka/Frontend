// import { useQuery } from "@tanstack/react-query";
// import { AxiosResponse } from "axios";
// import PerformanceAPI from "../../../api/performance";
// import { IPerformanceByIdResponse } from "../../../types/performance";

// const useGetPerformanceById = (prf_id: string | undefined) => {
//     return useQuery(["getPerformanceById", prf_id], () => PerformanceAPI.getPerformanceById(prf_id), {
//         onSuccess: (data: AxiosResponse<IPerformanceByIdResponse>) => {
//             console.log(data.data);
//             return data.data.data;
//         },
//         select: (data: AxiosResponse<IPerformanceByIdResponse>) => {
//             console.log(data.data);
//             return data.data.data;
//         },
//     });
// }

// export default useGetPerformanceById

import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import PerformanceAPI from "../../../api/performance";
import { IPerformanceByIdResponse } from "../../../types/performance";

const useGetPerformanceById = (prfId: string | undefined) => {
  return useQuery(["getPerformanceById", prfId], () => PerformanceAPI.getPerformanceById(prfId), {
    select: (data: AxiosResponse<IPerformanceByIdResponse>) => {
      return data.data.data;
    },
  });
};

export default useGetPerformanceById;