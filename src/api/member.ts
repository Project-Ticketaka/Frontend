import client from "./client";

const PerformanceAPI = {
    getMemberInfo: () => {
        return client.get(`/member/info`);
    },
};

export default PerformanceAPI;
