import React from "react";

const Title = (props: any) => {
    return <div className="md:pl-36 pb-24 font-bold">
        <span className="text-5xl">{props.title}</span>
        <span className="hidden md: inline pl-10 text-xl text-gray-600">{props.subtitle}</span>

    </div>;
}

export default Title;