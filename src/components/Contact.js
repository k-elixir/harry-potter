import React from "react";
import NavBar from "./NavBar";
import github from "./images/github.png";
import linkedin from "./images/linkedin-100.png";
import email from "./images/email-100.png";
import shecodes from "./images/shecodes.png";

export default function Contact() {
  return (
    <div>
      <NavBar />
      <h3 className="text-center h1">Contact Me</h3>
      <div className="row container contact-page">
        <div className="col">
          <div className="text-center m-auto pb-5">
            <form action="https://formspree.io/f/xknaqqvk" method="POST">
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    name="First name"
                    className="form-control border-top-0"
                    placeholder="First name"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    name="Last name"
                    className="form-control p-3"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="pt-5">
                <input
                  type="email"
                  name="email"
                  className="form-control p-3"
                  placeholder="E-mail address"
                />
              </div>
              <div className="pt-5">
                <textarea
                  name="message"
                  className="form-control p-2 pb-5"
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
        <div className="col-1 mt-5 pt-5">
          <a href="https://github.com/k-elixir">
            <img src={github} alt="github icon" width={60} />
          </a>
          <a href="https://github.com/k-elixir">
            <img src={email} alt="email icon" width={60} />
          </a>
          <a href="https://github.com/k-elixir">
            <img src={linkedin} alt="linkedin icon" width={60} />
          </a>
          <br />
          <br />
          <a href="https://github.com/k-elixir">
            <img src={shecodes} alt="shecodes icon" width={55} />
          </a>
        </div>
      </div>
    </div>
  );
}
