import React from "react";
import SimpleCard from "@/app/_components/button/SimpleCard";
import BubbleCard from "@/app/_components/button/BubbleCard";
import SimpleCard1Content from "@/app/_components/button/SimpleCard1Content";
import SimpleCardTextContent from "@/app/_components/button/SimpleCardTextContent";

const ServiceSection = (props) => {
    return <section {...props}>
            <div className="content-center grid grid-cols-6 gap-10">
                <div className="col-span-6 text-center">About</div>
                <div className="col-span-2 row-span-2 row-start-2">
                    <SimpleCard className="">
                        <img src="https://placehold.co/500x600" height={500} width={400} alt="Photo Alexis Détrie" />
                    </SimpleCard>
                </div>
                <div className="col-start-1 row-start-4">
                    <SimpleCard>
                        <SimpleCard1Content imgSrc="./cpu.svg" text1="12" text2="ans d'XP"/>
                    </SimpleCard>
                </div>
                <div className="col-start-2 row-start-4">
                    <SimpleCard>
                        <SimpleCard1Content imgSrc="./cpu.svg" text1="12" text2="ans d'XP"/>
                    </SimpleCard>
                </div>
                <div className="col-start-1 row-start-5">
                    <SimpleCard>
                        <SimpleCard1Content imgSrc="./cpu.svg" text1="12" text2="ans d'XP"/>
                    </SimpleCard>
                </div>
                <div className="col-start-2 row-start-5">
                    <SimpleCard>
                        <SimpleCard1Content imgSrc="./cpu.svg" text1="12" text2="ans d'XP"/>
                    </SimpleCard>
                </div>
                <div className="col-span-2 row-span-3 col-start-3 row-start-2">
                    <SimpleCard>
                        <SimpleCardTextContent></SimpleCardTextContent>
                    </SimpleCard>
                </div>
                <div className="col-span-2 col-start-3 row-start-5">
                    <SimpleCard>6</SimpleCard>
                </div>
                <div className="col-start-5 row-start-2">
                    <SimpleCard>7</SimpleCard>
                </div>
                <div className="col-start-6 row-start-2">
                    <SimpleCard>8</SimpleCard>
                </div>
                <div className="col-span-2 col-start-5 row-start-3">
                    <SimpleCard>9</SimpleCard>
                </div>
                <div className="col-start-5 row-start-4">
                    <SimpleCard>10</SimpleCard>
                </div>
                <div className="col-start-6 row-start-4">
                    <SimpleCard>11</SimpleCard>
                </div>
                <div className="col-span-2 col-start-5 row-start-5">
                    <SimpleCard>12</SimpleCard>
                </div>
        </div>
    </section>;
}

export default ServiceSection;