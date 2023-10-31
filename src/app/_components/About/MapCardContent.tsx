import React from "react";
// import OpenStreetMap from "@/app/_components/Common/map/OpenStreetMap";
const DEFAULT_CENTER = [49.5985502, 6.1263061]
const ZOOM = 17
import dynamic from 'next/dynamic'
// import OpenStreetMap from '../component/OpenStreetMap'
const OpenStreetMap = dynamic(() => import('../Common/map/OpenStreetMap'), {
    ssr: false,
})
const MapCardContent = (props: any) => {

    return <div className="text-4xl justify-center bg-transparent rounded-3xl shadow-2xl h-72 md:h-full w-full">
        <OpenStreetMap />
        {/* eslint-disable-next-line react/jsx-no-undef */}
        {/*<Map className="w-full h-full rounded-3xl shadow-2xl" width="800" height="400" center={DEFAULT_CENTER}*/}
        {/*       zoom={ZOOM}>*/}
        {/*    {// @ts-ignore*/}
        {/*        ({TileLayer, Marker, Popup}) => (*/}
        {/*            <>*/}
        {/*                <TileLayer*/}
        {/*                    url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"*/}
        {/*                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"*/}
        {/*                />*/}
        {/*                <Marker position={DEFAULT_CENTER}>*/}
        {/*                    <Popup>*/}
        {/*                        <div className="text-xl">*/}
        {/*                            20 rue de Hollerich <br/>*/}
        {/*                            1740 Luxembourg <br/>*/}
        {/*                        </div>*/}
        {/*                    </Popup>*/}
        {/*                </Marker>*/}
        {/*            </>*/}
        {/*        )}*/}
        {/*</Map>*/}
    </div>;
}

export default MapCardContent;