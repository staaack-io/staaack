"use client"
import React from "react";
import Card1x1 from "@/app/_components/Common/Card1x1";
import CardPhoto from "@/app/_components/Common/CardPhoto";
import CardMap from "@/app/_components/Common/CardMap";

const AboutSectionMini = () => {
    return <section className="flex flex-col justify-center items-center p-8 bg-gray-100 rounded-2xl">
        <div className="grid gap-5 grid-cols-2">
            <Card1x1 className="">
                Schedule a call
            </Card1x1>
            <Card1x1 className="">
                Resume
            </Card1x1>
            <Card1x1 className="">
                XP
            </Card1x1>
            <Card1x1 className="">
                Technologies
            </Card1x1>
            <CardMap className="col-span-2">
                Map
            </CardMap>
            <Card1x1 className="">
                AI
            </Card1x1>
            <Card1x1 className="">
                Logo
            </Card1x1>
            <CardPhoto className="col-span-2 row-span-2">
                Photo
            </CardPhoto>
            <Card1x1 className="">
                1 ???
            </Card1x1>
            <Card1x1 className="">
                2 ???
            </Card1x1>
            <Card1x1 className="">
                3 ???
            </Card1x1>
        </div>
    </section>;
}

export default AboutSectionMini;