import {Controls, Player} from "@lottiefiles/react-lottie-player";

'user client'
import React, {useEffect, useRef, useState} from "react";
require("@lottiefiles/lottie-player");
const LordIcons = (props: any) => {

    const lordIconRef = useRef(null);

    useEffect(() => {

    }, []);

    // @ts-ignore
    return <Player
        // autoplay
        // loop
        src="/lottie/tests.json"
        style={{ height: '100px', width: '100px' }}
    >
        {/*<Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />*/}
    </Player>
}

export default LordIcons;