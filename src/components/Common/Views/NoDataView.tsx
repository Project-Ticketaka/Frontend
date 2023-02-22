import React from 'react'

const NoDataView = ({data}:any) => {
  return (
    <div style={{height:'100%',display : 'flex',flexDirection:'column',justifyContent : 'center',alignItems : 'center'}}>
    <p style={{textAlign:'center',margin:'0',padding:'0',fontSize:'2rem'}}>
        🙅‍♀️
    </p>
    <p style={{textAlign:'center',margin:'0',padding:'0',fontSize:'1.2rem'}}>
        {data.description}
    </p>
    </div>
  )
}

export default NoDataView