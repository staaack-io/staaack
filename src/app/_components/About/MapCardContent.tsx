import React from "react";
import dynamic from 'next/dynamic'

const OpenStreetMap = dynamic(() => import('../Common/map/OpenStreetMap'), {
    ssr: false,
})
const MapCardContent = (props: any) => {

    return <div className="text-4xl justify-center bg-transparent rounded-3xl h-72 md:h-full w-full drop-shadow-md hover:drop-shadow-lg hover:scale-102 hover:transform-gpu duration-500">
        <OpenStreetMap />
    </div>;
}

export default MapCardContent;