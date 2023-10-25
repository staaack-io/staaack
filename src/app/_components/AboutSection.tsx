"use client"
import React from "react";
import SimpleCard from "@/app/_components/card/SimpleCard";
import SimpleCard1Content from "@/app/_components/card/SimpleCard1Content";
import SimpleCardTextContent from "@/app/_components/card/SimpleCardTextContent";
import SimpleCard2Content from "@/app/_components/card/SimpleCard2Content";
import SimpleCard3Content from "@/app/_components/card/SimpleCard3Content";
import SimpleCard4Content from "@/app/_components/card/SimpleCard4Content";
import SimpleCardLogoStaaaackContent from "@/app/_components/card/SimpleCardLogoStaaaackContent";
import MapCardContent from "@/app/_components/card/MapCardContent";
import SimpleCard8Content from "@/app/_components/card/SimpleCard8Content";
import SimpleCard6Content from "@/app/_components/card/SimpleCard6Content";
import SimpleCard9Content from "@/app/_components/card/SimpleCard9Content";
import SimpleCard1Percent from "@/app/_components/card/SimpleCard1Percent";

const ServiceSection = (props) => {
    return <section className="p-8">
        <div className="text-center font-bold text-3xl text-white p-10">
            About
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-24 md:px-10">
            <div>
                <div className="grid grid-cols-2 gap-10 md:gap-20">
                    <div className="col-span-2 row-span-2 row-start-1">
                        <SimpleCard className="">
                            <img src="https://placehold.co/500x600" height={500} width={400} alt="Photo Alexis Détrie"
                                 className=""/>
                        </SimpleCard>
                    </div>
                    <div className="">
                        <SimpleCard>
                            <SimpleCard1Content imgSrc="./img/cpu.svg" text1="12" text2="ans d'XP"/>
                        </SimpleCard>
                    </div>
                    <div className="">
                        <SimpleCard>
                            <SimpleCard2Content/>
                        </SimpleCard>
                    </div>
                </div>
            </div>
            <div>
                <div className="content-center grid grid-cols-2 gap-10 md:gap-20">
                    <div className="col-span-2">
                        <SimpleCard>
                            <SimpleCardTextContent></SimpleCardTextContent>
                        </SimpleCard>
                    </div>
                    <div className="">
                        <SimpleCard>
                            <SimpleCard8Content></SimpleCard8Content>
                        </SimpleCard>
                    </div>
                    <div className="">
                        <SimpleCard>
                            <SimpleCard9Content></SimpleCard9Content>
                        </SimpleCard>
                    </div>
                    <div className="col-span-2">
                        <SimpleCard>
                            <SimpleCard1Percent></SimpleCard1Percent>
                        </SimpleCard>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-10 md:gap-20 content-between h-full">
                    <div className="flex gap-10 md:gap-20">
                        <SimpleCard>
                            <SimpleCardLogoStaaaackContent></SimpleCardLogoStaaaackContent>
                        </SimpleCard>
                        <SimpleCard>
                            <SimpleCard6Content></SimpleCard6Content>
                        </SimpleCard>
                    </div>
                    <div className="flex gap-10 md:gap-20">
                        <SimpleCard>
                            <SimpleCardLogoStaaaackContent></SimpleCardLogoStaaaackContent>
                        </SimpleCard>
                        <SimpleCard>
                            <SimpleCard6Content></SimpleCard6Content>
                        </SimpleCard>
                    </div>
                    <div className="h-72 md:h-full w-full">
                        <MapCardContent/>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}

export default ServiceSection;