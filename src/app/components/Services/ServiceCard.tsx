import Image from "next/image";
import React from "react";

import parse from 'html-react-parser'

const ServiceCard = (props: any) => {
    return <div className={"my-10 ml-4 bg-white rounded-3xl p-10 h-5/6 " +
        " w-[90%] min-h-72 sm:w-96 sm:h-[32rem]" +
        " flex flex-col justify-items items-center" +
        " hover:drop-shadow-lg hover:transform-gpu duration-500 p-10" + props.className}>
        <div className="flex justify-center ">
            <div className="w-full h-full">
                <Image className="pic-services-color" src={props.icon} alt={props.serviceName} width={100}
                       height={100}/></div>
        </div>
        <div>
        <span className="font-color-logo font-bold text-3xl">{props.serviceName}</span>
        </div>
        <div className="col-span-2 sm:col-span-0 pt-8 w-full">
            {parse(props.children)}
        </div>
    </div>
}

export default ServiceCard;