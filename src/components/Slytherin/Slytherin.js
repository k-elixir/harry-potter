import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Slytherin() {
  return (
    <div className="slytherin" id="up">
      <NavBar />
      <div className="p-5 text-center">
        <div className="container pt-5 mt-4 pb-5 mb-5">
          <hr />
          <h1 className="title p-md-5">Slytherin</h1>
          <p>
            "You'll make your real friends, Those cunning folk use any means, To
            achieve their ends."
          </p>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-8"></div>
        <div></div>
      </div>
      <div className="container">
        <h3 className="h1">House Cup</h3>
        <ul className="fs-5">
          <li>
            Slytherin won the first house cup with 72,734,274 house points.
          </li>
          <li>
            Slytherin came second for the second house cup with 48,495,275
            points.
          </li>
          <li>Slytherin won the third house cup with 26,990,924 points.</li>
          <li>
            Slytherin came second for the fourth house cup with 24,865,387.
          </li>
          <li>
            Slytherin came second for the fifth house cup with 27,795,479
            points.
          </li>
          <li>
            Slytherin came fourth for the sixth house cup with 31,926,625
            points.
          </li>
          <li>Slytherin won the seventh house cup with 52,652,850 points.</li>
          <li>
            Slytherin came second for the eighth house cup with 26,564,159
            points.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
