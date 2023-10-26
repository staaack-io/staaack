import ContactSection from "@/app/_components/Contact/ContactSection";
import SkillsSection from "@/app/_components/Skills/SkillsSection";
import ServicesSection from "@/app/_components/Services/ServicesSection";
import HomeSection from "@/app/_components/Home/HomeSection";
import PartnersSection from "@/app/_components/Partners/PartnersSection";
import Navbar from "@/app/_components/Navbar/Navbar";
import AboutSection from "@/app/_components/About/AboutSection";
import Footer from "@/app/_components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Navbar/>
            <HomeSection/>
            <AboutSection/>
            <ServicesSection/>
            <SkillsSection/>
            <PartnersSection/>
            <ContactSection/>
            <Footer/>
        </>
    )
}
