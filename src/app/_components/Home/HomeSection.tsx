"use client"

import Image from "next/image";
import ButtonHire from "@/app/_components/Home/ButtonHire";

const HomeSection = (props: any) => {
    return <section className="p-8 pb-0 h-screen">
        <div className="flex flex-col lg:flex-row pt-24 h-[calc(100%-3em)] items-center">
            <div className="md:ml-8 order-2 lg:order-1 lg:w-1/2 mb-24">
                <h1 className=" font-logo font-extrabold text-5xl md:text-6xl text-transparent bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block bg-clip-text">staaack</h1>
                <h2 className="font-bold text-xl pt-6 md:text-3xl">
                    Hi ✋,
                    Im a (developer) and I can help you to (develop app)
                </h2>
                <div className="flex gap-3 pt-12">
                    <ButtonHire text="Hire me !"/>
                    <ButtonHire text="Download my resume"/>
                </div>
            </div>
            <div className="order-1 lg:order-2 lg:w-1/2 flex items-center justify-center h-full">
                <Image src="/img/logo.svg" alt="logo" width={50} height={50} className="h-1/2 w-1/2"></Image>
            </div>
        </div>
    </section>;
}

export default HomeSection;