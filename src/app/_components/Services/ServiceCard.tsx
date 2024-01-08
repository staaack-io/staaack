import Image from "next/image";
import React from "react";

const ServiceCard = (props: any) => {
    return <div className={"my-10 ml-4 bg-white rounded-2xl p-10 " +
        " w-[90%] min-h-72 sm:w-96 sm:h-[32rem]" +
        " flex flex-col justify-items items-center" +
        " hover:drop-shadow-lg hover:transform-gpu duration-500 p-10" + props.className}>
        <div className="flex justify-center ">
            <div className="w-1/2 h-1/2 sm:w-full sm:h-full">
                <Image className="pic-services-color" src={props.icon} alt={props.serviceName} width={100}
                       height={100}/></div>
            </div>
        <div
            className="text-4xl sm:text-3xl md:text-4xl sm:text-center font-bold text-transparent
                     bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400
                      inline-block bg-clip-text">{props.serviceName}
        </div>
        <div className="col-span-2 sm:col-span-0 pt-8 w-full">
            {props.children}
        </div>
    </div>
}

export default ServiceCard;