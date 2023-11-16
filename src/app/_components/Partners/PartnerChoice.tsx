import React from "react";

const PartnerChoice = (props: any) => {
    return <div className="flex w-full p-8 justify-center items-center z-50 md:hidden">
        <div className="dropdown">
            <input type="checkbox" id="dropdown" />

                <label className="dropdown__face" htmlFor="dropdown">
                    <div className="dropdown__text">All</div>

                    <div className="dropdown__arrow"></div>
                </label>

                <ul className="dropdown__items">
                    <li className="p-5" onClick={event => props.onSelect.call}>All</li>
                    <li className="p-5">Big four</li>
                    <li className="p-5">Administrations</li>
                    <li className="p-5">IT services companies</li>
                    <li className="p-5">Startups</li>
                    <li className="p-5">Banks</li>
                    <li className="p-5">Other</li>
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