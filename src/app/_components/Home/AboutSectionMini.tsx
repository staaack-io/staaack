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


    return <div className="flex flex-col justify-between items-center p-2">
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
                    <video controls width="250">
                        <source src="emoji.mov" type="video/mp4"/>
                    </video>
                    AI
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
                    Photo
                </CardPhoto>
            </motion.div>
            <motion.div className="md:order-9 hidden 2xl:block">
                <Card1x1>
                    1 ???
                </Card1x1>
            </motion.div>
            <motion.div className="md:order-10 hidden 2xl:block">
                <Card1x1>
                    2 ???
                </Card1x1>
            </motion.div>
            <motion.div className="md:order-11 hidden 2xl:block">
                <Card1x1>
                    3 ???
                </Card1x1>
            </motion.div>
            <motion.div className="md:order-11 hidden 2xl:block">
                <Card1x1>
                    4 ???
                </Card1x1>
            </motion.div>
        </motion.div>
    </div>
        ;
}

export default AboutSectionMini;