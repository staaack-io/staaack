'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
import HomeSection from '@/app/components/Home/HomeSection';
import ServicesSection from '@/app/components/Services/ServicesSection';
import SkillsSection from '@/app/components/Skills/SkillsSection';
import PartnersSection from '@/app/components/Partners/PartnersSection';
import ContactSection from '@/app/components/Contact/ContactSection';
import Footer from '@/app/components/Footer/Footer';

type HomeProps = {
  params: { locale: string };
};
export default function Home({ params: { locale } }: HomeProps) {

  return (
    <div className='flex flex-col bg-[#EDEEF0]'>
      <div className='flex flex-row'>
        <div className="w-full">
          <Navbar />
          <HomeSection />
          <ServicesSection />
          <SkillsSection />
          <PartnersSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
