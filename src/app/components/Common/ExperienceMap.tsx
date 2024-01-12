import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";

const ExperienceMap = (props: any) => {

    return <div className={props.className +
        " bg-white rounded-3xl" +
        " flex flex-col items-center justify-center" +
        " h-[180px] w-full sm:h-[265px] md:h-[215px] lg:h-[190px] lg:w-[402px] xl:h-[210px] xl:w-[440px] 2xl:w-[395px] 2xl:h-[190px]" +
        " hover:drop-shadow-lg hover:transform-gpu duration-500"
    }>
        <div className="flex gap-2 items-center justify-center w-full h-full p-4">
            <div className="w-1/2 flex flex-col">
                <div className="flex items-end">
                    <span className="text-5xl font-color-logo">13</span>
                    <span className="p-2 text-2xl font-color-logo"> years</span>

                </div>
                <span className="text-2xl "> of XP</span>
            </div>
            <div className="flex flex-col w-1/2 ">
                <div className="flex flex-col">
                    <div className="flex items-end">
                        <span className="text-3xl  font-color-logo">6</span>
                        <span className="p-2 text-xl  font-color-logo"> years</span>

                    </div>
                    <span className="text-md -mt-2"> as Java IT Solution Architect</span>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <div className="flex items-end">
                            <span className="text-3xl  font-color-logo">7</span>
                            <span className="p-2 text-xl font-color-logo"> years</span>

                        </div>
                        <span className="text-md -mt-2">as fullstack developer</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ExperienceMap;