import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "./style.css";

export default function House(props) {
  return (
    <div className={props.houseName} id="up">
      <NavBar />
      <div className="container ">
        <div className="pt-5 pb-5 mb-5 mt-1">
          <div className="pt-5 mt-4 pb-5 mb-5 text-center">
            <div className="row align-items-center">
              <div className="col d-none d-lg-block flag">{props.flag}</div>
              <div className="col">
                <hr />
                <h1 className="title pt-md-5 pb-md-5">{props.houseName}</h1>
                <p>{props.sortingHat}</p>
                <hr />
              </div>
              <div className="col flag">{props.flag}</div>
            </div>
          </div>
        </div>
        <main>
          <div>
            <div
              id="carouselExampleRide"
              className="carousel slide float-end ms-3 d-none d-sm-block house-slide"
              data-bs-ride="true"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">{props.pic1}</div>
                <div className="carousel-item">{props.pic2}</div>
                <div className="carousel-item">{props.pic3}</div>
                <div className="carousel-item">{props.pic4}</div>
                <div className="carousel-item">{props.pic5}</div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {props.description}
          </div>

          <div>
            <h3 className="h1 mt-5">
              <span>S</span>ome members of {props.houseName}.
            </h3>
            <div className="row justify-content-between align-items-center member p-5 mb-5">
              <div className="col">
                <div className="img-box">
                  <div className="img">
                    <img
                      src={props.member1}
                      alt={props.member1Alt}
                      height={330}
                      width={200}
                    />
                  </div>
                  <div className="hover-img">
                    <img
                      src={props.member1Hover}
                      alt={props.member1Alt}
                      height={330}
                      width={200}
                    />
                  </div>
                  <p>
                    <span>{props.member1Alt}</span>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="img-box">
                  <div className="img">
                    <img
                      src={props.member2}
                      alt={props.member2Alt}
                      height={330}
                      width={200}
                    />
                  </div>
                  <div className="hover-img">
                    <img
                      src={props.member2Hover}
                      alt={props.member2Alt}
                      height={330}
                      width={200}
                    />
                  </div>
                  <p>
                    <span>{props.member2Alt}</span>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="img-box">
                  <div className="img">
                    <img
                      src={props.member3}
                      alt={props.member3Alt}
                      height={330}
                      width={200}
                    />
                  </div>
                  <div className="hover-img">
                    <img
                      src={props.member3Hover}
                      alt={props.member3Alt}
                      height={330}
                      width={200}
                    />
                  </div>
                  <p>
                    <span>{props.member3Alt}</span>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="img-box">
                  <div className="img">
                    <img
                      src={props.member4}
                      alt={props.member4Alt}
                      height={330}
                      width={200}
                    />
                  </div>
                  <div className="hover-img">
                    <img
                      src={props.member4Hover}
                      alt={props.member4Alt}
                      height={330}
                      width={200}
                    />
                  </div>
                  <p>
                    <span>{props.member4Alt}</span>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="img-box">
                  <div className="img">
                    <img
                      src={props.member5}
                      alt={props.member5Alt}
                      height={330}
                      width={200}
                    />
                  </div>
                  <div className="hover-img">
                    <img
                      src={props.member5Hover}
                      alt={props.member5Alt}
                      height={330}
                      width={200}
                    />
                  </div>
                  <p>
                    <span>{props.member5Alt}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="h1">
              <span>H</span>ouse Cup
            </h3>
            {props.cup}
          </div>
          <div className="fs-4">{props.fact}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
