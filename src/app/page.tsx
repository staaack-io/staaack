"use client"
import ContactSection from "@/app/_components/Contact/ContactSection";
import SkillsSection from "@/app/_components/Skills/SkillsSection";
import ServicesSection from "@/app/_components/Services/ServicesSection";
import HomeSection from "@/app/_components/Home/HomeSection";
import PartnersSection from "@/app/_components/Partners/PartnersSection";
import Navbar from "@/app/_components/Navbar/Navbar";
import AboutSection from "@/app/_components/About/AboutSection";
import Footer from "@/app/_components/Footer/Footer";
import {
    animate,
} from 'framer-motion';
import LoadingScreen from "@/app/_components/Loading/LoadingScreen";
import {useEffect, useRef, useState} from "react";

export default function Home() {
    const [animationIsFinished, setAnimationIsFinished] = useState(false)
    const [hideAnimation, setHideAnimation] = useState(false)
    const [splineIsLoaded, setSplineIsLoaded] = useState(false)

    useEffect(() => {
        if (animationIsFinished && splineIsLoaded) {
            //setHideAnimation(true)
            let animation = animate("#loader-text", {opacity: 0, y: -100}, {ease: "linear"})
                .then(() => {
                    animate("#loader-image", {opacity: 0, y: 100}, {ease: "linear"})
                        .then(() => {
                            animate("#loader", {
                                opacity: 1,
                                height: 0,
                                width: 0,
                                borderRadius: "100%",
                            }, {ease: "easeIn"})
                                .then(() => {
                                    animate("#loader", {
                                        opacity: 1,
                                        height: 0,
                                        width: 0,
                                        borderRadius: "100%",
                                    }, {ease: "easeIn"})
                                })
                        })
                })
        }
    }, [animationIsFinished, splineIsLoaded]);
    return (
        <>
            <div>
                <LoadingScreen outAnim={() => {
                    setAnimationIsFinished(true)

                }} hideAnimation={hideAnimation}/>
            </div>
            <>
                <Navbar showAnim={splineIsLoaded}/>
                <HomeSection onSlineAppLoad={() => {
                    setSplineIsLoaded(true)
                }} showAnim={splineIsLoaded}/>
                <AboutSection/>
                <ServicesSection/>
                <SkillsSection/>
                <PartnersSection/>
                <ContactSection/>
                <Footer/>
            </>
        </>
    )
}
