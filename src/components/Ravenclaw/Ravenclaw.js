import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import pic from "./images/34aa20211f9d2596771a0421fe8c0944.jpg";

export default function Ravenclaw() {
  return (
    <div className="ravenclaw" id="up">
      <NavBar />
      <div className="container">
        <div className="pb-5 pt-5">
          <div className="pt-5 mt-4 pb-5 mb-5 text-center">
            <hr />
            <h1 className="title p-md-5">Ravenclaw</h1>
            <p>
              "Where those of wit and learning, Will always find their kind."
            </p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <p className="fs-5">
              Ravenclaw is one of the four Houses of Hogwarts School of
              Witchcraft and Wizardry. It was founded by Rowena Ravenclaw, a
              medieval witch, and its members are known for their wit, learning,
              and wisdom. Ravenclaws are intuitive and possess traits such as
              cleverness, wisdom, wit, intellectual ability, and creativity.
              <br />
              The emblematic animal symbol of Ravenclaw is an eagle, and blue
              and bronze are its colours. Eagles are a symbol for a broader
              vision and strength of mind and heart. The Ravenclaw points
              hourglass contained blue sapphires. Ravenclaw corresponds roughly
              to the element of air, and it was for that reason that the House
              colours were chosen; blue and bronze represented the sky and eagle
              feathers respectively, both having much to do with air.
              <br />
              The Ravenclaw common room and dormitories are located in Ravenclaw
              Tower on the west side of the castle. The common room is circular,
              with arched windows that provide incredible views of the Hogwarts
              grounds, and a domed ceiling painted with stars like the night
              sky. It has a white marble statue of founder Rowena Ravenclaw, and
              behind it lies the door leading to the dormitories. The
              dormitories are in turrets off the main tower, where students can
              hear the wind whistling around the windows. The bedsheets on the
              four-poster beds are made of sky blue silk.
              <br />
              To enter the Ravenclaw common room, students must answer a
              question asked by the eagle-shaped knocker. If the question is
              answered correctly, the door to the common room will open.
              Ravenclaws learn quickly and enjoy the challenges the door sets.
              <br />
              Ravenclaws are known for their intuition and deep understanding of
              how things work. They possess individuality and acceptance of
              people and things that others would consider weird, as well as
              their outstanding intelligence. They can also be quirky and
              possess unusual intellectual interests. While others may be
              inclined to shun and ridicule such people, Ravenclaws generally
              accept and celebrate these eccentrics, such as Luna Lovegood.
              <br />
              Ravenclaws are driven by their logic and so can simply read
              situations or infer things through experiences and circumstances.
              Luna Lovegood, for instance, is very emotionally intuitive. She
              knows when Harry needs company, and she senses when he needs
              space.
              <br />
              While Ravenclaws are known for their intelligence and wit, they
              can be too concerned with appearances and the semantics and
              aesthetics of things, but not so much with their heart. They are
              also known to be highly competitive when it comes to academic
              success, and they are so competitive that they are known to back
              stab each other, and likely other students, in order to get top
              marks.
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
