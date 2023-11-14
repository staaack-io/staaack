"use client"

import Image from "next/image";
import ButtonStylised from "@/app/_components/Home/ButtonStylised";
import Spline from "@splinetool/react-spline";

const HomeSection = (props: any) => {
    return <section className="p-8 pb-0 min-h-screen flex flex-col lg:flex-row  items-center">
            <div className="md:ml-8 order-2 lg:order-1 lg:w-1/2 mb-24 h-full">
                <div className="pb-36">
                    <h1 className="absolute font-shadow-logo font-logo font-extrabold text-5xl md:text-6xl text-transparent inline-block bg-clip-text">staaack</h1>
                    <h1 className="absolute font-color-logo font-logo font-extrabold text-5xl md:text-6xl text-transparent inline-block bg-clip-text">staaack</h1>
                </div>
                <h2 className="font-bold text-xl pt-6 md:text-3xl">
                    Hi ✋,
                    Im a (developer) and I can help you to (develop app)
                </h2>
                <div className="flex gap-3 pt-12">
                    <ButtonStylised text="Hire me !"/>
                    <ButtonStylised text="Download my resume"/>
                </div>
            </div>
            <div className="order-1 lg:order-2 lg:w-1/2 flex items-center justify-center h-screen lg:h-full">
                <Spline scene="https://prod.spline.design/ttPadaMLh4iul2yS/scene.splinecode" />
            </div>
    </section>;
}

export default HomeSection;