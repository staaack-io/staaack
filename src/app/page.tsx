"use client"
import ContactSection from "@/app/_components/Contact/ContactSection";
import SkillsSection from "@/app/_components/Skills/SkillsSection";
import ServicesSection from "@/app/_components/Services/ServicesSection";
import HomeSection from "@/app/_components/Home/HomeSection";
import PartnersSection from "@/app/_components/Partners/PartnersSection";
import Navbar from "@/app/_components/Navbar/Navbar";
import AboutSection from "@/app/_components/About/AboutSection";
import Footer from "@/app/_components/Footer/Footer";
import LoadingScreen from "@/app/_components/Loading/LoadingScreen";
import {useEffect, useRef, useState} from "react";

export default function Home() {
    const [endAnimationIsFinished, setEndAnimationIsFinished] = useState(false)
    const [loadingScreenAnimationIsFinished, setLoadingScreenLoadingScreenAnimationIsFinished] = useState(false)
    const [splineIsLoaded, setSplineIsLoaded] = useState(false)
    const [loadingScreenLaunchStopAnimation, setloadingScreenLaunchStopAnimation] = useState(false)

    useEffect(() => {
        if (loadingScreenAnimationIsFinished && splineIsLoaded) {
            setloadingScreenLaunchStopAnimation(true)
        }
    }, [loadingScreenAnimationIsFinished, splineIsLoaded]);

    return (
        <div className="flex flex-row border-2">
            <div className={endAnimationIsFinished ? "" : ""}>
                <Navbar showAnim={splineIsLoaded}/>
                <HomeSection onSlineAppLoad={() => {
                    setTimeout(function () {
                        setSplineIsLoaded(true)
                    }, 1000);
                }}/>
                <AboutSection/>
                <ServicesSection/>
                <SkillsSection/>
                <PartnersSection/>
                <ContactSection/>
                <Footer/>
            </div>
        </div>
    )
}
