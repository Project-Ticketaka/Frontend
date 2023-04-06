import { useParams } from "react-router-dom";
import NoData from "../../components/Common/NoData";
import useGetPerformanceByCategory from "../../hooks/query/performance/useGetPerformanceByCategory";
import CategoryView from "./Views/CategoryView"
import { useState } from "react";

const Category:any = () => {

    let category:{[key : string] : string }={
        'a4':'연극',
        'b3c':'무용',
        'c3a':'서양음악(클래식)',
        'c4':'한국음악(국악)',
        'c3d':'대중음악',
        'e3a':'복합',
        'e3b':'서커스/마술',
        'g3a':'뮤지컬'
    }
    
    const params = useParams();
    // console.log(category[params.cat||''])
    const [page, setPage] = useState(0);
    const { data, isLoading } = useGetPerformanceByCategory(category[params.cat||''], page);
    
    
    return (
        isLoading?
        <></>
        :typeof data === "string"
        ?<NoData data={data}/>
        :<CategoryView data={data} setPage={setPage}/>
    )
    //isLoading={isLoading} data={data} page={page} setPage={setPage}
}

export default Category