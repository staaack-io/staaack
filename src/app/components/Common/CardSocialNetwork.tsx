import React from "react";
import Image from "next/image";

const CardSocialNetwork = (props: any) => {
    return <div className={
        " bg-black rounded-3xl p-2" +
        " flex flex-col items-center justify-center" +
        " aspect-square w-full sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]" +
        " hover:drop-shadow-lg hover:transform-gpu duration-500 " +
        props.className
    }>
        <div className="flex justify-items-center items-center gap-2">
            <Image src="/img/logo/github.svg" alt="github logo" height={80} width={80} className="invert cursor-pointer" onClick={() => {
                window.open("https://github.com/adetrie");
            }}/>
            <Image src="/img/logo/linkedin.svg" alt="linkedin logo" height={80} width={80}
                   className="invert inverse-img cursor-pointer" onClick={() => {
                window.open("https://www.linkedin.com/in/detriealexis/");
            }}/>
        </div>

    </div>
}

export default CardSocialNetwork;