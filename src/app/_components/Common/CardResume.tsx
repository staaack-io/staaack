import Image from "next/image";
import LottieFile from "@/app/_components/Common/LottieFile";
import React from "react";

const CardResume = (props: any) => {

    return <div className={props.className +
        " bg-white rounded-2xl" +
        " flex flex-col items-center justify-center" +
        " aspect-square w-[full] sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]" +
        " overflow-hidden" +
        " hover:drop-shadow-lg  hover:transform-gpu duration-500"
    }>
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="w-28 h-28">
                <LottieFile beforeSrc="lottie/resume-in.json" src="lottie/resume.json"
                            className="w-20 h-20"></LottieFile>
            </div>
            <div className="pt-2 font-color-logo font-bold">
                Download my resume

            </div>
        </div>
    </div>
}

export default CardResume;