import LottieFile from "@/app/components/Common/LottieFile";
import React from "react";

const CardResume = (props: any) => {

    return <div className={props.className +
        " bg-white rounded-3xl border-[#54A4FF] border-2 p-2" +
        " flex flex-col items-center justify-center" +
        " aspect-square w-full sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]" +
        " overflow-hidden" +
        " hover:drop-shadow-lg  hover:transform-gpu duration-500"
    }>
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="w-14 h-14 sm:w-28 sm:h-28">
                <LottieFile beforeSrc="/lottie/resume-in.json" src="/lottie/resume.json"
                            className="w-10 h-10 cursor-pointer" onClick={() => {
                    window.open("https://staaack.io/cv-alexis-detrie-2024.pdf");
                }}></LottieFile>
            </div>
            <div className="pt-2 font-color-logo text-center">
                Download my resume
            </div>
        </div>
    </div>
}

export default CardResume;