import React from "react";
import Map from 'react-map-gl';

const CardMap = (props: any) => {
    return <div className={props.className +
        " bg-white rounded-2xl" +
        " flex flex-col items-center justify-center" +
        " h-[180px] w-full sm:h-[265px] md:h-[215px] lg:h-[190px] lg:w-[402px] xl:h-[210px] xl:w-[440px] 2xl:w-[395px] 2xl:h-[190px]" +
        " hover:drop-shadow-lg hover:scale-102 hover:transform-gpu duration-500"
    }>
        <Map
            mapLib={import('mapbox-gl')}
            initialViewState={{
                longitude: 6.1263061,
                latitude: 49.5985502,
                zoom: 15
            }}
            style={{width: "100%", height: "100%", borderRadius: "16"}}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
            attributionControl={false}
            antialias={true}

        />
    </div>
}

export default CardMap;