"use client"

import React, {useEffect} from "react";
import AboutMini from "@/app/_components/Home/AboutMini";
import AboutMiniLayout from "@/app/_components/Home/AboutMiniLayout";

const HomeSection = (props: any) => {
    useEffect(() => {
        if (props.launchStopAnimation) {
        }
    }, [props.launchStopAnimation]);


    return <section id="home" className="bg-[#EDEEF0] pt-32 p-8 flex justify-center items-center">
        <div className="absolute h-full w-full"></div>
        <div className="grid gap-5 gap-y-12 z-0 grid-cols-12 default-size pt-24 lg:pt-0">
            <div className="col-span-12 lg:col-span-4 xl:col-span-5 flex flex-col justify-center gap-5">
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
                <div className="flex gap-5 mt-2 flex-wrap">
                    <div className="rounded-3xl bg-white px-6 py-3 border-2 border-[#FE05C288]">fullstack</div>
                    <div className="rounded-3xl bg-white px-6 py-3 border-2 border-[#FF137888]">architecture</div>
                    <div className="rounded-3xl bg-white px-6 py-3 border-2 border-[#C600B088]">devops</div>
                    <div className="rounded-3xl bg-white px-6 py-3 border-2 border-[#6711C588]">cloud</div>
                    <div className="rounded-3xl bg-white px-6 py-3 border-2 border-[#54A4FF88]">training</div>
                    <div className="rounded-3xl bg-white px-6 py-3 border-2 border-[#29D9FF88]">advice</div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-8 xl:col-span-7  w-full h-full">
                <AboutMiniLayout/>
            </div>
        </div>
    </section>;
}

export default HomeSection;