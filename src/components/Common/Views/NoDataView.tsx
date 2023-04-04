import React from 'react'

const NoDataView = ({data}:any) => {
  return (
    <div style={{height:'100%',width:'100%',alignSelf:'center',display : 'flex',flexDirection:'column',justifyContent : 'center',alignItems : 'center'}}>
    <p style={{textAlign:'center',margin:'0',padding:'0',fontSize:'2rem'}}>
        🙅‍♀️
    </p>
    {data.description?
    <p style={{textAlign:'center',margin:'0',padding:'0',fontSize:'1.2rem'}}>
        {data.description}
    </p>
    :
    <p style={{textAlign:'center',margin:'0',padding:'0',fontSize:'1.2rem'}}>
        {data}
    </p>
    }
    </div>
  )
}

export default NoDataView