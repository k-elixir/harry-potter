import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div>
      <NavBar />
      <div className="container contact-page">
        <div className="forms ms-xl-5">
          <h3 className="pb-5 title-contact">Get in Touch</h3>
          <form action="https://formspree.io/f/xknaqqvk" method="POST">
            <div>
              <input
                type="text"
                name="Name"
                className="form-control border-top-0 p-3"
                placeholder="First name"
              />
            </div>
            <div className="pt-5">
              <input
                type="email"
                name="email"
                className="form-control p-3 border-top-0"
                placeholder="E-mail address"
              />
            </div>
            <div className="pt-5">
              <textarea
                name="message"
                className="form-control p-2 pb-5 border-top-0"
                placeholder="What would you like to tell me?"
              ></textarea>
            </div>
            <div className="pt-5">
              <button type="submit" className="btn p-3">
                Send Message
              </button>
            </div>
          </form>
          <div className="icon-col-2 text-center fs-1">
            <a
              href="https://github.com/k-elixir"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>{" "}
            <a
              href="mainto:Kimia.rfp@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/kimiarafi/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>{" "}
            <a
              href="https://www.google.com/maps/place/Rasht,+Gilan+Province,+Iran/@37.2860251,49.5484824,12.51z/data=!4m6!3m5!1s0x3ff5620d43f15675:0x41dd40f9931cfbf6!8m2!3d37.2712671!4d49.5920736!16zL20vMDNqeDF3?authuser=0&entry=ttu"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLocationDot} />
            </a>
          </div>
        </div>
        <div className="icones-col fs-4">
          <h3 className="pb-5 title-contact">Contact Me</h3>
          <a
            href="https://github.com/k-elixir"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} /> k-elixir
          </a>
          <br />
          <br />
          <a href="mainto:Kimia.rfp@gmail.com" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
            {"  "}Kimia.rfp@gmail.com
          </a>
          <br />
          <br />
          <a
            href="https://www.linkedin.com/in/kimiarafi/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} /> KimiaRafi
          </a>
          <br />
          <br />
          <a
            href="https://www.google.com/maps/place/Rasht,+Gilan+Province,+Iran/@37.2860251,49.5484824,12.51z/data=!4m6!3m5!1s0x3ff5620d43f15675:0x41dd40f9931cfbf6!8m2!3d37.2712671!4d49.5920736!16zL20vMDNqeDF3?authuser=0&entry=ttu"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLocationDot} /> Iran
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
