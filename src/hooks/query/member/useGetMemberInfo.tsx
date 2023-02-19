import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import MemberAPI from "../../../api/member";
import { IMemberResponse } from "../../../types/member";

const useGetMemberInfo = () => {
    return useQuery(["getMemberInfo"], () => MemberAPI.getMemberInfo(), {
        select: (data: AxiosResponse<IMemberResponse>) => {
            return data.data.data;
        },
    });
}

export default useGetMemberInfo;