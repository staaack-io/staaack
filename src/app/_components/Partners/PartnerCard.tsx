import Image from "next/image";
import React from "react";

const PartnerCard = (props: any) => {

    return <>
        {(props.selectedSectionPartner == props.category || props.selectedSectionPartner == "All") &&
            <div className="flex flex-col justify-center items-center p-5">
                <div className="h-full grayscale hover:grayscale-0 hover:drop-shadow-lg hover:transform-gpu duration-500">
                    <div
                        className="h-full p-8 bg-gray-100 hover:bg-white flex justify-center items-center rounded-3xl">
                        <Image src={"/img/logo/" + props.image} alt="" height={150} width={150} className=""></Image>
                    </div>
                </div>
                <span className="pt-10 text-xl">{props.name}</span>
                <span className="text-md">{props.city}</span>
            </div>}
    </>
}

export default PartnerCard;