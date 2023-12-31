"use client"
import React, {useState} from "react";
// @ts-ignore
import skills from "public/data/skills.json";
import Hexagon from "@/app/_components/Skills/hexagon/Hexagon";
import Image from "next/image";
import Title from "@/app/_components/Common/Title";
import SkillChoice from "@/app/_components/Skills/hexagon/SkillChoice";


const SkillsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    return <section className="-mt-16 flex flex-col justify-center items-center">
        <div className="flex items-center mb-10 w-full">
            <Title title="Skills" subtitle="All technologies I have to chance to work"/>
        </div>
        <div className="default-size">

            <SkillChoice name={(category: any) => {
                setSelectedCategory(category);
            }}/>
            <ul className="hex-grid__list">
            {
                        skills.map((skill: any, index: any) =>
                            <Hexagon key={index} color={skill.color} category={skill.category}
                                     selectedSkillCategory={selectedCategory}>
                                <Image src={"/img/logo/" + skill.img} height={100} width={100}
                                       alt={skill.title}></Image>
                            </Hexagon>)
                    }
                </ul>
        </div>
    </section>;
}

export default SkillsSection;