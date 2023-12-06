"use client"

import ButtonStylised from "@/app/_components/Home/ButtonStylised";
import Spline from "@splinetool/react-spline";
import {useEffect} from "react";
import SimpleCard from "../Common/SimpleCard";
import Card1x1 from "../Common/Card1x1";

const HomeSection = (props: any) => {
    useEffect(() => {
        if (props.launchStopAnimation){
        }
    }, [props.launchStopAnimation]);


    return <section id="home" className="p-8 pb-0 pt-28 h-screen">
        <div className="absolute top-0 left-0 bg-conic h-screen w-full -z-20"></div>
        <div className="absolute top-0 left-0 bg-linear-white h-screen w-full -z-10"></div>
        <div className="grid grid-cols-3 gap-3 z-0">
            <div>
                <div className="pb-36">
                    <h1 className="absolute font-shadow-logo font-logo font-extrabold text-5xl md:text-6xl text-transparent inline-block bg-clip-text">staaack</h1>
                    <h1 className="absolute font-color-logo font-logo font-extrabold text-5xl md:text-6xl text-transparent inline-block bg-clip-text">staaack</h1>
                </div>
                <h2 className="font-bold text-xl pt-6 md:text-3xl">
                    Hi ✋,
                    Im a (developer) and I can help you to (develop app)
                </h2>
                <div className="flex gap-3 pt-12">
                    <ButtonStylised text="Hire me !"/>
                    <ButtonStylised text="Download my resume"/>
                </div>
            </div>
            <div className="rounded-2xl bg-white overflow-hidden">
                <Spline onLoad={(e) => {props.onSlineAppLoad(true)}} scene="https://prod.spline.design/J2TLOi0lOEx8lQWc/scene.splinecode" />
            </div>
            <div className="grid grid-cols-2">
                <Card1x1>1</Card1x1>
                <Card1x1>2</Card1x1>
                <div className="col-span-2 rounded-2xl bg-white overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://placehold.co/500x600" height={500} width={400} alt="Photo Alexis Détrie"
                        className=""/>
                </div>

            </div>
        </div>
    </section>;
}

export default HomeSection;