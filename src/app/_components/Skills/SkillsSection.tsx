import React from "react";
// @ts-ignore
import skills from "public/data/skills.json";
import Hexagon from "@/app/_components/Skills/hexagon/Hexagon";
import Image from "next/image";
import Title from "@/app/_components/Common/Title";


const SkillsSection = () => {
    return <section className="p-8 flex flex-col">
        <Title title="Skills"/>
        <div className="">
            <ul className="hex-grid__list">
                {
                    skills.map((skill: any, index: any) => <Hexagon key={index} color={skill.color}>
                        <Image src={"/img/logo/" + skill.img} height={100} width={100} alt={""}></Image>
                    </Hexagon>)
                }
            </ul>
        </div>
    </section>;
}

export default SkillsSection;