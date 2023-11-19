"use client"

import Image from "next/image";
import {motion, useAnimate} from "framer-motion";
import React, {useState} from "react";
import {useTrail, a} from '@react-spring/web'

const Trail = (props: any) => {
    let lastFrame = -1;
    const items = React.Children.toArray(props.children)
    const [open, set] = useState(true)
    const trail = useTrail(items.length, {
        config: {mass: 5, tension: 2000, friction: 200},
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: {opacity: 0, x: 20, height: 0},
        onStart: result => {
        },
        onChange: result => {
            if (result.value.opacity == 1) {
                props.onFinish()
            }
        }
    })
    return (
        <div>
            {trail.map(({height, ...style}, index) => (
                <a.div key={index} className="trailsText" style={style}>
                    <a.div style={{height}}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}

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
                    <Trail open={open} onFinish={() => {
                        props.outAnim();
                    }}>
                        <h1 id="loader-text" className="font-logo font-extrabold text-5xl md:text-6xl text-black">staaack</h1>
                    </Trail>
                </div>
            </div>
        </div>);
}

export default LoadingScreen;