import React from 'react'
import { useLocation, useParams } from "react-router-dom"
import useGetPerformanceByKeyword from "../../hooks/query/performance/useGetPerformanceByKeyword";
import SearchView from "./Views/SearchView"

const Search = () => {
    const params = useParams();
    console.log(params?.keyword);
    const { data, isLoading } = useGetPerformanceByKeyword(params?.keyword);
    console.log(data)
    return (
        isLoading?<></>:<SearchView data={data} keyword={params?.keyword
        }/>
    )
}

export default Search