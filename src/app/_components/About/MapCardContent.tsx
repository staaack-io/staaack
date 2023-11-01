import React from "react";
import dynamic from 'next/dynamic'

const OpenStreetMap = dynamic(() => import('../Common/map/OpenStreetMap'), {
    ssr: false,
})
const MapCardContent = (props: any) => {

    return <div className="text-4xl justify-center bg-transparent rounded-3xl h-72 md:h-full w-full">
        <OpenStreetMap />
    </div>;
}

export default MapCardContent;