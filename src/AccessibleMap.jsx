import React, { useEffect, useRef, useState } from "react";
import "./AccessibleMap.css";

import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import Point from "ol/geom/Point.js";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature.js";

import { Circle, Fill, Style } from "ol/style.js";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import * as turf from "@turf/turf";

//import { point } from "@turf/turf";

const AccessibleMap = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const myPoint = new Point([127.105338, 37.574223]);
  const point = new Point([0, 0]);
  const pointGeometry = point.getCoordinates();
  debugger;

  const pointStyle = new Style({
    image: new Circle({
      radius: 10,
      fill: new Fill({
        color: "rgba(243, 6, 6, 0.935)",
      }),
    }),
  });

  const pointVectorSrc = new VectorSource({
    features: [
      new Feature({
        geometry: point, //Feature객체에 Point 객체 할당
        style: pointStyle,
      }),
    ],
  });

  const pointVectorLayer = new VectorLayer({
    source: pointVectorSrc,
  });
  debugger;

  debugger;
  useEffect(() => {
    const tilLayer = new TileLayer({
      source: new OSM(),
    });

    const map = new Map({
      layers: [tilLayer],
      target: mapRef.current,
      view: new View({
        center: [0, 0],
        zoom: 22,
      }),
    });
    setMap(map);
    debugger;
    map.addLayer(pointVectorLayer);
  }, []);
  return (
    <Container maxWidth="xl">
      <Box ref={mapRef} sx={{ height: "400px" }}></Box>
    </Container>
  );
};

export default AccessibleMap;
