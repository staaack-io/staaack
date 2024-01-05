import Image from "next/image";

const CardSchedule = (props: any) => {

    // @ts-ignore
    return <div className={props.className +
        " bg-white rounded-2xl" +
        " flex flex-col items-center justify-center" +
        " aspect-square w-[full] sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]" +
        " hover:drop-shadow-lg hover:scale-102 hover:transform-gpu duration-500" +
        " overflow-hidden"
    }>
        <div className="relative flex justify-center items-center w-full h-full -mt-2">
            Schedule a call
        </div>
        <div className="flex justify-end items-end w-full h-full ml-10 -mb-5">
            <Image src="img/conference.svg" alt={""} height={100} width={100} className=""></Image>
        </div>
    </div>
}

export default CardSchedule;