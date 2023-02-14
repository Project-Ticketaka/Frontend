import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import MemberAPI from "../../api/member";
import { IMemberInfo } from "../../types/member";

const useGetMemberInfo = () => {
    return useQuery(["getMemberInfo"], () => MemberAPI.getMemberInfo(), {
        select: (data: AxiosResponse<IMemberInfo>) => {
            return data.data;
        },
    });
}

export default useGetMemberInfo