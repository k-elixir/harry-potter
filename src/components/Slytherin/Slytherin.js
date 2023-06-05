import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import pic from "./images/34aa20211f9d2596771a0421fe8c0944.jpg";

export default function Slytherin() {
  return (
    <div className="slytherin" id="up">
      <NavBar />
      <div className="container">
        <div className="pt-5 pb-5 text-center">
          <div className="pt-5 mt-4 pb-5 mb-5">
            <hr />
            <h1 className="title p-md-5">Slytherin</h1>
            <p>
              "You'll make your real friends, Those cunning folk use any means,
              To achieve their ends."
            </p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-8 fs-5">
            Slytherin is one of the four houses of Hogwarts School of Witchcraft
            and Wizardry in J.K. Rowling's Harry Potter series. Each house has a
            set of traits and characteristics associated with it, and those in
            Slytherin are known for being ambitious, cunning, and resourceful.
            Slytherins are also sometimes regarded as being evil thanks to the
            fact that many of the most sinister witches and wizards have been
            associated with this house.
            <br />
            This house crest boasts Slytherin's signature colours of green and
            silver. The two colours are evocative of the water element. Of
            course, the original Hogwarts crest was designed to showcase all
            four houses in one single emblem, but this pin will let you show
            everyone that you belong in this ambitious-hearted house.
            <br />
            This heirloom belonged to the Gaunt family, who were descendants of
            Salazar Slytherin and the Peverells, and it has a curious history.
            At its core is the Resurrection Stone - the Deathly Hallow once
            owned by Cadmus Peverell, one of the three brothers from the tale by
            Beedle the Bard. You'll notice the words: pride, ambition, and
            cunning adorning this ring pin. These are all Slytherin qualities.
            An example of a person who possessed these traits - alongside
            loyalty and love - was Severus Snape.
            <br />
            The serpent represents Slytherin and appears in many places
            throughout Hogwarts, as well as outside it - the doorknocker of
            number twelve, Grimmauld Place even had one! Witches and wizards who
            can speak to snakes are called Parselmouths, and house founder,
            Salazar Slytherin was famous for this ability. It was a gift also
            shared by Lord Voldemort and Harry Potter.
            <br />
            The Bloody Baron is the Slytherin house ghost. He is covered in
            silver bloodstains and the only one who can control Peeves, the
            Hogwarts poltergeist. Harry Potter does a pretty good Bloody Baron
            impression. In life, he was born into nobility in the late tenth
            century, and fell in love with Rowena Ravenclaw's daughter, Helena
          </div>
          <div
            id="carouselExampleCaptions"
            class="carousel slide col"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={pic} class="d-block " width={400} alt="pic" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={pic} class="d-block " width={400} alt="pic" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={pic} class="d-block " width={400} alt="pic" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="member p-5 mt-5 mb-5 d-flex justify-content-between">
          <img src={pic} alt="gryffindor" height={400} width={300} />

          <img src={pic} alt="gryffindor" height={400} width={300} />
          <img src={pic} alt="gryffindor" height={400} width={300} />
        </div>
        <div>
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
        <div className="fs-5">
          If you are in this group, you should be proud of it, not because of
          Malfoy or Tom Riddle but because of Merlin.
        </div>
      </div>
      <Footer />
    </div>
  );
}
