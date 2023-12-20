"use client"
import React from "react";
import Card1x1 from "@/app/_components/Common/Card1x1";
import CardPhoto from "@/app/_components/Common/CardPhoto";
import CardMap from "@/app/_components/Common/CardMap";

const AboutSectionMini = () => {
    return <div className="flex flex-col justify-between items-center p-2">
        <div className="w-full grid gap-5 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 justify-end">
            <Card1x1 className="md:order-1">
                Schedule a call
            </Card1x1>
            <Card1x1 className="md:order-2 2xl:order-4">
                Resume
            </Card1x1>
            <Card1x1 className="md:order-3 2xl:order-7">
                XP
            </Card1x1>
            <Card1x1 className="md:order-4 2xl:order-2">
                Technologies
            </Card1x1>
            <CardMap className="col-span-2 md:order-5 2xl:order-3">
                Map
            </CardMap>
            <Card1x1 className="md:order-8 2xl:order-6">
                AI
            </Card1x1>
            <Card1x1 className="md:order-7 2xl:order-8">
                Logo
            </Card1x1>
            <CardPhoto className="col-span-2 row-span-2 md:order-6 2xl:order-5">
                Photo
            </CardPhoto>
            <Card1x1 className="md:order-9 hidden 2xl:block">
                1 ???
            </Card1x1>
            <Card1x1 className="md:order-10 hidden 2xl:block">
                2 ???
            </Card1x1>
            <Card1x1 className="md:order-11 hidden 2xl:block">
                3 ???
            </Card1x1>
            <Card1x1 className="md:order-11 hidden 2xl:block">
                4 ???
            </Card1x1>
        </div>
    </div>;
}

export default AboutSectionMini;