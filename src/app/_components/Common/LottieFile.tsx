import React, {useEffect, useRef, useState} from "react";

const LottieFile = (props: any) => {

    const ref = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') import('@lottiefiles/lottie-player')
    }, []);

    return <lottie-player
        ref={ref}
        autoplay
        mode="normal"
        src={props.src}
        className="h-full w-full"
    ></lottie-player>
}

export default LottieFile;