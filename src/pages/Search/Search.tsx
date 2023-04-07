import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import SearchView from "./Views/SearchView"
import PerformanceAPI from "../../api/performance";
import NoData from "../../components/Common/NoData";

const Search = () => {
    const params = useParams();
    
    const keyword = params.keyword||'';

    const [page, setPage] = useState(0);
    const [searchData, setSearchData] = useState([]);
    const [error, setError] = useState({});
    const [isLast, setIsLast] = useState(false);
    
    
    useEffect(()=>{
        PerformanceAPI.getPerformanceByKeyword(keyword,page).then(res=>{
            // console.log(res.data.data)
            if(res.data.code===202){
                setError(res.data)
            }else{
                setSearchData(searchData.concat(res.data.data.content))
                setIsLast(res.data.data.last)
            }
            
        }).catch((error)=>{
            // console.log(data)
            // console.log(error)
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page,isLast])


        
    return (
        
        JSON.stringify(error) === '{}'?
        <SearchView data={searchData}  setPage={setPage} isLast={isLast}/>
        :
        <NoData data={error}/>
    )
}

export default Search