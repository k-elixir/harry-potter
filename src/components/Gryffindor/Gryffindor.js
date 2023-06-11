import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "./style.css";
import hall from "./images/1.jpg";
import hall2 from "./images/3.jpg";
import ghost from "./images/2.jpg";
import minerva from "./images/minerva.jpeg";
import godric from "./images/godric.jpeg";

import hermione from "./images/hermione.jpg";
import sirius from "./images/sirius.jpg";
import oliver from "./images/oliver.jpg";
import weasleys from "./images/Weasleys.jpg";
import hagrid from "./images/1533f41cc061550e29dc1e4cae4c1f65.jpg";

export default function Gryffindor() {
  return (
    <div className="gryffindor" id="up">
      <NavBar />
      <div className="container ">
        <div className="pt-5 pb-5">
          <div className="pt-5 mt-4 pb-5 mb-5 text-center">
            <hr />
            <h1 className="title p-md-5">Gryffindor</h1>
            <p>
              "Where dwell the brave at heart, their daring, nerve and chivalry
              set Gryffindors apart."
            </p>
            <hr />
          </div>
        </div>
        <main>
          <div>
            <div
              id="carouselExampleRide"
              class="carousel slide float-end ms-3 d-none d-sm-block gryffindor-slide"
              data-bs-ride="true"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={hall} class="d-block w-100" alt="Gryffindor hall" />
                </div>
                <div class="carousel-item">
                  <img
                    src={hall2}
                    class="d-block w-100"
                    alt="Gryffindor hall"
                  />
                </div>
                <div class="carousel-item">
                  <img src={ghost} class="d-block w-100" alt="Sir Nicholas" />
                </div>
                <div class="carousel-item">
                  <img
                    src={godric}
                    class="d-block w-100"
                    alt="Godric Gryffindor"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={minerva}
                    class="d-block w-100"
                    alt="Minerva MacGonagall"
                  />
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
            <p className="fs-5">
              <span className="h2">Gryffindor</span> is one of the four Houses
              of Hogwarts School of Witchcraft and Wizardry.
              <br />
              Godric Gryffindor was the founder of Gryffindor House. His
              chocolate frog card describes him as the most accomplished dueller
              of his time and an enlightened fighter against Muggle
              discrimination.
              <br />
              Gryffindors are known for their nerve, chivalry, daring, courage,
              bravery and determination. According to J.K. Rowling Gryffindor
              roughly corresponds to the element of fire.
              <br />
              Minerva McGonagall is the Head of Gryffindor House. She is the
              Transfiguration teacher at Hogwarts. Minerva is a stern witch, but
              very righteous.
              <br />
              The Gryffindor House ghost is Sir Nicholas de Mimsy-Porpington .
              He was beheaded, but the axe was blunt so it took many chops until
              he was finally dead. He is a friendly ghost who will help any who
              need it.
              <br />
              The Gryffindor common room and dormitories are located in
              Gryffindor Tower. Students enter the tower through a painting of
              the Fat Lady on the Gryffindor landing. They must give her the
              correct password in order to get her to swing open to reveal the
              entrance. If someone gives her the wrong password, they are denied
              entrance.
              <br />
              Gryffindor's common room has stuffed armchairs and a cozy fire.
              The arched windows look out over the expansive Quidditch Pitch,
              Hogwarts Lake, and the Forbidden Forest. Hung above the Fireplace
              is a picture of Godric Gryffindor.
              <br />
              The walls are decorated with pictures of mythical creatures and
              notable Gryffindor members. Winding mahogany staircases lead to
              the dormitories. The dormitories have ancient mahogany four-poster
              beds hung with scarlet curtains with threaded gold.
            </p>
          </div>

          <div>
            <h3 className="h1 mt-5">
              <span>S</span>ome members of Gryffindor.
            </h3>
            <div className="row text-center member p-5 mb-5">
              <div className="col">
                <img src={hermione} alt="Hermione" height={330} width={200} />
                <p>
                  <span>Hermione Granger</span>
                </p>
              </div>
              <div className="col">
                <img src={hagrid} alt="Hagrid" height={330} width={200} />
                <p>
                  <span>Rubeus Hagrid</span>
                </p>
              </div>
              <div className="col">
                <img src={oliver} alt="Oliver wood" height={330} width={200} />
                <p>
                  <span>Oliver Wood</span>
                </p>
              </div>
              <div className="col">
                <img src={sirius} alt="Sirius black" height={330} width={200} />
                <p>
                  <span>Sirius Black</span>
                </p>
              </div>
              <div className="col">
                <img
                  src={weasleys}
                  alt="Weasley family"
                  height={330}
                  width={200}
                />
                <p>
                  <span>Weasley Family</span>
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
                Gryffindor came second for the first house cup with 74,069,919
                house points.
              </li>
              <li>
                Gryffindor won the second house cup with 48,538,348 points.
              </li>
              <li>
                Gryffindor came third for the third and fourth house cups with
                26,740,444 and 24,610,105 points.
              </li>
              <li>
                Gryffindor came fourth for the fifth house cup with 27,299,570
                points.
              </li>
              <li>
                Gryffindor came second for the sixth house cup with 32,279,991
                points.
              </li>
              <li>
                Gryffindor came fourth for the seventh and eighth house cups
                with 49,335,378 points.
              </li>
            </ul>
          </div>
          <div className="fs-4">
            <p>
              <span>Y</span>ou probably know that the things I have told you so
              far. But did you know the sword of Gryffindor was made a thousand
              years ago by goblins, or that Head of House Minerva McGonagall's
              hobbies include correcting articles in Transfiguration Today and
              supporting the Montrose Magpies?
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
