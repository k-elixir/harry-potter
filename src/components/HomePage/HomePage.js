import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import diagon from "./images/diagon-alley.jpg";
import death from "./images/deathly-hallows.jpg";
import patronus from "./images/patronus.jpg";
import train from "./images/train.jpg";
import gryffindor from "./images/gryffindor.jpg";
import ravenclaw from "./images/ravenclaw.jpg";
import huffelpuff from "./images/huffelpuff.jpg";
import slytherin from "./images/slytherin.jpg";
import { HashLink } from "react-router-hash-link";

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
            <span className="fs-sm-1">Welcome</span> to Harry potter world!{" "}
            <br />
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
          <div className="text-center">
            <HashLink className="btn train-button" to="/Hogwarts#up">
              <img src={train} width={130} alt="train" />
            </HashLink>
          </div>
        </div>
        <div className="container homePage-fourthPart p-3 pt-5 pb-5 p-sm-5 p-xl-4 mt-5 mb-5 img-fluid">
          <div className="row">
            <div className="col-lg">
              <div className="row">
                <div className="col text-center">
                  <HashLink to="/Hogwarts#patronus">
                    <img src={patronus} width={200} alt="patronus" />
                  </HashLink>
                </div>
                <div className="col-sm mt-3 pe-4 ps-4 p-xl-0">
                  <h4>Expecto Patronum!</h4>
                  <p>
                    The Patronus is a form of advanced magic which even the most
                    qualified wizards can struggle with.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="row pt-4 pt-lg-0">
                <div className="col text-center">
                  <HashLink to="/Hogwarts#death">
                    <img src={death} width={200} alt="patronus" />
                  </HashLink>
                </div>
                <div className="col-sm mt-3 pe-4 ps-4 p-xl-0">
                  <h4>Deathly Hallows</h4>
                  <p>
                    The three legendary objects, (the cloak, the wand and the
                    stone) together made up the Deathly Hallows.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="row pt-4 pt-lg-0">
                <div className="col-sm text-center">
                  <HashLink to="/Hogwarts#diagon">
                    <img src={diagon} width={200} alt="patronus" />
                  </HashLink>
                </div>
                <div className="col mt-3 pe-4 ps-4 p-xl-0">
                  <h4>Diagon Alley</h4>
                  <p>Befor going to Hogwarts, we need to do some shopping!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homePage-thirdPart text-center p-sm-5">
          <div className="row justify-content-center">
            <div className="col-auto">
              <HashLink to="/Gryffindor#up">
                <img src={gryffindor} alt="Gryffindor" />
              </HashLink>
            </div>
            <div className="col-auto">
              <HashLink to="/Hufflepuff#up">
                <img src={huffelpuff} alt="Huffenpuff" />
              </HashLink>
            </div>
            <div className="col-auto">
              <HashLink to="/Ravenclaw#up">
                <img src={ravenclaw} alt="Ravenclaw" />
              </HashLink>
            </div>
            <div className="col-auto">
              <HashLink to="/Slytherin#up">
                <img src={slytherin} alt="Slytherin" />
              </HashLink>
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
