import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import hall from "./images/hall.jpg";
import salazar from "./images/salazar.webp";
import slytherin from "./images/slytherin.jpg";
import first from "./images/1.jpg";
import second from "./images/2.jpg";
import tom from "./images/tom.jpg";
import snape from "./images/snape.jpg";
import malfoy from "./images/malfoy.jpg";
import bellatrix from "./images/bellatrix.jpg";
import banner from "./images/Slytherin house banner.png";

export default function Slytherin() {
  return (
    <div className="slytherin" id="up">
      <NavBar />
      <div className="container">
        <div className="pt-5 pb-5 text-center">
          <div className="pt-5 mt-4 pb-5 mb-5">
            <hr />
            <div className="row">
              <div className="col">
                <img src={banner} alt="Slytherin banner" />
              </div>
              <div className="col">
                <h1 className="title p-md-5">Slytherin</h1>
              </div>
              <div className="col">
                <img src={banner} alt="Slytherin banner" />
              </div>
            </div>
            <p>
              "You'll make your real friends, Those cunning folk use any means,
              To achieve their ends."
            </p>
            <hr />
          </div>
        </div>
        <div>
          <div
            id="carouselExampleRide"
            class="carousel slide float-end ms-3 d-none d-sm-block slytherin-slide"
            data-bs-ride="true"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={hall} class="d-block w-100" alt="slytherin hall" />
              </div>
              <div class="carousel-item">
                <img
                  src={salazar}
                  class="d-block w-100"
                  alt="Salazar Slytherin"
                />
              </div>
              <div class="carousel-item">
                <img src={slytherin} class="d-block w-100" alt="Slytherin" />
              </div>
              <div class="carousel-item">
                <img src={first} class="d-block w-100" alt="Slytherin" />
              </div>
              <div class="carousel-item">
                <img src={second} class="d-block w-100" alt="Slytherin" />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleRide"
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
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className="fs-5">
            <span className="h2">Slytherin</span> is one of the four houses of
            Hogwarts School of Witchcraft and Wizardry in J.K. Rowling's Harry
            Potter series. Each house has a set of traits and characteristics
            associated with it, and those in Slytherin are known for being
            ambitious, cunning, and resourceful. Slytherins are also sometimes
            regarded as being evil thanks to the fact that many of the most
            sinister witches and wizards have been associated with this house.
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
        </div>
        <div>
          <h3 className="h1 mt-5">
            <span>S</span>ome members of Gryffindor.
          </h3>
          <div className="row text-center member p-5 mb-5">
            <div className="col">
              <img
                src={tom}
                alt="Tom Marvolo Riddle"
                height={330}
                width={200}
              />
              <p>
                <span>You-Know-Who</span>
              </p>
            </div>
            <div className="col">
              <img src={snape} alt="Severus Snape" height={330} width={200} />
              <p>
                <span>Severus Snape</span>
              </p>
            </div>
            <div className="col">
              <img src={malfoy} alt="Malfoy Family" height={330} width={200} />
              <p>
                <span>Malfoy Family</span>
              </p>
            </div>
            <div className="col">
              <img
                src={bellatrix}
                alt="Bellatrix Lestrange"
                height={330}
                width={200}
              />
              <p>
                <span>Bellatrix Lestrange</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="h1">
            <span>H</span>ouse Cup
          </h3>
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
        <div className="fs-4">
          <p>
            <span>I</span>f you are in this group, you should be proud of it,
            not because of Malfoy or Tom Riddle but because of Merlin.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
