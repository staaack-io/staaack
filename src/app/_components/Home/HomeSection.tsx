"use client"

import ButtonStylised from "@/app/_components/Home/ButtonStylised";
import Spline from "@splinetool/react-spline";
import React, {useEffect} from "react";
import SimpleCard from "../Common/SimpleCard";
import Card1x1 from "../Common/Card1x1";
import Image from "next/image";
import Card1x1FullRounded from "@/app/_components/Common/Card1x1FullRounded";

const HomeSection = (props: any) => {
    useEffect(() => {
        if (props.launchStopAnimation) {
        }
    }, [props.launchStopAnimation]);


    return <section id="home" className="p-8 pt-32 mb-28 flex justify-center items-center">
        <div className="grid gap-3 z-0 grid-cols-12 w-10/12">
            <div className="flex flex-col justify-center col-span-5">
                <div className="text-[4rem]">
                    <h1 className="absolute font-shadow-logo font-logo font-extrabold text-transparent inline-block bg-clip-text">staaack</h1>
                    <h1 className="absolute font-color-logo font-logo font-extrabold text-transparent inline-block bg-clip-text">staaack</h1>
                </div>
                <div>
                    <h2 className="font-bold text-3xl text-black pt-24">
                        I craft your tech landscape <br/>
                        from conception to execution
                    </h2>
                </div>
                <div className="flex gap-2 mt-2 flex-wrap">
                    <div className="rounded-3xl bg-gray-100 px-6 py-3">fullstack</div>
                    <div className="rounded-3xl bg-gray-100 px-6 py-3">architecture</div>
                    <div className="rounded-3xl bg-gray-100 px-6 py-3">devops</div>
                    <div className="rounded-3xl bg-gray-100 px-6 py-3">cloud</div>
                    <div className="rounded-3xl bg-gray-100 px-6 py-3">training</div>
                    <div className="rounded-3xl bg-gray-100 px-6 py-3">advice</div>
                </div>
            </div>
            <div className="col-span-2 flex flex-col justify-center items-center gap-2">
                <Card1x1>
                    Schedule a call
                </Card1x1>
                <Card1x1>
                    <Image className="" src={"/img/document.svg"} alt={"cv"} height={65} width={65}></Image>
                    My resume
                </Card1x1>
                <Card1x1>
                    12 years of XP
                </Card1x1>
            </div>
            <div className="rounded-2xl bg-gray-200 col-span-5">
                <div className="float-right">
                    <Card1x1FullRounded>2</Card1x1FullRounded>
                </div>
                <div className="rounded-2xl bg-gray-100 w-full h-full">
                    {/*<Spline onLoad={(e) => {*/}
                    {/*    props.onSlineAppLoad(true)*/}
                    {/*}} scene="https://prod.spline.design/J2TLOi0lOEx8lQWc/scene.splinecode"/>*/}
                </div>

            </div>
        </div>
    </section>;
}

export default HomeSection;