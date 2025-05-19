import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import MapMarkers from "./MapMarker";
import "./LanguageMap/Map.css";
import "leaflet/dist/leaflet.css";

// Utility to fix map sizing issues
function MapFixer() {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);

  return null;
}

const LanguageMap = () => {
  const [selectedYear, setSelectedYear] = useState("2500BC");

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

  const handleSliderChange = (e) => {
const yearMap = {
  1: "2500BC",
  2: "2000BC",
  3: "1500BC",
  4: "1000BC",
  5: "800BC",
  6: "600BC",
  7: "400BC",
  8: "200BC",
  9: "1AD",
  10: "100AD",
  11: "200AD",
  12: "300AD",
  13: "400AD",
  14: "500AD",
  15: "600AD",
  16: "700AD",
  17: "800AD",
};

    const newYear = yearMap[e.target.value];
    setSelectedYear(newYear);
    document.getElementById("yearLabel").innerText = newYear;
  };

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
            <MapMarkers year={selectedYear} />
          </MapContainer>
        </div>
      </div>

      <div id="controls">
        <label htmlFor="timeSlider">
          Year: <span id="yearLabel">2500BC</span>
        </label>
        <input
          type="range"
          id="timeSlider"
          min="1"
          max="15"
          defaultValue="1"
          step="1"
          onChange={handleSliderChange}
        />
        <button id="playButton">Play</button>
      </div>

      <div id="languageDetails" className="shared-box">
        Language Details
      </div>
    </>
  );
};

export default LanguageMap;
