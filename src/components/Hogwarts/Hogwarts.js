import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Hogwarts() {
  return (
    <div className="hogwarts-page" id="up">
      <NavBar />
      <div className="p-5 text-center">
        <div className="container pt-5 mt-4 pb-5 mb-5">
          <hr />
          <h1 className="title p-md-5">Hogwarts</h1>
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
}
