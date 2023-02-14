import { IPerformanceData } from "../types/performance";
import client from "./client";

const PerformanceAPI = {
  getPerformanceById: (prf_id: string | undefined) => {
    return client.get(`/performance?p=${prf_id}`);
  },
  getPerformanceByKeyword: (keyword: string) => {
    return client.get(`/performance/search?keyword=${keyword}`);
  },
};

export default PerformanceAPI;