import React from 'react'
import { useLocation } from "react-router-dom"
import useGetPerformanceByKeyword from "../../hooks/query/performance/useGetPerformanceByKeyword";
import SearchView from "./Views/SearchView"

const Search = () => {
    const {state}=useLocation();
    const { data, isLoading } = useGetPerformanceByKeyword(state);
    console.log(data)
    return (
        isLoading?<></>:<SearchView data={data} keyword={state}/>
    )
}

export default Search