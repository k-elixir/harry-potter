import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Introduction from "./components/Introduction";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Hogwarts from "./components/Hogwarts";
import Gryffindor from "./components/Gryffindor";
import Ravenclaw from "./components/Ravenclaw";
import Hufflepuff from "./components/Hufflepuff";
import Slytherin from "./components/Slytherin";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Hogwarts" element={<Hogwarts />} />
          <Route path="/Gryffindor" element={<Gryffindor />} />
          <Route path="/Ravenclaw" element={<Ravenclaw />} />
          <Route path="/Hufflepuff" element={<Hufflepuff />} />
          <Route path="/Slytherin" element={<Slytherin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
