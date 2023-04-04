import React, { useEffect, useRef } from 'react'
import MapView from "./Views/MapView"

const Map = ({lat,lng}:any) => {
    const { naver } = window;
    //const mapElement = useRef(null);
    useEffect(()=>{
        
        //if (!mapElement.current || !naver) return;

        //로케이션표시 Google maps에서 원하는 장소 찾은 후 주변검색을 누르면 좌표를 찾을 수 있다.
        const location = new naver.maps.LatLng(lat, lng);

        //네이버 지도 옵션 선택
        const mapOptions = {
            center: location,
            zoom: 16,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };
        
        const map = new naver.maps.Map('map', mapOptions);
        //지도상에 핀 표시 할 부분
        new naver.maps.Marker({
            position: location,
            map: map,
        });

    
    },[]);
    return (
        <MapView/>
    )
}

export default Map