import React from "react";
import "./style.css";
import flag from "./images/gryffindor_flag.png";
import hall1 from "./images/1.jpg";
import hall2 from "./images/3.jpg";
import ghost from "./images/2.jpg";
import minerva from "./images/minerva.jpeg";
import godric from "./images/godric.jpeg";
import hermione from "./images/hermione.jpg";
import hermione2 from "./images/hermione2.jpg";
import sirius from "./images/sirius.jpg";
import sirius2 from "./images/black2.jpg";
import oliver from "./images/oliver.jpg";
import oliver2 from "./images/oliver2.jpg";
import weasleys from "./images/Weasleys.jpg";
import wealeys2 from "./images/weasley2.jpg";
import hagrid from "./images/1533f41cc061550e29dc1e4cae4c1f65.jpg";
import hagrid2 from "./images/hagrid2.jpg";
import House from "../House/House";

export default function Gryffindor() {
  return (
    <House
      houseName={"Gryffindor"}
      flag={<img src={flag} alt="Gryffindor's flag" />}
      pic1={<img src={godric} class="d-block w-100" alt="Godric Gryffindor" />}
      pic2={<img src={ghost} class="d-block w-100" alt="Sir Nicholas" />}
      pic3={<img src={hall2} class="d-block w-100" alt="Gryffindor's hall" />}
      pic4={<img src={hall1} class="d-block w-100" alt="Gryffindor's hall" />}
      pic5={
        <img src={minerva} class="d-block w-100" alt="Minerva MacGonagall" />
      }
      member1={hermione}
      member1Hover={hermione2}
      member1Alt={"Hermione Granger"}
      member2={hagrid}
      member2Hover={hagrid2}
      member2Alt={"Rubeus Hagrid"}
      member3={oliver}
      member3Hover={oliver2}
      member3Alt={"Oliver Wood"}
      member4={sirius}
      member4Hover={sirius2}
      member4Alt={"Sirius Black"}
      member5={weasleys}
      member5Hover={wealeys2}
      member5Alt={"Weasley family"}
      sortingHat={
        "Where dwell the brave at heart, their daring, nerve and chivalry set Gryffindors apart."
      }
      description={
        <p className="fs-5">
          <span className="h2">Gryffindor</span> is one of the four Houses of
          Hogwarts School of Witchcraft and Wizardry.
          <br />
          Godric Gryffindor was the founder of Gryffindor House. His chocolate
          frog card describes him as the most accomplished dueller of his time
          and an enlightened fighter against Muggle discrimination.
          <br />
          Gryffindors are known for their nerve, chivalry, daring, courage,
          bravery and determination. According to J.K. Rowling Gryffindor
          roughly corresponds to the element of fire.
          <br />
          Minerva McGonagall is the Head of Gryffindor House. She is the
          Transfiguration teacher at Hogwarts. Minerva is a stern witch, but
          very righteous.
          <br />
          The Gryffindor House ghost is Sir Nicholas de Mimsy-Porpington . He
          was beheaded, but the axe was blunt so it took many chops until he was
          finally dead. He is a friendly ghost who will help any who need it.
          <br />
          The Gryffindor common room and dormitories are located in Gryffindor
          Tower. Students enter the tower through a painting of the Fat Lady on
          the Gryffindor landing. They must give her the correct password in
          order to get her to swing open to reveal the entrance. If someone
          gives her the wrong password, they are denied entrance.
          <br />
          Gryffindor's common room has stuffed armchairs and a cozy fire. The
          arched windows look out over the expansive Quidditch Pitch, Hogwarts
          Lake, and the Forbidden Forest. Hung above the Fireplace is a picture
          of Godric Gryffindor.
          <br />
          The walls are decorated with pictures of mythical creatures and
          notable Gryffindor members. Winding mahogany staircases lead to the
          dormitories. The dormitories have ancient mahogany four-poster beds
          hung with scarlet curtains with threaded gold.
        </p>
      }
      cup={
        <ul className="fs-5">
          <li>
            Gryffindor came second for the first house cup with 74,069,919 house
            points.
          </li>
          <li>Gryffindor won the second house cup with 48,538,348 points.</li>
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
            Gryffindor came fourth for the seventh and eighth house cups with
            49,335,378 points.
          </li>
        </ul>
      }
      fact={
        <p>
          <span>Y</span>ou probably know that the things I have told you so far.
          But did you know the sword of Gryffindor was made a thousand years ago
          by goblins, or that Head of House Minerva McGonagall's hobbies include
          correcting articles in Transfiguration Today and supporting the
          Montrose Magpies?
        </p>
      }
    />
  );
}
