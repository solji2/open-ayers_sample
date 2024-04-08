import React, { useEffect } from "react";
import "./AccessibleMap.css";

import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import * as turf from "@turf/turf";

const AccessibleMap = () => {
  useEffect(() => {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: "map",
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }, []);

  return (
    <Container maxWidth="xl">
      <Box id="map" class="map" sx={{ height: "400px" }}></Box>
    </Container>
  );
};

export default AccessibleMap;
