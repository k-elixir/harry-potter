import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import albums from "./images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Pictures(props) {
  return (
    <div id="up">
      <NavBar />
      <div className="album">
        <button onClick={props.onBackPress} className="mt-5 ms-sm-5">
          <span className="fs-1">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span className="fs-1 d-sm-inline d-none">Back</span>
          </span>
        </button>
        <h4 className="text-center">
          <span className="title">{albums[props.value].title}</span>
        </h4>
      </div>
      <div className="text-center container p-5 albums-img">
        {albums[props.value].images.map(function (picture, index) {
          return (
            <div key={index} className="d-inline-flex m-xl-5 m-lg-4 m-md-2 m-1">
              {picture}
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
