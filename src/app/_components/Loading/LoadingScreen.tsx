"use client"

import Image from "next/image";
import {motion, useAnimate} from "framer-motion";
import React, {useState} from "react";


const LoadingScreen = (props: any) => {
    const [endAnimation, setEndAnimmation] = useState(false)
    const [scope, animate] = useAnimate()
    const [open, set] = useState(true)
    return (!props.hideAnimation &&
        <div id="loader" className="absolute w-full h-screen z-50 bg-white">
            <div className="flex flex-col items-center justify-center h-full">
                <motion.div
                    initial={{scale: 0}}
                    onAnimationComplete={() => set(state => !state)}
                    animate={{rotate: 180, scale: 1}}
                    transition={{
                        type: "spring",
                        duration: 2
                    }}>
                    <Image id="loader-image" src="/img/logo.png" alt="Logo staaack" className="morph" height={80} width={80} ref={scope}/>
                </motion.div>

                <div>
                    <h1 id="loader-text" className="font-logo font-extrabold text-5xl md:text-6xl text-black">staaack</h1>
                </div>
            </div>
        </div>);
}

export default LoadingScreen;