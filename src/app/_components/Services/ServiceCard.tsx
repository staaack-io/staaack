import Image from "next/image";
import React from "react";

const ServiceCard = (props: any) => {
    return <div className={"bg-white rounded-2xl p-10 " +
        " w-96 h-[32rem]" +
        " flex flex-col " +
        " hover:drop-shadow-lg hover:transform-gpu duration-500" + props.className}>
        <div className="flex justify-center ">
            <Image className="pic-services-color" src={props.icon} alt={props.serviceName} width={100}
                   height={100}/></div>
        <div
            className="text-3xl md:text-4xl text-center font-bold text-transparent
                     bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400
                      inline-block bg-clip-text">{props.serviceName}
        </div>
        <div className="pt-8 w-full">
            {props.children}
        </div>
    </div>
}

export default ServiceCard;