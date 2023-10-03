"use client"

import Image from "next/image";

const HomeSection = () => {
    return <section className="h-screen">
        <div className="flex flex-col lg:flex-row h-full items-center">
            <div className="order-2 lg:order-1 lg:w-1/2">
                <h1>staaack</h1>
                <h2>Bienvenue, je suis Alexis. Je t'aide à mettre en place ta staaack de a à z</h2>
                <div className="flex gap-3">
                    <button>1</button>
                    <button>2</button>
                </div>
            </div>
            <div className="order-1 lg:order-2 lg:w-1/2 flex items-center justify-center h-full">
                <Image src="/logo.svg" alt="logo" width={50} height={50} className="h-full w-full"></Image>
            </div>
        </div>
    </section>;
}

export default HomeSection;