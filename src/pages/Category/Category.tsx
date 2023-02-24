import { useParams } from "react-router-dom";
import useGetPerformanceByCategory from "../../hooks/query/performance/useGetPerformanceByCategory";
import CategoryView from "./Views/CategoryView"

const Category = () => {

    let category:{[key : string] : string }={
        'a4':'연극',
        'b3c':'무용(서양/한국무용)',
        'c3a':'서양음악(클래식)',
        'c4':'한국음악(국악)',
        'c3d':'대중음악',
        'e3a':'복합',
        'e3b':'서커스/마술',
        'g3a':'뮤지컬'
    }
    
    const params = useParams();
    // console.log(category[params.cat||''])
    
    const { data, isLoading } = useGetPerformanceByCategory(category[params.cat||'']);
    // console.log(data)

    return (
            isLoading ? <></> :<CategoryView isLoading={isLoading} data={data}/>
    )
}

export default Category