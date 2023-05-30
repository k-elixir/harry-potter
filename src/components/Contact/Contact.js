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
        <div className="forms">
          <h3 className="h1 pb-5 title-contact">Get in Touch</h3>
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
                <button type="submit" className="btn btn-warning p-3">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="icones-col">
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
      <Footer />
    </div>
  );
}
