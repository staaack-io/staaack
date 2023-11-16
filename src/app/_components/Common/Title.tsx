import React from "react";
import Link from "next/link";

const Title = (props: any) => {
    return <div className="text-black pb-24 font-bold md:text-center md:p-10">
        <h2 id={props.title} className="text-4xl md:text-3xl">{props.title}</h2>
    </div>;
}

export default Title;