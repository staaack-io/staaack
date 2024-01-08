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
import ExperienceMap from "@/app/_components/Common/ExperienceMap";

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
                <Card1x1>
                    XP
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
                <Card1x1>
                    <div className="w-full h-full p-2 flex flex-col items-center justify-center opacity-30">
                        <Image src={"/img/cards/bg-ai.png"} alt="" height={100} width={100} className="rounded-full"/>
                        <div className='wrap'>
                            <button>such ripple</button>
                        </div>
                    </div>
                    <span className="text-center opacity-100">Discuss with my chat bot</span>
                </Card1x1>
            </motion.div>
            <motion.div className="md:order-7 2xl:order-8">
                <Card1x1>
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

            <motion.div className="col-span-2">
                <ExperienceMap />
            </motion.div>
            <motion.div className="md:order-11 hidden 2xl:block">
                <Card1x1>
                    3 ???
                </Card1x1>
            </motion.div>
            <motion.div className="md:order-12 hidden 2xl:block">
                <Card1x1>
                    4 ???
                </Card1x1>
            </motion.div>
        </motion.div>
    </>;
}

export default AboutSectionMini;