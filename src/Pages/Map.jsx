import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import MapMarkers from "./MapMarker"; // Make sure this is correctly imported
import "./LanguageMap/Map.css";
import "leaflet/dist/leaflet.css";

// Utility component to fix map resizing issues
function MapFixer() {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);

  return null;
}

const years = ["2500BC", "2000BC", "1500BC", "1000BC", "800BC", "600BC", "400BC","200BC", "1AD", "100AD", "200AD", "300AD", "400AD", "500AD", "600AD", "700AD", "800AD"];

const LanguageMap = () => {
  const languageFamilies = [
    "Celtic",
    "Germanic",
    "Italic",
    "Baltic",
    "Slavic",
    "Anatolian",
    "Hellenic",
    "Lusitanian",
    "Uralic",
    "PaleoEuropean",
  ];

  const [yearIndex, setYearIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setYearIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex < years.length) {
            return nextIndex;
          } else {
            clearInterval(intervalRef.current);
            setPlaying(false);
            return prevIndex;
          }
        });
      }, 1500);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const currentYear = years[yearIndex];

  return (
    <>
      <h1>Languages of Europe over the Ages</h1>

      <div id="map-legend-container">
        <div id="legend" className="shared-box">
          <h2>Legend</h2>
          {languageFamilies.map((lang) => (
            <button key={lang} id={lang} data-language-family={lang}>
              {lang === "PaleoEuropean" ? "Paleo-European" : lang}
            </button>
          ))}
        </div>

        {/* Leaflet Map */}
        <div id="map">
          <MapContainer
            center={[51.505, 10]} // Central Europe
            zoom={4}
            scrollWheelZoom={true}
            style={{ height: "500px", width: "100%" }}
          >
            <MapFixer />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <MapMarkers year={currentYear} />
          </MapContainer>
        </div>
      </div>

      <div id="controls">
        <label htmlFor="timeSlider">
          Year: <span id="yearLabel">{currentYear}</span>
        </label>
        <input
          type="range"
          id="timeSlider"
          min="0"
          max={years.length - 1}
          value={yearIndex}
          step="1"
          onChange={(e) => setYearIndex(parseInt(e.target.value))}
        />
        <button id="playButton" onClick={() => setPlaying(!playing)}>
          {playing ? "Pause" : "Play"}
        </button>
        <button onClick={() => { setYearIndex(0); setPlaying(false); }}>
          Reset
        </button>
      </div>

      <div id="languageDetails" className="shared-box">
        Language Details
      </div>
    </>
  );
};

export default LanguageMap;
