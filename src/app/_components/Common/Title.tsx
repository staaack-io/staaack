import React from "react";

const Title = (props: any) => {
    return <div className="sticky text-black px-20 pt-20 flex gap-1 items-baseline">
        <h2 id={props.title} className="oswald font-semibold text-4xl md:text-3xl">{props.title}</h2>
        <h3 id={props.subtitle} className="oswald text-3xl md:text-2xl">{props.subtitle}</h3>
    </div>;
}

export default Title;