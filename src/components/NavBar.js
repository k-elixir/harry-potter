import React from "react";
import logo from "./images/favicon.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
      <div className="container">
        <Link className="navbar-brand m-0 p-0" to="/">
          <img src={logo} alt="Logo" width={60} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Hogwarts">
                Hogwarts
              </Link>
            </li>
            <li class="dropdown-item dropdown">
              <div
                role="button"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Houses
              </div>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link className="dropdown-item" to="/Gryffindor">
                    Gryffindor
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Hufflepuff">
                    Hufflepuff
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Ravenclaw">
                    Ravenclaw
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Slytherin">
                    Slytherin
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
