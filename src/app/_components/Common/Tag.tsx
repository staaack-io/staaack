import React from "react";

const Tag = (props: any) => {
    return <div className={"font-sans rounded-3xl bg-white px-6 py-3 border-2 border-[" + props.borderColor + "] " +
        props.className}>
        {props.tagName}
    </div>
}

export default Tag;