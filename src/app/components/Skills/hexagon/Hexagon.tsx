import React from "react";
import {motion} from "framer-motion";

const Hexagon = (props: any) => {
    return <>
        {(props.selectedSkillCategory == props.category || props.selectedSkillCategory == "All") &&
            <li
                className="hex-grid__item hover:scale-125 hover:z-10 transition duration-700 cursor-pointer ease-out">
                <motion.div className="hex-grid__content" animate={{x: 10}}>
                    {props.children}
                </motion.div>
            </li>}
    </>
}

export default Hexagon;
