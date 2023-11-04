import React, {useEffect, useRef} from 'react'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Leaflet from "leaflet";

const OpenStreetMap = () => {
    const DEFAULT_CENTER = [49.5985502, 6.1263061]
    const ZOOM = 17
    const mapRef = useRef()

    useEffect(() => {
        (async function init() {
            delete Leaflet.Icon.Default.prototype._getIconUrl;
            Leaflet.Icon.Default.mergeOptions({
                iconRetinaUrl: '/img/logo.png',
                iconUrl: '/img/logo.png',
                iconSize: [50, 50],
                iconAnchor: [25, -5],
                popupAnchor: [0, 0],
                tooltipAnchor: [0, 0],
                shadowSize: [0, 0]
            });
        })();
    }, []);

    return <MapContainer center={DEFAULT_CENTER} zoom={ZOOM} ref={mapRef}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <TileLayer
            url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;https://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={DEFAULT_CENTER}>
            <Popup>
                <div className="text-xl">
                    20 rue de Hollerich <br/>
                    1740 Luxembourg <br/>
                </div>
            </Popup>
        </Marker>
    </MapContainer>
}

export default OpenStreetMap