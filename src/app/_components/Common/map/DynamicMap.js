"use client"
import {useEffect} from 'react';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const {MapContainer} = ReactLeaflet;

const Map = ({children, className, width, height, ...rest}) => {
    let mapClassName = "h-full w-full z-0";

    if (className) {
        mapClassName = `${mapClassName} ${className}`;
    }

    useEffect(() => {
        (async function init() {
            delete Leaflet.Icon.Default.prototype._getIconUrl;
            Leaflet.Icon.Default.mergeOptions({
                iconRetinaUrl: './img/logo.svg',
                iconUrl: './img/logo.svg',
                iconSize: [50, 50],
                iconAnchor: [25, -5],
                popupAnchor: [0, 0],
                tooltipAnchor: [0, 0],
                shadowSize: [0, 0]
            });
        })();
    }, []);

    return (
        <MapContainer className={mapClassName} {...rest}>
            {children(ReactLeaflet, Leaflet)}
        </MapContainer>
    )
}

export default Map;
