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
        <div className="pb-5 pt-5">
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
              Hufflepuff is one of the four Hogwarts houses of Witchcraft and
              Wizardry, founded by Helga Hufflepuff. The house colors are yellow
              and black, and its emblematic animal is the badger.
              <br />
              Hufflepuff is the most inclusive among the four houses; valuing
              hard work, patience, loyalty, and fair play rather than a
              particular aptitude in its members.
              <br />
              Hufflepuff is sometimes perceived as being a miscellaneous
              category. To be “the Hufflepuff of” something can refer to an
              incoherent catchall, a place to put all the stuff you don't have
              another place for.
              <br />
              The entrance to the Hufflepuff common room is concealed in a stack
              of large barrels in a nook on the right-hand side of the kitchen
              corridor. You have to tap the barrel two from the bottom, middle
              of the second row, in the rhythm of 'Helga Hufflepuff,' and the
              lid will swing open. <br />
              Hufflepuff characteristics include a strong sense of justice,
              loyalty, patience, and a propensity for hard work. Hufflepuffs are
              also seen as nice, almost to a fault.
              <br />
              Hogwarts houses have moved beyond the realm of fiction and into
              the real world. It's common for fans (known as Potterheads) to
              sort themselves, each other, fictional characters from other
              stories into houses, and celebrities or public figures. Quizzes to
              figure out what house you'd be sorted into are common.
              <br />
              Among Potterheads, a person's Hogwarts House is an important part
              of their identity, and often a source of pride. There is even a
              Hufflepuff Pride day.
              <br />
              Hufflepuff is sometimes perceived as being a miscellaneous
              category. To be “the Hufflepuff of” something can refer to an
              incoherent catchall, a place to put all the stuff you don't have
              another place for. Hufflepuff can also denote someone or something
              that's not particularly memorable, with no notable
              characteristics.
              <br />
              J.K. Rowling has made a statement that Hufflepuff is just as
              admirable a house as any other. However, the perception of
              Hufflepuff remains a point of contention within the Harry Potter
              fanbase, which has led to articles about the positive aspects of
              being a Hufflepuff.
            </p>
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
      </div>
      <Footer />
    </div>
  );
}
