import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import pic from "./images/20f6304ba7eed2a4771e4083bb2f39d1.jpg";

export default function Hufflepuff() {
  return (
    <div className="huffelpuff" id="up">
      <NavBar />
      <div className="container">
        <div className="p-5">
          <div className="text-center pt-5 mt-4 pb-5 mb-5">
            <hr />
            <h1 className="title p-md-5">Huffelpuff</h1>
            <p>
              "Where they are just and loyal, Those patient Hufflepuffs are
              true, And unafraid of toil."
            </p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <p className="fs-5">
              Hufflepuff was one of the four Houses of Hogwarts School of
              Witchcraft and Wizardry. Its founder was the medieval witch Helga
              Hufflepuff. Hufflepuff was the most inclusive among the four
              houses, valuing hard work, dedication, patience, loyalty, and fair
              play rather than a particular aptitude in its members.
              <br />
              Hufflepuff corresponded roughly to the element of earth, and it
              was for that reason that the House colours were chosen: yellow
              represented wheat, while black was emblematic of soil. The
              Hufflepuff point hourglass contained yellow diamonds. Students
              sorted into Hufflepuff often demonstrated strong abilities in
              Herbology, owing to their correspondence to earth.
              <br />
              Students belonging to this house were known to be hard-working,
              friendly, loyal, honest and rather impartial. It might be that due
              to their values, Hufflepuffs were not as competitive as the other
              houses, and were more modest about their accomplishments.
              Hufflepuff was the most inclusive among the four houses; valuing
              hard work, dedication, patience, loyalty, and fair play rather
              than a particular aptitude in its students.
              <br />
              Hufflepuffs were known to have a strong moral code, and a sense of
              right and wrong. Hufflepuffs were usually accepting of everyone.
              Students in Hufflepuff were known to value everyone and treat them
              as equal.
              <br />
              Hufflepuff appeared to have the least rivalry with the other
              houses, except in Quidditch, although the Triwizard Tournament did
              temporarily put a great deal of strain on the relationship between
              Gryffindor and Hufflepuff, due to unusual circumstances of the
              selection of both Gryffindor student Harry Potter and Hufflepuff
              student Cedric Diggory as champions. This was mended by 1998,
              where a majority of Hufflepuffs rose to defend Harry from Pansy
              Parkinson and later helped to defend Hogwarts.
            </p>
          </div>

          <div
            id="carouselExampleCaptions"
            class="carousel slide"
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
      </div>
      <Footer />
    </div>
  );
}
