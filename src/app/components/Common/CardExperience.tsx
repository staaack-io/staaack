import React, {useState} from "react";
import {motion} from "framer-motion";

const ExperienceDetails = (props: any) => {
    return props.hidden &&
        <motion.div
            initial={{scale: 0}}
            animate={{rotate: 360, scale: 1}}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            hidden={false}
            className="flex flex-col flex-wrap items-baseline h-full p-2">
            <div className="flex justify-start items-baseline gap-1">
                <motion.span initial={{opacity: 0, scale: 0}}
                             animate={{opacity: 100, scale: 1}}
                             transition={{
                                 type: "spring",
                                 stiffness: 260,
                                 damping: 20
                             }} className="text-5xl text-white items-end">{props.text1}</motion.span>
                <motion.span initial={{opacity: 0, scale: 0}}
                             animate={{opacity: 100, scale: 1}}
                             transition={{
                                 type: "spring",
                                 stiffness: 260,
                                 damping: 20
                             }} className="text-2xl text-white">{props.text2}</motion.span>
            </div>
            <motion.span initial={{opacity: 0, scale: 0}}
                         animate={{opacity: 100, scale: 1}}
                         transition={{
                             type: "spring",
                             stiffness: 260,
                             damping: 20
                         }} className="p-1 text-base sm:text-2xl col-span-2">{props.text3}</motion.span>
        </motion.div>
}
const CardExperience = (props: any) => {

    const [colors, setColors] = useState(['bg-cs-yellow-light', 'bg-cs-pink-light', 'bg-cs-blue-light'])
    const [color, setColor] = useState(colors[0])
    const [i, setI] = useState(1)

    const onClickChangeXp = () => {
        let nbValues = colors.length;
        if (i == nbValues) {
            setColor(colors[0]);
            setI(1);
        } else if (i - 1 < nbValues) {
            setColor(colors[i]);
            setI(i + 1);
        }

    }


    return <div className={
        " " + color +
        " rounded-3xl p-2" +
        " flex flex-col items-center justify-center" +
        " aspect-square h-full w-full sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]" +
        " hover:drop-shadow-lg hover:transform-gpu duration-500 " +
        props.className
    } onClick={onClickChangeXp}>
        <motion.div
            className="flex justify-center items-center w-full"
            onClick={onClickChangeXp}
            initial={{scale: 0}}
            animate={{rotate: 360, scale: 1}}
            transition={{
                delay: .5,
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
        >{
            props.experiences.map((experience: any, index: any) => {
                return <ExperienceDetails key={index} hidden={index == i - 1} text1={experience.text1}
                                          text2={experience.text2} text3={experience.text3}/>
            })
        }

        </motion.div>
    </div>
}

export default CardExperience;