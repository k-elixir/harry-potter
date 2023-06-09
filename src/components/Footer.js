import React from "react";
import logo from "./images/favicon.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="pb-5 pt-5 container">
      <div className="footer p-5">
        <div className="row">
          <div className="col-5 text-start">
            <Link to="/HomePage">
              <img src={logo} alt="Logo" width={100} />
            </Link>
          </div>
          <div className="col text-start">
            <Link to="/About">About Me</Link>
            <br />
            <Link to="/Contact">Contact Me</Link>
            <br />
            <br />
            <div className="col">
              <a
                href="https://github.com/k-elixir/harry-potter"
                target="_blank"
                rel="noreferrer"
              >
                Open-sourse code by Kimia Rafi
              </a>
            </div>
          </div>
          <div className="col-1 text-end">
            <a href="#up" title="Back to Top">
              <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
