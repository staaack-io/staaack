import React, {useEffect, useState} from "react";

const PartnerChoice = (props: { name: any }) => {

    const [name, setName] = useState("All");
    const [checked, setChecked] = useState(false);

    useEffect(() => {
    }, []);

    const handleChange = () => {
        setChecked(!checked);
    };

    const onClick = (category: any) => {
        props.name(category);
        setChecked(false);
        setName(category)
    };

    return <div className="flex w-full p-8 justify-center items-center z-30">
        <div className="dropdown z-30">
            <input type="checkbox" id="dropdown" checked={checked} onChange={handleChange}/>

            <label className="dropdown__face" htmlFor="dropdown">
                <div className="dropdown__text">{name}</div>

                <div className="dropdown__arrow"></div>
            </label>

            <ul className="dropdown__items">
                <li className="p-5" onClick={() => onClick("All")}>All</li>
                <li className="p-5" onClick={() => onClick("Big four")}>Big four</li>
                <li className="p-5" onClick={() => onClick("Administrations")}>Administrations</li>
                <li className="p-5" onClick={() => onClick("IT services companies")}>IT services companies</li>
                <li className="p-5" onClick={() => onClick("Startup")}>Startup</li>
                <li className="p-5" onClick={() => onClick("Banks")}>Banks</li>
                <li className="p-5" onClick={() => onClick("Others")}>Other</li>
            </ul>
        </div>

        <svg>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                               result="goo"/>
                <feBlend in="SourceGraphic" in2="goo"/>
            </filter>
        </svg>
    </div>;
}

export default PartnerChoice;