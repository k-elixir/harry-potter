import React, { useState } from "react";
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

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState("");
  function handleClick(e) {
    setSelectedAlbum(e.target.name);
  }
  function backPress() {
    setSelectedAlbum(null);
  }
  return (
    <>
      {!selectedAlbum ? (
        <div className="gallery" id="up">
          <NavBar />
          <div className="albumes container">
            <h2 className="text-center mt-5">
              <span className="title">Albumes</span>
            </h2>
            <div className="row text-center mt-5 mb-5">
              <div className="col-lg-4 col-sm-6 pb-5 pt-5">
                <img src={one} alt="News" onClick={handleClick} name="news" />
                <div className="mt-3">
                  <span className="fs-1">News</span>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 pb-5 pt-5">
                <img src={two} alt="Info" onClick={handleClick} name="info" />
                <div className="mt-1">
                  <span className="fs-1">Info</span>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6  pb-5 pt-5">
                <img
                  src={three}
                  alt="Creativity"
                  onClick={handleClick}
                  name="creativity"
                />
                <div className="mt-1">
                  <span className="fs-1">Creativity</span>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6  pb-5 pt-5">
                <img src={four} alt="Meme" onClick={handleClick} name="meme" />
                <div className="mt-1">
                  <span className="fs-1">Meme</span>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6  pb-5 pt-5">
                <img
                  src={five}
                  alt="Enjoy"
                  onClick={handleClick}
                  name="print"
                />
                <div className="mt-1">
                  <span className="fs-1">Print and Enjoy</span>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6  pb-5 pt-5">
                <img
                  src={six}
                  alt="Wallpaper"
                  onClick={handleClick}
                  name="wall"
                />
                <div className="mt-1">
                  <span className="fs-1">Wallpaper</span>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Pictures value={selectedAlbum} onBackPress={backPress} />
      )}
    </>
  );
}
