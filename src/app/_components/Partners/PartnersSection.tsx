"use client"
import React, {useState} from "react";
// @ts-ignore
import partners from "public/data/partners.json";
import PartnerCard from "@/app/_components/Partners/PartnerCard";
import PartnerChoice from "@/app/_components/Partners/PartnerChoice";
import Title from "@/app/_components/Common/Title";

const PartnersSection = (props: any) => {

    const [listPartners, setListPartners] = useState(partners);
    const [selectedCategory, setSelectedCategory] = useState("All");

    return <section className="bg-gray-100 w-full cursor-pointer flex flex-col items-center">
        <div className="flex items-center mb-10 w-full">
            <Title title="Our Partners" subtitle="All the companies for which I have worked."/>
        </div>
        <div className="default-size">
            <PartnerChoice name={(category: any) => {
                setSelectedCategory(category);
            }}/>
            <div className="-z-10 flex justify-center w-full p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5">
                    {
                        listPartners.map((partner: any, index: any) => {
                            return <PartnerCard key={index} name={partner.name} image={partner.image} city={partner.city} category={partner.category} selectedSectionPartner={selectedCategory}/>;
                        })
                    }
                </div>
            </div>
        </div>
    </section>;
}

export default PartnersSection;