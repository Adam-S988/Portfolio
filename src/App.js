import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Dogs from "./Pages/Dogs";
import { Routes, Route } from "react-router-dom";
import Calculator from "./Pages/Calculator";
import LanguageMap from "./Pages/Map";
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/dogs" element={<Dogs />} />
          <Route path="/projects/calculator" element={<Calculator />} />
          <Route path="/projects/languagemap" element={<LanguageMap />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
