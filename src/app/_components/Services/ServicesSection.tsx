import ServiceCard from "@/app/_components/Services/ServiceCard";
import React from "react";
import Title from "@/app/_components/Common/Title";
import Image from "next/image";
import HorizontalScrollCarousel from "@/app/_components/Common/HorizontalScrollCarousel";

const ServiceSection = () => {
    return <section className="flex flex-col ">

        <div className="pt-10 w-full">
            <HorizontalScrollCarousel></HorizontalScrollCarousel>
        </div>
    </section>;
}

export default ServiceSection;