import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Introduction from "./components/Introduction";
import Contact from "./components/Contact";
import Hogwarts from "./components/Hogwarts";
import Gryffindor from "./components/Gryffindor";
import Ravenclaw from "./components/Ravenclaw";
import Hufflepuff from "./components/Hufflepuff";
import Slytherin from "./components/Slytherin";

export default function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/Contact" element={<Contact />} />
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
