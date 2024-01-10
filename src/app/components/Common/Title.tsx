import React from "react";

const Title = (props: any) => {
    return <div className="sticky text-black px-20 pt-15 flex flex-col items-baseline md:flex-row gap-1">
        <div id={String(props.title).toLowerCase()} className="font-semibold text-4xl md:text-3xl">{props.title}</div>
        <div id={props.subtitle} className="text-2xl md:text-2xl md:pl-3 text-gray-600">{props.subtitle}</div>
    </div>;
}

export default Title;