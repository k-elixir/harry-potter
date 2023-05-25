import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-5">
      <div className="footer p-5">
        <div className="row">
          <div className="col-2">
            <Link to="/HomePage">
              <img src={logo} alt="Logo" width={100} />
            </Link>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col">
                <Link className="text-decoration-none" to="/About">
                  About Me
                </Link>
              </div>
              <div className="col">
                <Link className="text-decoration-none" to="/Contact">
                  Contact Me
                </Link>
              </div>
            </div>
            <br />
            <a
              href="https://github.com/k-elixir/harry-potter"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              Open-sourse code by Kimia Rafi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
