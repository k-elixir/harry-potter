import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import picture from "./images/picture.png";
import { HashLink } from "react-router-hash-link";

export default function About() {
  return (
    <div className="about-page" id="up">
      <NavBar />
      <div className="pt-5 pb-5 container">
        <div className="row">
          <div className="col-md d-none d-lg-block mt-5 pt-3 pt-xl-0 mt-xl-1">
            <img className="about-page-img" src={picture} alt="my Avatar" />
          </div>
          <div className="col-lg-6 about">
            <span className="h1">Hello!</span>
            <p className="pt-3 fs-5">
              My name is Kimia and welcome to my Harry Potter website.
              <br />
              As it turns out I'm a potterhead. I'm in Slytherin and I'm proud
              of that for some reason :), my patronus is a black bear, you might
              be interested that my wand has phoenix core.
              <br />
              I wrote this website for my Shecodes challenge which was about
              "what is your favorite movie" (but actually I think I cheated
              becuas I wrote my program about a series not single movie ;)). you
              can find all about Harry Potter series here. If I forgot something
              I'm really glad if you tell me by clicking on the button below and
              share with me I want to know what is your group and patronus.
              <br />I hope you enjoy it.
            </p>
            <HashLink className="btn btn-warning mt-2 " to="/Contact#up">
              Contact me
            </HashLink>
            <div className="d-none d-lg-block">
              <hr />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
