import React from "react";
import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <div className="introduction-page mb-5 container text-center">
      <hr />
      <h2 className="h1">Welcome</h2>
      <p className="pt-4">
        welcome to my Harry Potter site. I wrote this for my Shecodes challenge
        what does about favorite film. you can find here all about Harry Potter
        series. If I forgot somethint I really glad if you tell me by click on
        the button below. I hope you enjoy it.
      </p>
      <Link className="btn btn-warning mb-5 mb-mb-0" to="/Contact">
        Contact us
      </Link>
      <hr />
    </div>
  );
}
