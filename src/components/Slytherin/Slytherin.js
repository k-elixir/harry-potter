import React from "react";
import "./style.css";
import flag from "./images/banner.png";
import hall1 from "./images/hall.jpg";
import salazar from "./images/salazar.webp";
import slytherin from "./images/slytherin.jpg";
import severus from "./images/severus.png";
import snake from "./images/2.jpg";
import tom from "./images/tom.jpg";
import tom2 from "./images/e6194cc9f285bf9f51ff305d908d38ea.jpg";
import snape from "./images/snape.jpg";
import snape2 from "./images/snape3.jpg";
import malfoy from "./images/malfoy.jpg";
import malfoy2 from "./images/malfoy2.jpg";
import bellatrix from "./images/bellatrix.jpg";
import bellatrix2 from "./images/BellatrixLestrange.webp";
import dolores from "./images/fdolores.jpg";
import dolores2 from "./images/Profile_Dolores_Umbridge_Harry_Potter.webp";
import House from "../House/House";

export default function Slytherin() {
  return (
    <House
      houseName={"Slytherin"}
      flag={<img src={flag} alt="Slytherin's flag" />}
      pic1={<img src={salazar} class="d-block w-100" alt="Salazar Slytherin" />}
      pic2={<img src={hall1} class="d-block w-100" alt="Slytherin's hall" />}
      pic3={<img src={slytherin} class="d-block w-100" alt="Slytherins" />}
      pic4={<img src={snake} class="d-block w-100" alt="Snake" />}
      pic5={<img src={severus} class="d-block w-100" alt="Severus Snape" />}
      member1={tom}
      member1Hover={tom2}
      member1Alt={"You-Know-Who"}
      member2={snape}
      member2Hover={snape2}
      member2Alt={"Severus Snape"}
      member3={malfoy}
      member3Hover={malfoy2}
      member3Alt={"Malfoy Family"}
      member4={bellatrix}
      member4Hover={bellatrix2}
      member4Alt={"Bellatrix Lestrange"}
      member5={dolores}
      member5Hover={dolores2}
      member5Alt={"Dolores Umbridge"}
      sortingHat={
        "You'll make your real friends, Those cunning folk use any means, To achieve their ends."
      }
      description={
        <p className="fs-5">
          <span className="h2">Slytherin</span> is one of the four houses of
          Hogwarts School of Witchcraft and Wizardry in J.K. Rowling's Harry
          Potter series. Each house has a set of traits and characteristics
          associated with it, and those in Slytherin are known for being
          ambitious, cunning, and resourceful. Slytherins are also sometimes
          regarded as being evil thanks to the fact that many of the most
          sinister witches and wizards have been associated with this house.
          <br />
          This house crest boasts Slytherin's signature colours of green and
          silver. The two colours are evocative of the water element. Of course,
          the original Hogwarts crest was designed to showcase all four houses
          in one single emblem, but this pin will let you show everyone that you
          belong in this ambitious-hearted house.
          <br />
          This heirloom belonged to the Gaunt family, who were descendants of
          Salazar Slytherin and the Peverells, and it has a curious history. At
          its core is the Resurrection Stone - the Deathly Hallow once owned by
          Cadmus Peverell, one of the three brothers from the tale by Beedle the
          Bard. You'll notice the words: pride, ambition, and cunning adorning
          this ring pin. These are all Slytherin qualities. An example of a
          person who possessed these traits - alongside loyalty and love - was
          Severus Snape.
          <br />
          The serpent represents Slytherin and appears in many places throughout
          Hogwarts, as well as outside it - the doorknocker of number twelve,
          Grimmauld Place even had one! Witches and wizards who can speak to
          snakes are called Parselmouths, and house founder, Salazar Slytherin
          was famous for this ability. It was a gift also shared by Lord
          Voldemort and Harry Potter.
          <br />
          The Bloody Baron is the Slytherin house ghost. He is covered in silver
          bloodstains and the only one who can control Peeves, the Hogwarts
          poltergeist. In life, he was born into nobility in the late tenth
          century, and fell in love with Rowena Ravenclaw's daughter, Helena.
        </p>
      }
      cup={
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
      }
      fact={
        <p>
          <span>I</span>f you are in this group, you should be proud of it, not
          because of Malfoy or Tom Riddle but because of Merlin.
        </p>
      }
    />
  );
}
