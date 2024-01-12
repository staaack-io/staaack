"use client"

import React, {useEffect} from "react";
import AboutMiniLayout from "@/app/components/Home/AboutMiniLayout";
import Tag from "@/app/components/Common/Tag";
import {motion} from "framer-motion";

const HomeSection = (props: any) => {
    const container = {
        hidden: { opacity: 1, scale: 1 },
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

    const itemStaaack = {
        hidden: { y: -20, opacity: 1 },
        visible: {
            x: 0,
            opacity: 1
        }
    }

    const itemP = {
        hidden: { x: -20, opacity: 1 },
        visible: {
            x: 0,
            opacity: 1
        }
    }

    useEffect(() => {
        if (props.launchStopAnimation) {
        }
    }, [props.launchStopAnimation]);


    return <section id="home" className="bg-[#EDEEF0] pt-28 flex justify-center items-center">
        <div className="grid gap-5 gap-y-12 z-0 grid-cols-12 default-size pt-24 lg:pt-0">
            <div className="col-span-12 lg:col-span-4 xl:col-span-5 flex flex-col justify-center gap-5 p-5 sm:p-0">
                <motion.div className="text-[4rem]" animate={itemStaaack.visible} initial={itemStaaack.hidden}>
                    <h1 className="absolute font-shadow-logo font-logo font-extrabold text-transparent inline-block bg-clip-text">staaack</h1>
                    <h1 className="absolute font-color-logo font-logo font-extrabold text-transparent inline-block bg-clip-text">staaack</h1>
                </motion.div>
                <motion.div animate={itemP.visible} initial={itemP.hidden}>
                    <h2 className="text-3xl text-black pt-24 font-sans">
                        I craft your tech landscape <br/>
                        from conception to execution
                    </h2>
                </motion.div>
                <motion.div className="flex gap-5 mt-2 flex-wrap" variants={container} initial="hidden" animate="visible">
                    <Tag borderColor="#FE05C288" tagName="fullstack"></Tag>
                    <Tag borderColor="#FF137888" tagName="architecture"></Tag>
                    <Tag borderColor="#C600B088" tagName="devops"></Tag>
                    <Tag borderColor="#6711C588" tagName="cloud"></Tag>
                    <Tag borderColor="#54A4FF88" tagName="training"></Tag>
                    <Tag borderColor="#29D9FF88" tagName="advice"></Tag>
                </motion.div>
            </div>
            <div className="col-span-12 lg:col-span-8 xl:col-span-7 w-full h-full p-5">
                <AboutMiniLayout/>
            </div>
        </div>
    </section>;
}

export default HomeSection;