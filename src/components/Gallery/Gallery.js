import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import one from "./images/1.jpg";
import two from "./images/2.jpg";
import three from "./images/3.jpg";
import four from "./images/4.jpg";
import five from "./images/5.jpg";
import six from "./images/6.jpg";
import Pictures from "./Pictures";
import { HashLink } from "react-router-hash-link";

export default function Gallery() {
  function handleClick() {
    <Pictures value={"news"} />;
  }

  return (
    <div className="gallery" id="up">
      <NavBar />
      <div className="albumes container">
        <h2 className="text-center mt-5">
          <span className="title">Albumes</span>
        </h2>
        <div className="row text-center mt-5 mb-5">
          <div className="col-lg-4 col-sm-6 pb-5 pt-5">
            <HashLink to="/Gallery/Pictures" onClick={handleClick}>
              <img src={one} alt="News" />
            </HashLink>
            <div className="mt-3">
              <span className="fs-1">News</span>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 pb-5 pt-5">
            <img src={two} alt="Info" />
            <div className="mt-1">
              <span className="fs-1">Info</span>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  pb-5 pt-5">
            <img src={three} alt="Creativity" />
            <div className="mt-1">
              <span className="fs-1">Creativity</span>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  pb-5 pt-5">
            <img src={four} alt="Meme" />
            <div className="mt-1">
              <span className="fs-1">Meme</span>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  pb-5 pt-5">
            <img src={five} alt="Enjoy" />
            <div className="mt-1">
              <span className="fs-1">Print and Enjoy</span>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  pb-5 pt-5">
            <img src={six} alt="Wallpaper" />
            <div className="mt-1">
              <span className="fs-1">Wallpaper</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
