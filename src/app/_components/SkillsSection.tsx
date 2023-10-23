import React from "react";
import './grid-hexagon.scss';
import skills from '/data/skills.json';


const SkillsSection = () => {
    return <section className="p-8 flex flex-col">
        <div className="text-center font-bold text-3xl text-black p-10">
            Skills
        </div>
        <div className="bg-purple-100">
            <ul className="hex-grid__list">
                <li className="hex-grid__item">
                    <div className="hex-grid__content">
                        1
                    </div>
                </li>
                <li className="hex-grid__item">
                    <div className="hex-grid__content">
                        {skills.java}
                    </div>
                </li>
                <li className="hex-grid__item">
                    <div className="hex-grid__content">
                        3
                    </div>
                </li>
                <li className="hex-grid__item">
                    <div className="hex-grid__content">
                        4
                    </div>
                </li>
                <li className="hex-grid__item">
                    <div className="hex-grid__content">
                        5
                    </div>
                </li>
                <li className="hex-grid__item">
                    <div className="hex-grid__content">
                        6
                    </div>
                </li>
                <li className="hex-grid__item">
                    <div className="hex-grid__content">
                        7
                    </div>
                </li>
                <li className="hex-grid__item">
                    <div className="hex-grid__content">
                        8
                    </div>
                </li>
                <li className="hex-grid__item">
                    <div className="hex-grid__content">
                        9
                    </div>
                </li>
                <li className="hex-grid__item">
                    <div className="hex-grid__content">
                        10
                    </div>
                </li>
            </ul>
        </div>
    </section>;
}

export default SkillsSection;