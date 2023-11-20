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
    const [animationIsFinished, setAnimationIsFinished] = useState(false)
    const [splineIsLoaded, setSplineIsLoaded] = useState(false)

    useEffect(() => {
        if (animationIsFinished && splineIsLoaded) {

        }
    }, [animationIsFinished, splineIsLoaded]);
    return (
        <>
            <LoadingScreen outAnim={() => {
                setAnimationIsFinished(true)
            }} />
            <Navbar showAnim={splineIsLoaded}/>
            <HomeSection onSlineAppLoad={() => {
                setSplineIsLoaded(true)
            }}/>
            <AboutSection/>
            <ServicesSection/>
            <SkillsSection/>
            <PartnersSection/>
            <ContactSection/>
            <Footer/>
        </>
    )
}
