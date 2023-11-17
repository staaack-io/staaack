import ContactSection from "@/app/_components/Contact/ContactSection";
import SkillsSection from "@/app/_components/Skills/SkillsSection";
import ServicesSection from "@/app/_components/Services/ServicesSection";
import HomeSection from "@/app/_components/Home/HomeSection";
import PartnersSection from "@/app/_components/Partners/PartnersSection";
import Navbar from "@/app/_components/Navbar/Navbar";
import AboutSection from "@/app/_components/About/AboutSection";
import Footer from "@/app/_components/Footer/Footer";
import {motion} from 'framer-motion';
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="absolute w-full h-screen z-50 bg-white">
                <div className="flex items-center justify-center h-full">
                    <motion.div
                        initial={{scale: 0}}
                        animate={{rotate: 180, scale: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}>
                        <Image src="/img/logo.png" alt="Logo staaack" className="morph" height={40} width={27}/>
                    </motion.div>
                </div>
            </div>

            {/*<Navbar/>*/}
            {/*<HomeSection/>*/}
            {/*<AboutSection/>*/}
            {/*<ServicesSection/>*/}
            {/*<SkillsSection/>*/}
            {/*<PartnersSection/>*/}
            {/*<ContactSection/>*/}
            {/*<Footer/>*/}
        </>
    )
}
