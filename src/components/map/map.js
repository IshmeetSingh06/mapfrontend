import React from "react";
import "./map.css"
import { MapContainer, Circle, TileLayer } from "react-leaflet";

const MapView = () => {
  const position = [35, -40];
  const zoom = 2;
  return (
    <div>
      <div className="map-container">
        <MapContainer center={position} zoom={zoom}>
          <TileLayer
            url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            attribution={
              '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }
          />
        </MapContainer>
      </div>

      <div className="map-charts">Hello World</div>
    </div>
  );
};

export default MapView;
