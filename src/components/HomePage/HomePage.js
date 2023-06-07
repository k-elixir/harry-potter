import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import death from "./images/deathly.jpeg";
import patronus from "./images/patronus.webp";
import train from "./images/train.jpg";
import gryffindor from "./images/gryffindor.jpg";
import ravenclaw from "./images/ravenclaw.jpg";
import huffelpuff from "./images/huffelpuff.jpg";
import slytherin from "./images/slytherin.jpg";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div id="up">
      <div className="homePage">
        <div className="homePage-FirstPart text-center">
          <NavBar />
          <div className="p-5">
            <div className="container pt-5 mt-4 pb-5 mb-5">
              <hr />
              <h1 className="title p-md-5">Harry Potter</h1>
              <p className="fs-2">Film series</p>
              <p>based on the eponymous novels by J. K. Rowling</p>
              <hr />
            </div>
          </div>
        </div>
        <div className="homePage-secondPart p-5">
          <p className="fs-5">
            <span className="fs-1">Welcome</span> to Harry potter world! <br />
            If you know this world you're my friend and nice to meet you, you
            can have fun and find a lot of funny stuff here. <br />
            Let me a little explane my site for you: <br />
            you can go to the Hogwarts by train in the nav, see the all group
            halls and histories, maybe find some wallpapers for your phone in
            gallery, and laugh to the memes. <br />
            but if you don't know anything about this world I'm sorry, I have to
            call you a Muggle :( , don't worry you can learn, and this site is
            the easiest way for you to learn. <br />
            Let's get on the train and go to Hogwarts.
          </p>
          <Link className="btn train-button" to="/Hogwarts">
            <img src={train} width={130} alt="train" />
          </Link>
        </div>
        <div className="homePage-fourthPart p-5 mt-5 mb-5 container">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col text-center">
                  <img src={patronus} width={200} alt="patronus" />
                </div>
                <div className="col mt-3">
                  <h5>Expecto Patronum!</h5>
                  <br />
                  The Patronus is a form of advanced magic which even the most
                  qualified wizards can struggle with.
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col text-center">
                  <img src={death} width={200} alt="patronus" />
                </div>
                <div className="col mt-3">
                  <h5>Deathly Hallows</h5>
                  <br />
                  The three legendary objects, (the cloak, the wand and the
                  stone) together made up the Deathly Hallows.
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col text-center">
                  <img src={death} width={200} alt="patronus" />
                </div>
                <div className="col">
                  <h5>Expecto Patronum!</h5>
                  <br />
                  What is a Patronus?
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homePage-thirdPart text-center p-5">
          <div className="row justify-content-center">
            <div className="col-auto">
              <Link to="/Gryffindor">
                <img src={gryffindor} alt="Gryffindor" />
              </Link>
            </div>
            <div className="col-auto">
              <Link to="/Huffelpuff">
                <img src={huffelpuff} alt="Huffenpuff" />
              </Link>
            </div>
            <div className="col-auto">
              <Link to="/Ravenclaw">
                <img src={ravenclaw} alt="Ravenclaw" />
              </Link>
            </div>
            <div className="col-auto">
              <Link to="/Slytherin">
                <img src={slytherin} alt="Slytherin" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <h4>
            1,090,739 words, 3,363 pages, 199 chapter, 17 hours and 14 minutes,
            772 characters, 8 movies, 7 books, 1 story, and this is{" "}
          </h4>
          <span>Harry Potter</span>
        </div>
        <Footer />
      </div>
    </div>
  );
}
