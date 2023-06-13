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

export default function Gallery() {
  return (
    <div className="gallery" id="up">
      <NavBar />
      <div className="albumes container">
        <h2 className="text-center mt-5">
          <span className="title">Albumes</span>
        </h2>
        <div className="row text-center mt-5 mb-5">
          <div className="col-lg-4 col-sm-6 pb-5 pt-5">
            <img src={one} alt="News" />
            <div>
              <span>News</span>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  pb-5 pt-5">
            <img src={two} alt="Info" />
            <div>
              <span>Info</span>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  pb-5 pt-5">
            <img src={three} alt="Creativity" />
            <div>
              <span>Creativity</span>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  pb-5 pt-5">
            <img src={four} alt="Meme" />
            <div>
              <span>Meme</span>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  pb-5 pt-5">
            <img src={five} alt="Enjoy" />
            <div>
              <span>Print and Enjoy</span>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  pb-5 pt-5">
            <img src={six} alt="Wallpaper" />
            <div>
              <span>Wallpaper</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
