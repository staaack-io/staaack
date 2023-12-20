"use client"

import React, {useEffect} from "react";
import AboutSectionMini from "@/app/_components/About/AboutSectionMini";

const HomeSection = (props: any) => {
    useEffect(() => {
        if (props.launchStopAnimation) {
        }
    }, [props.launchStopAnimation]);


    return <section id="home" className=" pt-32 p-8 flex justify-center items-center">
        <div className="bg-hero absolute h-full w-full"></div>
        <div className="grid gap-5 gap-y-12 z-0 grid-cols-12 default-size">
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
                    <div className="rounded-3xl bg-gray-100 px-6 py-3">fullstack</div>
                    <div className="rounded-3xl bg-gray-100 px-6 py-3">architecture</div>
                    <div className="rounded-3xl bg-gray-100 px-6 py-3">devops</div>
                    <div className="rounded-3xl bg-gray-100 px-6 py-3">cloud</div>
                    <div className="rounded-3xl bg-gray-100 px-6 py-3">training</div>
                    <div className="rounded-3xl bg-gray-100 px-6 py-3">advice</div>
                </div>
            </div>
            {/*<div className="col-span-12 lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-5">*/}
            {/*    <Card1x1 className="bg-test">*/}
            {/*        Schedule a call*/}
            {/*    </Card1x1>*/}
            {/*    <Card1x1>*/}
            {/*        <Image className="" src={"/img/document.svg"} alt={"cv"} height={65} width={65}></Image>*/}
            {/*        My resume*/}
            {/*    </Card1x1>*/}
            {/*    <Card1x1>*/}
            {/*        12 years of XP*/}
            {/*    </Card1x1>*/}
            {/*    <Card1x1 className="lg:hidden">*/}
            {/*        Interview me with my avatar.AI*/}
            {/*    </Card1x1>*/}

            {/*</div>*/}
            <div className="col-span-12 lg:col-span-8 xl:col-span-7  w-full h-full">
                {/*<div className="float-right hidden lg:block">*/}
                {/*    <Card1x1FullRounded>2</Card1x1FullRounded>*/}
                {/*</div>*/}
                <AboutSectionMini/>
                {/*<img src="https://placehold.co/500x600" height={500} width={400} alt="Photo Alexis Détrie"*/}
                {/*     className="w-full h-full aspect-auto float-left"/>*/}
                {/*<Spline onLoad={(e) => {*/}
                {/*    props.onSlineAppLoad(true)*/}
                {/*}} scene="https://prod.spline.design/J2TLOi0lOEx8lQWc/scene.splinecode"/>*/}
            </div>
        </div>
    </section>;
}

export default HomeSection;