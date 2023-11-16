import React from "react";
// @ts-ignore
import partners from "public/data/partners.json";
import PartnerCard from "@/app/_components/Partners/PartnerCard";
import Title from "@/app/_components/Common/Title";

const PartnersSection = (props: any) => {
    return <section className="bg-gray-100 p-8">
        <Title title="Our Partners"/>
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