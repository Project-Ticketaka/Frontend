import React from 'react'
import useGetPerformanceByCategory from "../../hooks/query/performance/useGetPerformanceByCategory";
import CategoryView from "./Views/CategoryView";

const E3B = () => {
    let category=[
        {title:'연극',id:'a4'},
        {title:'무용(서양/한국무용)',id:'b3a'},
        {title:'서양음악(클래식)',id:'c3a'},
        {title:'한국음악(국악)',id:'c4'},
        {title:'대중음악',id:'c3d'},
        {title:'복합',id:'e3a'},
        {title:'서커스/마술',id:'e3b'},
        {title:'뮤지컬',id:'g3a'},
    ]
    
    const { data, isLoading } = useGetPerformanceByCategory('서커스/마술');
    console.log(data)

    return (
            isLoading ? <></> :<CategoryView data={data}/>
    )
}

export default E3B