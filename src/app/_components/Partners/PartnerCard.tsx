import Image from "next/image";
import React, {useContext, useEffect} from "react";

const PartnerCard = (props: any) => {

    return <>
        {(props.selectedSectionPartner == props.category || props.selectedSectionPartner == "All") &&
            <div className="flex flex-col justify-center items-center p-5">
                <div className="partner-card-parent h-full grayscale hover:grayscale-0 hover:scale-110">
                    <div
                        className="partner-card-child h-full p-8 bg-gray-100 hover:bg-white flex justify-center items-center">
                        <Image src={"/img/logo/" + props.image} alt="" height={150} width={150} className=""></Image>
                    </div>
                </div>
                <span className="pt-3">{props.name}</span>
                <span>{props.city}</span>
            </div>}
    </>
}

export default PartnerCard;