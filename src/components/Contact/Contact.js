import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import github from "./images/github.png";
// import linkedin from "./images/linkedin-100.png";
// import email from "./images/email-100.png";
// import shecodes from "./images/shecodes.png";

export default function Contact() {
  return (
    <div>
      <NavBar />
      <h3 className="text-center h1 p-5 title-contact">Contact Me</h3>
      <div className="container contact-page">
        <div className="row justify-content-around">
          <div className="col-5 forms">
            <div className="text-center pb-5">
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
                  <button
                    type="submit"
                    className="btn btn-warning p-3 mb-5 mb-mb-0"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-2">
            <div className="row">
              <a href="https://github.com/k-elixir">
                <FontAwesomeIcon icon={faGithub} className="fs-1" />
              </a>
            </div>
            <br />
            <div className="row">
              <a href="https://github.com/k-elixir">
                <FontAwesomeIcon icon={faEnvelope} className="fs-1" />
              </a>
            </div>
            <br />
            <div className="row">
              <a href="https://github.com/k-elixir">
                <FontAwesomeIcon icon={faLinkedin} className="fs-1" />
              </a>
            </div>
            <br />
            <div className="row">
              <a href="https://github.com/k-elixir">
                <FontAwesomeIcon icon={faLocationDot} className="fs-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}