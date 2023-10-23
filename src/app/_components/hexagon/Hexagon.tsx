import React from "react";

const Hexagon = (props) => {
    return <li key={props.key} className="hex-grid__item">
        <div className="hex-grid__content" >
            {props.children}
        </div>
    </li>;
}

export default Hexagon;