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
import {useEffect, useState} from "react";

export default function Home() {
    const [endAnimationIsFinished, setEndAnimationIsFinished] = useState(false)
    const [loadingScreenAnimationIsFinished, setLoadingScreenLoadingScreenAnimationIsFinished] = useState(false)
    const [splineIsLoaded, setSplineIsLoaded] = useState(false)
    const [loadingScreenLaunchStopAnimation, setloadingScreenLaunchStopAnimation] = useState(false)

    useEffect(() => {
        console.log("modif sur loadingScreenAnimationIsFinished, splineIsLoaded", loadingScreenAnimationIsFinished, splineIsLoaded)
        if (loadingScreenAnimationIsFinished && splineIsLoaded) {
            console.log("spline ok + fin premier load des anims")
            setloadingScreenLaunchStopAnimation(true)
        }
    }, [loadingScreenAnimationIsFinished, splineIsLoaded]);
    return (
        <>
            <LoadingScreen onStartApplicationFinished={() => {
                console.log("fin de premier load des anims")
                setLoadingScreenLoadingScreenAnimationIsFinished(true)
            }}
                           launchStopAnimation={loadingScreenLaunchStopAnimation}
                            endAnimationIsFinished={()=> {
                                setEndAnimationIsFinished(true)
                            }}/>
            <div className={endAnimationIsFinished ? "" : "hidden"}>
                <Navbar showAnim={splineIsLoaded}/>
                <HomeSection onSlineAppLoad={() => {
                    setTimeout(function () {
                        console.log("patiente 2secs")
                        setSplineIsLoaded(true)
                    }, 2000);
                }}/>
                <AboutSection/>
                <ServicesSection/>
                <SkillsSection/>
                <PartnersSection/>
                <ContactSection/>
                <Footer/>
            </div>
        </>
    )
}
