import React from 'react'
import { useParams } from "react-router-dom";
import useGetPerformanceByCategory from "../../hooks/query/performance/useGetPerformanceByCategory";
import useGetPerformanceByKeyword from "../../hooks/query/performance/useGetPerformanceByKeyword";
import CategoryView from "./Views/CategoryView"

const A4 = () => {
    
    const params = useParams();
    console.log(params?.id);
    let category=[
        {title:'홈',id:'home'},
        {title:'연극',id:'a4'},
        {title:'무용',id:'b3a'},
        {title:'클래식',id:'c3a'},
        {title:'국악',id:'c4'},
        {title:'대중음악',id:'c3d'},
        {title:'복합',id:'e3a'},
        {title:'서커스/마술',id:'e3b'},
        {title:'뮤지컬',id:'g3a'},
    ]
    
    const { data, isLoading } = useGetPerformanceByCategory('연극');
    console.log(data)
  return (
    isLoading?<CategoryView />:<CategoryView data={data}/>
  )
}

export default A4