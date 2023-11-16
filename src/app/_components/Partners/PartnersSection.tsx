"use client"
import React, {useCallback, useState} from "react";
// @ts-ignore
import partners from "public/data/partners.json";
import PartnerCard from "@/app/_components/Partners/PartnerCard";
import PartnerChoice from "@/app/_components/Partners/PartnerChoice";

const PartnersSection = (props: any) => {

    const [listPartners, setListPartners] = useState(partners);

    const selectCategory = useCallback(() => {
        alert("Salut")
    }, []);

    return <section className="bg-gray-100 grid grid-rows-1 w-full">
		<Title title="Our Partners"/>
        <PartnerChoice />
        <div className="flex justify-center w-full p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
                {
                    listPartners.map((partner: any, index: any) => {
                        return <PartnerCard key={index} name={partner.name} image={partner.image} city={partner.city} category={partner.category} selectedSectionPartner={selectCategory}/>;
                    })
                }
            </div>
        </div>
    </section>;
}

export default PartnersSection;