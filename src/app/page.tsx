import Image from 'next/image'
import ContactSection from "@/app/_components/ContactSection";
import SkillsSection from "@/app/_components/SkillsSection";
import ServicesSection from "@/app/_components/ServicesSection";
import HomeSection from "@/app/_components/HomeSection";
import PartnersSection from "@/app/_components/PartnersSection";
import Navbar from "@/app/_components/Navbar";
import AboutSection from "@/app/_components/AboutSection";

export default function Home() {
  return (
        <div className="">
          <Navbar className=""></Navbar>
          <HomeSection className=""></HomeSection>
          <AboutSection className=""></AboutSection>
          {/*<ServicesSection></ServicesSection>*/}
          <SkillsSection></SkillsSection>
          <PartnersSection></PartnersSection>
          <ContactSection></ContactSection>
      </div>
  )
}
