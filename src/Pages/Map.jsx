import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "./LanguageMap/Map.css";
import "leaflet/dist/leaflet.css";

// Utility component to fix map resizing issues
function MapFixer() {
  const map = useMap();

  useEffect(() => {
    // Wait for the map container to fully mount
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);

  return null;
}

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
          </MapContainer>
        </div>
      </div>

      <div id="controls">
        <label htmlFor="timeSlider">
          Year: <span id="yearLabel">2500 BC</span>
        </label>
        <input
          type="range"
          id="timeSlider"
          min="1"
          max="5"
          defaultValue="1"
          step="1"
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
