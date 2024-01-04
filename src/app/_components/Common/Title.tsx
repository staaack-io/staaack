import React from "react";

const Title = (props: any) => {
    return <div className="text-black px-20 pt-20">
        <h2 id={props.title} className="typo-staaack text-4xl md:text-3xl">{props.title}</h2>
    </div>;
}

export default Title;