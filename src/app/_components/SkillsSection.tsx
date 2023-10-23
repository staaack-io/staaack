import React from "react";
import skills from "public/data/skills.json";
import Hexagon from "@/app/_components/hexagon/Hexagon";
import Image from "next/image";


const SkillsSection = () => {
    return <section className="p-8 flex flex-col">
        <div className="text-center font-bold text-3xl text-black p-10">
            Skills
        </div>
        <div className="">
            <ul className="hex-grid__list">
                {
                    skills.map((skill, index) => {
                        return <Hexagon key={index} color={skill.color}>
                            <Image src={"/img/logo/" + skill.title + ".svg"} height={10} width={10}></Image>
                        </Hexagon>;
                    })
                }
            </ul>
        </div>
    </section>;
}

export default SkillsSection;