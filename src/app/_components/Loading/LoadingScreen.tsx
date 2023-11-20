"use client"

import Image from "next/image";
import {AnimatePresence, motion, stagger, useAnimate, useAnimation} from "framer-motion";
import React, {useEffect, useState} from "react";


const LoadingScreen = (props: any) => {
    const [endAnimation, setEndAnimmation] = useState(false)
    const [open, set] = useState(true)
    const controlLogo = useAnimation()
    const [animLogoStarted, setAnimLogoStarted] = useState(false)

    const title = ["s", "t", "a", "a", "a", "c", "k"]

    const variantLogo = {
        initial: {scale: 0},
        animate: {rotate: 360, scale: 1},
        loop: {
            rotate: [0, 360, 0],
            scale: [1, 2, 1],
            transition: {
                duration: 1,
                delay: 5,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay:3
            }
        },
        transition: {
            delay: 1,
            type: "spring",
            duration: 2
        }
    };
    const variantParentTitle = {
        hidden: {opacity: 0, scale: 0.2},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: .8,
                when: "beforeChildren",
                staggerChildren: 0.1,
                opacity: {duration: 0.1},
                scale: {
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                    restSpeed: 0.6
                }
            }
        }

    };
    const variantTitle = {
        hidden: {y: 20, opacity: 0},
        visible: {y: 0, opacity: 1}
    };
    useEffect(() => {
        if (!animLogoStarted) {
            controlLogo.start("animate").then(() => {
                controlLogo.start("loop")
            });
            setAnimLogoStarted(true)
        }
    }, []);
    return (!props.hideAnimation &&
        <div id="loader" className="absolute w-full h-screen z-50 bg-white">
            <div
                className="flex flex-col items-center justify-center h-full">
                <motion.div
                    variants={variantLogo}
                    initial="initial"
                    animate={controlLogo}>
                    <Image id="loader-image" src="/img/logo.png" alt="Logo staaack" height={80}
                           width={80}/>
                </motion.div>

                <motion.ul initial="hidden" animate="visible" variants={variantParentTitle}
                           className="font-logo font-extrabold text-5xl md:text-6xl text-black">
                    <AnimatePresence>
                        {title.map((item, i) => {
                            return <motion.span key={i} variants={variantTitle}>{item}</motion.span>
                        })}
                    </AnimatePresence>
                </motion.ul>
            </div>
        </div>
    );

}

export default LoadingScreen;