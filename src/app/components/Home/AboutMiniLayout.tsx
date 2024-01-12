"use client"
import React, {useEffect, useState} from "react";
import Card1x1 from "@/app/components/Common/Card1x1";
import CardAI from "@/app/components/Common/CardAI";
import CardMe from "@/app/components/Common/CardMe";
import CardMap from "@/app/components/Common/CardMap";
import CardTechnologies from "@/app/components/Common/CardTechnologies";
import CardSchedule from "@/app/components/Common/CardSchedule";
import Image from "next/image";
import CardResume from "@/app/components/Common/CardResume";
import {motion} from "framer-motion";
import Card2x1 from "@/app/components/Common/CardImages";
import Flag from "@/app/components/Common/Flag";
import CardSocialNetwork from "@/app/components/Common/CardSocialNetwork";
import CardExperience from "@/app/components/Common/CardExperience";

const experiences = [{
    text1: '13',
    text2: ' years',
    text3: 'of XP',
}, {
    text1: '6',
    text2: ' years',
    text3: ' of XP as IT Solution Architect',
}, {
    text1: '7',
    text2: ' years',
    text3: ' of XP as fullstack java developer',
}]
const Layout2AboutMini = (props: any) => {
    return <>
        <motion.div className="w-full grid gap-5 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 justify-end"
                    initial={container.hidden}
                    animate={container.visible}>
            <motion.div className="">
                <CardSchedule>
                    Schedule a call
                </CardSchedule>
            </motion.div>
            <motion.div className="">
                <CardResume>
                    Resume
                </CardResume>
            </motion.div>
            <motion.div className="col-span-2" initial="hidden"
                        animate="visible">
                <CardMap/>
            </motion.div>
            <motion.div className="">
                <Flag></Flag>
            </motion.div>
            <motion.div className="">
                <CardExperience experiences={experiences}/>
            </motion.div>
            <motion.div className="col-span-2">
                <Card2x1/>
            </motion.div>
            <motion.div className="">
                <CardTechnologies/>
            </motion.div>
            <motion.div className="group relative">
                <div
                    className="absolute bg-opacity-0 z-30 group-hover:bg-opacity-30 h-full bg-black aspect-square w-full sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px] rounded-3xl flex items-center justify-center transition">
                    <span
                        className="p-2 rounded-full m-2 text-center bg-opacity-0 opacity-0 group-hover:bg-opacity-100 group-hover:opacity-100 bg-white">This service is not unavailable</span>
                </div>
                <CardAI
                    className="absolute border-2 border-[#FEAE07] aspect-square w-full sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]" />
            </motion.div>
            <motion.div className="">
                <Card1x1 className=" border-2 border-[#6711C5]">
                    <Image src={"/img/logo.png"} alt={"Logo staaack"} height={45} width={45} className=""></Image>
                </Card1x1>
            </motion.div>
            <motion.div className="">
                <CardSocialNetwork />
            </motion.div>
            <motion.div className="col-span-2 row-span-2" initial="hidden" animate="visible">
                <CardMe/>
            </motion.div>
        </motion.div>
    </>;
}
const Layout3AboutMini = (props: any) => {
    return <>
        <motion.div className="w-full grid gap-5 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 justify-end"
                    initial={container.hidden}
                    animate={container.visible}>
            <motion.div className="">
                <CardSchedule>
                    Schedule a call
                </CardSchedule>
            </motion.div>
            <motion.div className="col-span-2" initial="hidden"
                        animate="visible">
                <CardMap/>
            </motion.div>
            <motion.div className="col-span-2">
                <Card2x1/>
            </motion.div>
            <motion.div className="">
                <CardResume>
                    Resume
                </CardResume>
            </motion.div>
            <motion.div className="">
                <Flag></Flag>
            </motion.div>
            <motion.div className="">
                <CardTechnologies>

                </CardTechnologies>
            </motion.div>
            <motion.div className="group relative">
                <div
                    className="absolute bg-opacity-0 z-30 group-hover:bg-opacity-30 h-full bg-black aspect-square w-full sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px] rounded-3xl flex items-center justify-center transition">
                    <span
                        className="p-2 rounded-full m-2 text-center bg-opacity-0 opacity-0 group-hover:bg-opacity-100 group-hover:opacity-100 bg-white">This service is not unavailable</span>
                </div>
                <Card1x1
                    className="absolute border-2 border-[#FEAE07] aspect-square w-full sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]">
                    <span className="absolute text-center opacity-20">Discuss with my AI bot</span>
                    <div className="flex items-center justify-center w-full h-full p-2 hover:scale-150 transition">
                        <div className='opacity-20 flex justify-center items-center h-full'>
                            <div id="ripple-mini">
                                <Image src={"/img/cards/bg-ai.png"} alt="" height={100} width={100}
                                       className="rounded-full"/>
                            </div>
                        </div>
                    </div>
                </Card1x1>
            </motion.div>
            <motion.div className="">
                <CardExperience experiences={experiences}/>
            </motion.div>
            <motion.div className="col-span-2 row-span-2" initial="hidden"
                        animate="visible">
                <CardMe/>
            </motion.div>
            <motion.div className="">
                <Card1x1 className=" border-2 border-[#6711C5]">
                    <Image src={"/img/logo.png"} alt={"Logo staaack"} height={45} width={45} className=""></Image>
                </Card1x1>
            </motion.div>

            <motion.div className="md:order-11 hidden 2xl:block">
                <CardSocialNetwork />
            </motion.div>
        </motion.div>
    </>;
}

const container = {
    hidden: {opacity: 1, scale: 1},
    visible: {
        opacity: 1,
        scale: 1,
        delay: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: {y: 20, opacity: 1},
    visible: {
        y: 0,
        opacity: 1
    }
}
const Layout4AboutMini = (props: any) => {
    return <motion.div
        initial="hidden"
        animate="visible">
        <motion.div className="w-full grid gap-5 grid-cols-4 justify-end"
                    variants={container}>
            <motion.div className="" variants={item}>
                <CardSchedule>
                    Schedule a call
                </CardSchedule>
            </motion.div>
            <motion.div className="" variants={item}>
                <CardResume>
                    Resume
                </CardResume>
            </motion.div>
            <motion.div className="col-span-2" variants={item}>
                <CardMap/>
            </motion.div>
            <motion.div className="" variants={item}>
                <CardSocialNetwork />
            </motion.div>
            <motion.div className="col-span-2 row-span-2"
                        variants={item}>
                <CardMe/>
            </motion.div>
            <motion.div className="" variants={item}>
                <Flag></Flag>
            </motion.div>
            <motion.div className="" variants={item}>
                <CardExperience experiences={experiences}/>
            </motion.div>
            <motion.div className="" variants={item}>
                <CardTechnologies>

                </CardTechnologies>
            </motion.div>
            <motion.div className="col-span-2" variants={item}>
                <Card2x1/>
            </motion.div>
            <motion.div className="group relative" variants={item}>
                <div
                    className="absolute bg-opacity-0 z-30 group-hover:bg-opacity-30 h-full bg-black aspect-square w-full sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px] rounded-3xl flex items-center justify-center transition">
                    <span
                        className="p-2 rounded-full m-2 text-center bg-opacity-0 opacity-0 group-hover:bg-opacity-100 group-hover:opacity-100 bg-white">This service is not unavailable</span>
                </div>
                <Card1x1
                    className="absolute border-2 border-[#FEAE07] aspect-square w-full sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]">
                    <span className="absolute text-center opacity-20">Discuss with my AI bot</span>
                    <div className="flex items-center justify-center w-full h-full p-2 hover:scale-150 transition">
                        <div className='opacity-20 flex justify-center items-center h-full'>
                            <div id="ripple-mini">
                                <Image src={"/img/cards/bg-ai.png"} alt="" height={100} width={100}
                                       className="rounded-full"/>
                            </div>
                        </div>
                    </div>
                </Card1x1>
            </motion.div>
            <motion.div className="" variants={item}>
                <Card1x1 className=" border-2 border-[#6711C5]">
                    <Image src={"/img/logo.png"} alt={"Logo staaack"} height={45} width={45} className=""></Image>
                </Card1x1>
            </motion.div>

        </motion.div>
    </motion.div>;
}
const AboutMiniLayout = () => {

    const [mapLayout, setMapLayout] = useState(new Map())
    const [currentLayout, setCurrentLayout] = useState()

    useEffect(() => {
        if (mapLayout.size == 0) {
            let layout = new Map();
            layout.set(2, <Layout2AboutMini/>)
            layout.set(3, <Layout3AboutMini/>)
            layout.set(4, <Layout4AboutMini/>)
            setMapLayout(layout)
        }
    }, []);

    return <>
        <div className="sm:hidden lg:hidden xl:hidden 2xl:hidden">
            <Layout2AboutMini/>
        </div>
        <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
            <Layout2AboutMini/>
        </div>
        <div className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
            <Layout3AboutMini/>
        </div>
        <div className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">
            <Layout3AboutMini/>
        </div>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
            <Layout3AboutMini/>
        </div>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
            <Layout4AboutMini/>
        </div>
    </>;
}

export default AboutMiniLayout;