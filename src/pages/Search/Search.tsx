import React from 'react'
import { useLocation } from "react-router-dom"
import SearchView from "./Views/SearchView"

const Search = () => {
    const {state}=useLocation();
    return (
        <SearchView searchKeyword={state} searchCount={1466}/>
    )
}

export default Search