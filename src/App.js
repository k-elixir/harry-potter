import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery";
import Hogwarts from "./components/Hogwarts";
import Gryffindor from "./components/Gryffindor/Gryffindor";
import Ravenclaw from "./components/Ravenclaw/Ravenclaw";
import Hufflepuff from "./components/Hufflepuff/Hufflepuff";
import Slytherin from "./components/Slytherin/Slytherin";

export default function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Hogwarts" element={<Hogwarts />} />
          <Route path="/Gryffindor" element={<Gryffindor />} />
          <Route path="/Ravenclaw" element={<Ravenclaw />} />
          <Route path="/Hufflepuff" element={<Hufflepuff />} />
          <Route path="/Slytherin" element={<Slytherin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
