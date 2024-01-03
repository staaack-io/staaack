"use client"
import ContactSection from "@/app/_components/Contact/ContactSection";
import SkillsSection from "@/app/_components/Skills/SkillsSection";
import ServicesSection from "@/app/_components/Services/ServicesSection";
import HomeSection from "@/app/_components/Home/HomeSection";
import PartnersSection from "@/app/_components/Partners/PartnersSection";
import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";
import {useEffect, useState} from "react";

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
        <div className="flex flex-col bg-[#EDEEF0]">
            <div className="flex flex-row">
                <div className={endAnimationIsFinished ? "" : ""}>
                    <Navbar showAnim={splineIsLoaded}/>
                    <HomeSection onSlineAppLoad={() => {
                        setTimeout(function () {
                            setSplineIsLoaded(true)
                        }, 1000);
                    }}/>
                    <ServicesSection/>
                    <SkillsSection/>
                    <PartnersSection/>
                    <ContactSection/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
