import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
