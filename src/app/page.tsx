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
      <div className="min-h-screen">
        <div className="">
          <Navbar className="p-8"></Navbar>
          <HomeSection className="p-8 h-screen"></HomeSection>
          <AboutSection className="p-8 bg-gradient-primary "></AboutSection>
          <ServicesSection></ServicesSection>
          <SkillsSection></SkillsSection>
          <PartnersSection></PartnersSection>
          <ContactSection></ContactSection>
        </div>
      </div>
  )
}
