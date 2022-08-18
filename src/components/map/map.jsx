import React, { useEffect } from "react";
import "./map.css";
import {
  MapContainer,
  Circle,
  Popup,
  TileLayer,
} from "react-leaflet";
import axios from "axios";
import { useState } from "react";
import MapBar from "../mapBar/mapBar";

const blueOption1 = { color: "green", fillColor: "green" };
const blueOption2 = { color: "red", fillColor: "red" };
const blueOption3 = { color: "blue", fillColor: "blue" };

const BASE_URL = process.env.REACT_PUBLIC_BASE_URL || "http://localhost:8000/reigon";

const MapView = () => {
  const position = [25, -325];
  const zoom = 2;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BASE_URL);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  var colorOpt = {};

  return (
    <div>
      <div className="title">
        Map Application
      </div>

      <div className="map-container">
        <MapContainer center={position} zoom={zoom}>
          <TileLayer
            url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            attribution={
              '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }
          />
          {data.map((singleData) => {
            if (singleData.data > 5000) {
              colorOpt = blueOption1;
            } else if (singleData.data < 5000 && singleData.data > 1000) {
              colorOpt = blueOption2;
            } else {
              colorOpt = blueOption3;
            }

            const str = `${singleData.name}` + " " + `${singleData.data}`;
            return (
              <div>
                <Circle
                  key={singleData._id}
                  center={[singleData.lat, singleData.long]}
                  radius={10000 * Math.sqrt(singleData.data)}
                  fillOpacity={0.5}
                  pathOptions={colorOpt}
                >
                  <Popup>
                    <div>
                      {singleData.reigon}---{singleData.data}
                    </div>
                  </Popup>
                </Circle>
              </div>
            );
          })}
        </MapContainer>
      </div>
      <MapBar data={data} />
    </div>
  );
};

export default MapView;
