import Image from 'next/image'
import ContactSection from "@/app/_components/ContactSection";
import SkillsSection from "@/app/_components/SkillsSection";
import ServicesSection from "@/app/_components/ServicesSection";
import HomeSection from "@/app/_components/HomeSection";
import PartnersSection from "@/app/_components/PartnersSection";
import Navbar from "@/app/_components/Navbar";

export default function Home() {
  return (
      <div className="min-h-screen p-8">
        <div className="">
          <Navbar></Navbar>
          <HomeSection></HomeSection>
          <ServicesSection></ServicesSection>
          <SkillsSection></SkillsSection>
          <PartnersSection></PartnersSection>
          <ContactSection></ContactSection>
        </div>
      </div>
  )
}
