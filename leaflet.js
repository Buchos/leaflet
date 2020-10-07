// eslint-disable-next-line unicorn/filename-case
import React from "react";
import "./leaflet.css";
import { Map, Marker, TileLayer } from "react-leaflet";
import Trees from "./data/arbustum.json";
import icondata from "./data/tree.png"

function Leaflet() {
    const icon = L.icon({
        iconUrl: icondata,
        iconAnchor: [10, 0],
        iconSize: [50, 50]
    })


    return (
        <Map center={[50.64, 5.57]} zoom={14}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {Trees.map((tree) => (
                <Marker
                    key={tree.arbotag}
                    icon={icon}
                    position={[tree.y_phi, tree.x_lambda]}
                />
            ))}
        </Map>
    );
}

export default Leaflet;