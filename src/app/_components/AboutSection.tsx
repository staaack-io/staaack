import ServiceCard from "@/app/_components/button/ServiceCard";
import BubbleCard from "@/app/_components/button/BubbleCard";
import React from "react";
import Image from "next/image";
import SimpleCard from "@/app/_components/button/SimpleCard";

const ServiceSection = (props) => {
    return <section {...props}>
        <div className="h-full text-white grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-5 justify-items-center">
            <div className="lg:col-span-2 text-5xl py-8">
                About
            </div>
            <div className="">
                <SimpleCard>
                    <img src="https://placehold.co/400x600" height={600} width={400} alt="Photo Alexis Détrie" />
                </SimpleCard>
            </div>
            <div className="h-full lg:flex lg:justify-center lg:content-center lg:items-center lg:text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
            </div>
        </div>
        <div className="h-min-screen grid sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-5 justify-items-center pt-12 pb-8">
            <div className="">
                <BubbleCard count="7 ans" image="" info="XP en tant que développeur"></BubbleCard>
            </div>
            <div>
                <BubbleCard count="5 ans" image="" info="XP en tant qu'architecte"></BubbleCard>
            </div>
            <div>
                <BubbleCard count={10} image="" info="Sociétés qui m'ont fait confiance"></BubbleCard>
            </div>
            <div>
                <BubbleCard count={10} image="" info="Ceci est un test4"></BubbleCard>
            </div>
        </div>
    </section>;
}

export default ServiceSection;