import React from "react";
import {Map, Marker} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";
import {motion} from "framer-motion";

const CardMap = (props: any) => {

    return <div className={props.className +
        " bg-white rounded-3xl" +
        " flex flex-col items-center justify-center" +
        " h-[180px] w-full sm:h-[265px] md:h-[215px] lg:h-[190px] lg:w-[402px] xl:h-[210px] xl:w-[440px] 2xl:w-[395px] 2xl:h-[190px]" +
        " hover:drop-shadow-lg hover:transform-gpu duration-500"
    }>
        <Map
            mapLib={import('mapbox-gl')}
            initialViewState={{
                longitude: 6.1263061,
                latitude: 49.5985502,
                zoom: 13
            }}
            style={{width: "100%", height: "100%", borderRadius: "16"}}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
            attributionControl={false}
            antialias={true}
        >
            <Marker longitude={6.1263061} latitude={49.5985502}>
                <div
                    className="flex justify-center items-center rounded-full p-7 h-24 w-24 bg-opacity-60 bg-white border-[#888]">
                    <motion.div
                        whileHover={{scale: 1.2, rotate: 360}}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }}>
                        <Image src={"/img/logo.png"} alt={"Logo staaack"} height={45} width={45} className=""></Image>
                    </motion.div>
                </div>
            </Marker>
        </Map>
    </div>
}

export default CardMap;