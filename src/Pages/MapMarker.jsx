import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap, CircleMarker, Popup } from "react-leaflet";
import L from 'leaflet';
import "./LanguageMap/Map.css";
import "leaflet/dist/leaflet.css";

// Your markers data here (simplified for now)
const markersData = {
  "2500BC": [
    {
      lat: 58.5106,
      lon: 42.3848,
      language: "Uralic",
      region: "Eastern Europe",
      notes: "Ancestor of the Finno-Ugric Languages",
    },
    // Add more...
  ],
};

const languageColorMap = {
  Latin: "blue",
  Italic: "blue",
  Celtic: "green",
  Germanic: "red",
  Iberian: "purple",
  Slavic: "yellow",
  Baltic: "orange",
  Lusitanian: "purple",
  Anatolian: "brown",
  Hellenic: "teal",
  Uralic: "turquoise",
  PaleoEuropean: "grey",
};

const MapMarkers = ({ year }) => {
  const map = useMap();
  const markers = markersData[year] || [];

  useEffect(() => {
    map.invalidateSize();
  }, [year, map]);

  return (
    <>
      {markers.map((marker, index) => {
        const color = languageColorMap[marker.language] || "gray";
        return (
          <CircleMarker
            key={index}
            center={[marker.lat, marker.lon]}
            pathOptions={{
              color: color,
              fillColor: color,
              fillOpacity: 0.5,
            }}
            radius={8}
          >
            <Popup>
              <strong>{marker.language}</strong>
              <br />
              {marker.region}
              <br />
              {marker.notes}
            </Popup>
          </CircleMarker>
        );
      })}
    </>
  );
};
