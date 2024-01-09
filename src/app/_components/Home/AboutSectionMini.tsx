"use client"
import React, {useEffect} from "react";
import Card1x1 from "@/app/_components/Common/Card1x1";
import CardPhoto from "@/app/_components/Common/CardPhoto";
import CardMap from "@/app/_components/Common/CardMap";
import CardTechnologies from "@/app/_components/Common/CardTechnologies";
import CardSchedule from "@/app/_components/Common/CardSchedule";
import Image from "next/image";
import CardResume from "@/app/_components/Common/CardResume";
import {motion, useAnimation} from "framer-motion";
import Card2x1 from "@/app/_components/Common/ExperienceMap";
import LottieFile from "@/app/_components/Common/LottieFile";
import Flag from "@/app/_components/Common/Flag";
import CardSocialNetwork from "@/app/_components/Common/CardSocialNetwork";
import CardExperience from "@/app/_components/Common/CardExperience";

const AboutSectionMini = () => {

    useEffect(() => {

    }, []);

    const container = {
        hidden: {opacity: 0, scale: 1.7},
        visible: {
            opacity: 1,
            scale: 1,
        }
    };

    const items = {
        hidden: {opacity: 0, scale: 1.2},
        visible: {
            opacity: 1,
            scale: 1,
        }
    };

    const experiences = [{
        text1: '13',
        text2: ' years',
        text3: 'of XP',
    },{
        text1: '6',
        text2: ' years',
        text3: ' of XP as IT Solution Architect',
    },{
        text1: '7',
        text2: ' years',
        text3: ' of XP as fullstack java developer',
    }]

    return <>
        <motion.div className="w-full grid gap-5 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 justify-end"
                    initial={container.hidden}
                    animate={container.visible}>
            <motion.div className="md:order-1">
                <CardSchedule>
                    Schedule a call
                </CardSchedule>
            </motion.div>
            <motion.div className="md:order-2 2xl:order-4">
                <CardResume>
                    Resume
                </CardResume>
            </motion.div>
            <motion.div className="md:order-3 2xl:order-7">
                <Card1x1 className="p-0 bg-white rounded-3xl">
                    <Flag></Flag>
                </Card1x1>
            </motion.div>
            <motion.div className="md:order-4 2xl:order-2">
                <CardTechnologies>

                </CardTechnologies>
            </motion.div>
            <motion.div className="col-span-2 md:order-5 2xl:order-3" initial="hidden"
                        animate="visible">
                <CardMap/>
            </motion.div>
            <motion.div className="md:order-8 2xl:order-6">
                <Card1x1 className=" border-2 border-[#FEAE07]">
                    <div className="w-full h-full p-2">
                        <div className='wrap opacity-20'>
                            <div id="ripple-mini">
                                <Image src={"/img/cards/bg-ai.png"} alt="" height={100} width={100}
                                       className="rounded-full"/>
                            </div>
                        </div>
                    </div>
                    <span className="text-center opacity-20 -mt-5">Discuss with AI bot</span>
                </Card1x1>
            </motion.div>
            <motion.div className="md:order-7 2xl:order-8">
                <Card1x1 className=" border-2 border-[#6711C5]">
                    <Image src={"/img/logo.png"} alt={"Logo staaack"} height={45} width={45} className=""></Image>
                </Card1x1>
            </motion.div>
            <motion.div className="col-span-2 row-span-2 md:order-6 2xl:order-5" initial="hidden"
                        animate="visible">
                <CardPhoto>
                    <div className="flex rounded-3xl w-30 h-30 bg-black">
                        <Image src="/img/emoj.gif" alt="" height={100} width={100} className="rounded-full"/>
                    </div>
                </CardPhoto>
            </motion.div>

            <motion.div className="col-span-2 md:order-10 2xl:block">
                <Card2x1/>
            </motion.div>
            <motion.div className="md:order-11 hidden 2xl:block">
                <CardSocialNetwork>
                    <div className="flex gap-2 h-full w-full">
                        <Image src="/img/logo/github.svg" alt="" height={100} width={100} className="invert"/>
                        <Image src="/img/logo/linkedin.svg" alt="" height={100} width={100} className="invert inverse-img"/>
                    </div>
                </CardSocialNetwork>
            </motion.div>
            <motion.div className="md:order-12 hidden 2xl:block">
                <CardExperience experiences={experiences} />
            </motion.div>
        </motion.div>
    </>;
}

export default AboutSectionMini;