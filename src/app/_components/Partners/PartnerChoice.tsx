import React, {useEffect, useState} from "react";

const PartnerChoice = (props: { name: any }) => {

    const [name, setName] = useState("All");
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        console.log(checked)
    }, []);

    const handleChange = () => {
        console.log(checked)
        setChecked(!checked);
    };

    return <div className="flex w-full p-8 justify-center items-center z-50 ">
        <div className="dropdown">
            <input type="checkbox" id="dropdown" checked={checked} onChange={handleChange}/>

                <label className="dropdown__face" htmlFor="dropdown">
                    <div className="dropdown__text">All</div>

                    <div className="dropdown__arrow"></div>
                </label>

                <ul className="dropdown__items">
                    <li className="p-5" onClick={() => {props.name("All"); setChecked(false)}}>All</li>
                    <li className="p-5" onClick={() => {props.name("Big four"); setChecked(false)}}>Big four</li>
                    <li className="p-5" onClick={() => {props.name("Administrations"); setChecked(false)}}>Administrations</li>
                    <li className="p-5" onClick={() => {props.name("IT services companies"); setChecked(false)}}>IT services companies</li>
                    <li className="p-5" onClick={() => {props.name("Startup"); setChecked(false)}}>Startup</li>
                    <li className="p-5" onClick={() => {props.name("Banks"); setChecked(false)}}>Banks</li>
                    <li className="p-5" onClick={() => {props.name("Others"); setChecked(false)}}>Other</li>
                </ul>
        </div>

        <svg>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
            </filter>
        </svg>
    </div>;
}

export default PartnerChoice;