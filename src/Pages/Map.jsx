import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import MapMarkers from "./MapMarker"; // Ensure this is correctly implemented
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

const years = [
  "2500BC", "2000BC", "1500BC", "1000BC", "800BC",
  "600BC", "400BC", "200BC", "1AD", "100AD",
  "200AD", "300AD", "400AD", "500AD", "600AD", "700AD", "800AD"
];

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

// Language descriptions for the legend detail box
const getLanguageDescription = (lang) => {
  const descriptions = {
    Celtic: "An ancient Indo-European branch spoken in Western Europe.",
    Germanic: "Origin of modern German, English, and others.",
    Italic: "Includes Latin, the ancestor of Romance languages.",
    Baltic: "A conservative branch with modern Lithuanian and Latvian.",
    Slavic: "Spoken across Eastern Europe, includes Russian, Polish, etc.",
    Anatolian: "Extinct languages once spoken in Turkey, like Hittite.",
    Hellenic: "Primarily Greek, with a long continuous history.",
    Lusitanian: "An extinct Western Iberian language with Celtic ties.",
    Uralic: "Not Indo-European. Includes Finnish, Estonian, Hungarian.",
    PaleoEuropean: "Prehistoric languages of unknown affiliation in Europe.",
  };
  return descriptions[lang] || "No information available.";
};

const LanguageMap = () => {
  const [yearIndex, setYearIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
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
            <button
              key={lang}
              id={lang}
              data-language-family={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={selectedLanguage === lang ? "active" : ""}
            >
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
        <h2>Language Details</h2>
        {selectedLanguage ? (
          <div>
            <h3>{selectedLanguage === "PaleoEuropean" ? "Paleo-European" : selectedLanguage}</h3>
            <p>{getLanguageDescription(selectedLanguage)}</p>
          </div>
        ) : (
          <p>Select a language from the legend to see more details.</p>
        )}
      </div>
    </>
  );
};

export default LanguageMap;
