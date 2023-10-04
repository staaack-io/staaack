import React from "react";
import SimpleCard from "@/app/_components/button/SimpleCard";
import BubbleCard from "@/app/_components/button/BubbleCard";
import SimpleCard1Content from "@/app/_components/button/SimpleCard1Content";
import SimpleCardTextContent from "@/app/_components/button/SimpleCardTextContent";

const ServiceSection = (props) => {
    return <section className="p-8 bg-gradient-primary">
        <div className="text-center font-bold text-3xl text-white p-10">
            About
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
                <div className="content-center grid grid-cols-2 gap-4">
                    <div className="col-span-2 row-span-2 row-start-1">
                        <SimpleCard className="">
                            <img src="https://placehold.co/500x600" height={500} width={400} alt="Photo Alexis Détrie"
                                 className="rounded-xl"/>
                        </SimpleCard>
                    </div>
                    <div className="">
                        <SimpleCard>
                            <SimpleCard1Content imgSrc="./cpu.svg" text1="12" text2="ans d'XP"/>
                        </SimpleCard>
                    </div>
                    <div className="">
                        <SimpleCard>
                            <SimpleCard1Content imgSrc="./cpu.svg" text1="12" text2="ans d'XP"/>
                        </SimpleCard>
                    </div>
                    <div className="">
                        <SimpleCard>
                            <SimpleCard1Content imgSrc="./cpu.svg" text1="12" text2="ans d'XP"/>
                        </SimpleCard>
                    </div>
                    <div className="">
                        <SimpleCard>
                            <SimpleCard1Content imgSrc="./cpu.svg" text1="12" text2="ans d'XP"/>
                        </SimpleCard>
                    </div>
                </div>
            </div>
            <div>
                <div className="content-center grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <SimpleCard>
                            <SimpleCardTextContent></SimpleCardTextContent>
                        </SimpleCard>
                    </div>
                    <div className="col-span-2">
                        <SimpleCard>6</SimpleCard>
                    </div>
                </div>
            </div>
            <div>
                <div className="content-center grid grid-cols-2 gap-4">
                    <div className="">
                        <SimpleCard>7</SimpleCard>
                    </div>
                    <div className="">
                        <SimpleCard>8</SimpleCard>
                    </div>
                    <div className="col-span-2">
                        <SimpleCard>9</SimpleCard>
                    </div>
                    <div className="">
                        <SimpleCard>10</SimpleCard>
                    </div>
                    <div className="">
                        <SimpleCard>11</SimpleCard>
                    </div>
                    <div className="col-span-2">
                        <SimpleCard>12</SimpleCard>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}

export default ServiceSection;