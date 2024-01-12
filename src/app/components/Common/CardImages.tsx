import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";

const CardImages = (props: any) => {

    return <div className={props.className +
        " bg-white rounded-3xl" +
        " flex flex-col items-center justify-center" +
        " h-[180px] w-full sm:h-[265px] md:h-[215px] lg:h-[190px] lg:w-[402px] xl:h-[210px] xl:w-[440px] 2xl:w-[395px] 2xl:h-[190px]" +
        " hover:drop-shadow-lg hover:transform-gpu duration-500"
    }>
        <div className="flex gap-2 items-center justify-center w-full h-full p-4">
            <span className="text-7xl mr-2">🇫🇷</span>
            <span className="text-7xl mr-1">🇬🇧</span>
            <Image src="/img/aws-certif.png" alt="logo" width={90} height={90} className="p-2 mr-2"></Image>
            <Image src="/img/azure-certif.png" alt="logo" width={90} height={90} className="p-2 mr-2"></Image>
        </div>
    </div>
}

export default CardImages;