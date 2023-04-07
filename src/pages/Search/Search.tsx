import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import SearchView from "./Views/SearchView"
import PerformanceAPI from "../../api/performance";
import NoData from "../../components/Common/NoData";

const Search = () => {


    const {state} = useLocation();
    

    const [keyword, setKeyword] = useState(state.keyword);
    const [page, setPage] = useState(state.page);
    const [searchData, setSearchData] = useState(state.data.content);
    const [error, setError] = useState({});
    const [isLast, setIsLast] = useState(state.data.last);
    
    
    useEffect(()=>{
        console.log(keyword)
        if(page>=1){
            console.log(page)
            console.log(keyword)
            PerformanceAPI.getPerformanceByKeyword(keyword,page).then(res=>{
                console.log(res.data)
                if(res.data.code===202){
                    setError(res.data)
                }else{
                    setSearchData(searchData.concat(res.data.data.content))
                    setIsLast(res.data.data.last)
                }
            
        }).catch((error)=>{
            // console.log(data)
            console.log(error)
        });
        }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page, isLast, keyword])


        
    return (
        
        JSON.stringify(error) === '{}'?
        <SearchView data={searchData} setPage={setPage} isLast={isLast} keyword={keyword}/>
        :
        <NoData data={error}/>
    )
}

export default React.memo(Search)