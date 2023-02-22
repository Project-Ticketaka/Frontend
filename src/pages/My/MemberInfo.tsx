import React from 'react'
import useGetMemberInfo from "../../hooks/query/member/useGetMemberInfo";
import MemberInfoView from "./Views/MemberInfoView";

const MemberInfo = () => {
    const { data, isLoading } = useGetMemberInfo();
    return (
        isLoading?<></>:<MemberInfoView data={data}/>
    )
}

export default MemberInfo