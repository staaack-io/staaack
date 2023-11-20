"use client"

import Image from "next/image";
import {animate, AnimatePresence, motion, stagger, useAnimate, useAnimation} from "framer-motion";
import React, {useEffect, useState} from "react";


const LoadingScreen = (props: any) => {
    const [startAnimation, setStartAnimmation] = useState(true)
    const [endAnimation, setEndAnimmation] = useState(false)
    const [hideLoader, setHideLoader] = useState(false)
    const [open, set] = useState(true)
    const controlLogo = useAnimation()
    const controlTitle = useAnimation()
    const controlLoader = useAnimation()
    const [animLogoStarted, setAnimLogoStarted] = useState(false)

    const title = ["s", "t", "a", "a", "a", "c", "k"]

    const variantLogo = {
        hidden: {opacity: 0},
        visible: {
            rotate: 360,
            opacity: 1,
            scale: 1,
            transition: {
                delay: .5
            }
        },
        loop: {
            rotate: [0, 360, 0],
            scale: [1, 2, 1],
            transition: {
                duration: 1,
                delay: 3,
                repeat: Infinity,
                repeatDelay: 3
            }
        },
        end: {
            opacity: 0,
            scale: [0],
        }
    };
    const variantLoader = {
        end: {
            opacity: 0,
            scale: 0,
        },
    };
    const variantParentTitle = {
        hidden: {
            opacity: 1, scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0,
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        },
        end: {
            opacity: 0,
            scale: 0,
            y: 20,
        },
    };
    const variantTitle = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
        }
    };

    useEffect(() => {
        if(props.launchStopAnimation){
            props.endAnimationIsFinished()
            let promise = new Promise(async (resolve, reject) => {
                console.log("hide logo + title")
                await controlTitle.start("end");
                await controlLogo.start("end");
                await controlLoader.start("end");
                setHideLoader(true);

            });
        }
    }, [props.launchStopAnimation]);

    useEffect(() => {
        if (startAnimation) {
            let promise = new Promise(async (resolve, reject) => {
                await controlLogo.start("visible");
                await controlTitle.start("visible");
                console.log("execute onStartApplicationFinished")
                props.onStartApplicationFinished();
                await controlLogo.start("loop");

            });
            setStartAnimmation(false);
        }
    }, []);
    return (!hideLoader &&
        <motion.div id="loader" variants={variantLoader} animate={controlLoader} className="absolute w-full h-screen z-50 bg-white">
            <div className="flex flex-col items-center justify-center h-full">
                <motion.div variants={variantLogo} animate={controlLogo} initial="hidden">
                    <Image id="loader-image" src="/img/logo.png" alt="Logo staaack" height={80}
                           width={80}/>
                </motion.div>

                <motion.div
                    className="flex font-logo font-extrabold text-5xl md:text-6xl text-black "
                    variants={variantParentTitle}
                    initial="hidden"
                    animate={controlTitle}
                >
                    {title.map((item, i) => {
                        return <motion.span key={i} variants={variantTitle}>{item}</motion.span>
                    })}
                </motion.div>
            </div>
        </motion.div>
    );

}

export default LoadingScreen;