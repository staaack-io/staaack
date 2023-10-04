import React from "react";
import SimpleCard from "@/app/_components/button/SimpleCard";
import BubbleCard from "@/app/_components/button/BubbleCard";
import SimpleCard1Content from "@/app/_components/button/SimpleCard1Content";
import SimpleCardTextContent from "@/app/_components/button/SimpleCardTextContent";

const ServiceSection = (props) => {
    return <section {...props}>
        <div className="text-center font-bold text-3xl text-white">About</div>
        <div className="content-center grid grid-cols-2 gap-4 lg:grid-cols-6 lg:gap-10">
            <div className="col-span-2 row-span-2 row-start-1">
                <SimpleCard className="">
                    <img src="https://placehold.co/500x600" height={500} width={400} alt="Photo Alexis Détrie"/>
                </SimpleCard>
            </div>
            <div className="lg:col-start-1 lg:row-start-3">
                <SimpleCard>
                    <SimpleCard1Content imgSrc="./cpu.svg" text1="12" text2="ans d'XP"/>
                </SimpleCard>
            </div>
            <div className="lg:col-start-2 lg:row-start-3">
                <SimpleCard>
                    <SimpleCard1Content imgSrc="./cpu.svg" text1="12" text2="ans d'XP"/>
                </SimpleCard>
            </div>
            <div className="lg:col-start-1 lg:row-start-4">
                <SimpleCard>
                    <SimpleCard1Content imgSrc="./cpu.svg" text1="12" text2="ans d'XP"/>
                </SimpleCard>
            </div>
            <div className="lg:col-start-2 lg:row-start-4">
                <SimpleCard>
                    <SimpleCard1Content imgSrc="./cpu.svg" text1="12" text2="ans d'XP"/>
                </SimpleCard>
            </div>
            <div className="col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-1">
                <SimpleCard>
                    <SimpleCardTextContent></SimpleCardTextContent>
                </SimpleCard>
            </div>
            <div className="col-span-2 lg:col-start-3 lg:row-start-4">
                <SimpleCard>6</SimpleCard>
            </div>
            <div className="lg:col-start-5 lg:row-start-1">
                <SimpleCard>7</SimpleCard>
            </div>
            <div className="lg:col-start-6 lg:row-start-1">
                <SimpleCard>8</SimpleCard>
            </div>
            <div className="col-span-2 lg:col-start-5 lg:row-start-2">
                <SimpleCard>9</SimpleCard>
            </div>
            <div className="lg:col-start-5 lg:row-start-3">
                <SimpleCard>10</SimpleCard>
            </div>
            <div className="lg:col-start-6 lg:row-start-3">
                <SimpleCard>11</SimpleCard>
            </div>
            <div className="col-span-2 lg:col-start-5 lg:row-start-4">
                <SimpleCard>12</SimpleCard>
            </div>
        </div>
    </section>;
}

export default ServiceSection;