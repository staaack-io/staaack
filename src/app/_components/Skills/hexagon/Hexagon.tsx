import React from "react";

const Hexagon = (props: any) => {
    return <li
        className="hex-grid__item hover:scale-125 hover:z-10 transition duration-700 cursor-pointer ease-out">
        <div className="hex-grid__content">
            {props.children}
        </div>
    </li>;
}

export default Hexagon;