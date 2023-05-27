import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "./style.css";

export default function Gryffindor() {
  return (
    <div className="gryffindor">
      <NavBar />
      <div className="p-5 text-center">
        <div className="container pt-5 mt-4 pb-5 mb-5">
          <hr />
          <h1 className="title p-md-5">Gryffindor</h1>
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
}
