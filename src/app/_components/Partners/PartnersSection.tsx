import React from "react";
// @ts-ignore
import partners from "public/data/partners.json";
import PartnerCard from "@/app/_components/Partners/PartnerCard";

const PartnersSection = (props: any) => {
    return <section className="bg-gray-100">
        <div className="text-center font-bold text-3xl text-black p-10">
            Our Partners
        </div>
        <div className="flex justify-center w-full p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
                {
                    partners.map((partner: any, index: any) => {
                        return <PartnerCard key={index} name={partner.name} image={partner.image} city={partner.city}/>;
                    })
                }
            </div>
        </div>
    </section>;
}

export default PartnersSection;