import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import albums from "./images";

export default function Pictures() {
  return (
    <div id="up">
      <NavBar />
      <h4 className="text-center">
        <span className="title">News</span>
      </h4>
      <div className="text-center container p-5 albums-img">
        {albums.news.map(function (picture, index) {
          return (
            <div key={index} className="d-inline-flex m-xl-5 m-lg-4 m-md-2 m-1">
              {picture}
            </div>
          );
        })}
      </div>
      <Footer />/
    </div>
  );
}
