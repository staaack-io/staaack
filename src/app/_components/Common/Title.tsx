import React from "react";

const Title = (props: any) => {
    return <div className="sticky text-black px-20 pt-20 flex flex-col items-baseline md:flex-row gap-1">
        <div id={props.title} className="oswald font-semibold text-4xl md:text-3xl">{props.title}</div>
        <div id={props.subtitle} className="oswald text-3xl md:text-2xl md:pl-3">{props.subtitle}</div>
    </div>;
}

export default Title;