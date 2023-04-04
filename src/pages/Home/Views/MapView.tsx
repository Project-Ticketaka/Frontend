import React from "react"

const MapView = ({mapElement}:any) => {
  return (
    <div ref={mapElement} style={{ width: '500px', height: '300px',borderRadius:'1rem' }} />
  )
}

export default React.memo(MapView)