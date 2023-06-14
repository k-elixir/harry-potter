import React from "react";
import "./style.css";
import flag from "./images/hufflepuff_banner.png";
import hall1 from "./images/hall.jpg";
import hall2 from "./images/hall2.jpg";
import helga from "./images/helga.jpeg";
import banner from "./images/banner.jpg";
import badger from "./images/hufflepuff.jpg";
import cedric from "./images/cedric2.jpg";
import cedric2 from "./images/Cedric.jpg";
import hanna from "./images/hanna.jpg";
import hanna2 from "./images/996b4a5c68f6968a6a056b562d85e6e4.jpg";
import newt from "./images/newt-scamander.jpg";
import newt2 from "./images/newt-scamander-portrait.jpg";
import tonks from "./images/nymphadora-tonks.jpg";
import tonks2 from "./images/f3f0dc01112aba3e44147266ed2bb14c.jpg";
import pomona from "./images/Pomona-Sprout.jpg";
import pomona2 from "./images/pomona2.jpg";
import House from "../House/House";
export default function Hufflepuff() {
  return (
    <House
      houseName={"Hufflepuff"}
      flag={<img src={flag} alt="Hufflepuff's flag" />}
      pic1={<img src={helga} class="d-block w-100" alt="Helga Hufflepuff" />}
      pic2={<img src={hall1} class="d-block w-100" alt="Hufflepuff's hall" />}
      pic3={<img src={hall2} class="d-block w-100" alt="Hufflepuff's hall" />}
      pic4={<img src={badger} class="d-block w-100" alt="Badger" />}
      pic5={<img src={banner} class="d-block w-100" alt="Hufflepuff's color" />}
      member1={cedric}
      member1Hover={cedric2}
      member1Alt={"Cedric Diggory"}
      member2={newt}
      member2Hover={newt2}
      member2Alt={"Newt Scamander"}
      member3={tonks}
      member3Hover={tonks2}
      member3Alt={"Nymphadora Tonks"}
      member4={hanna}
      member4Hover={hanna2}
      member4Alt={"Hannah Abbott"}
      member5={pomona}
      member5Hover={pomona2}
      member5Alt={"Pomona Sprout"}
      sortingHat={
        "Where they are just and loyal, Those patient Hufflepuffs aretrue, And unafraid of toil."
      }
      description={
        <p className="fs-5">
          <span className="h2">Hufflepuff</span> is one of the four Hogwarts
          houses of Witchcraft and Wizardry, founded by Helga Hufflepuff. The
          house colors are yellow and black, and its emblematic animal is the
          badger.
          <br />
          Hufflepuff is the most inclusive among the four houses; valuing hard
          work, patience, loyalty, and fair play rather than a particular
          aptitude in its members.
          <br />
          Hufflepuff is sometimes perceived as being a miscellaneous category.
          To be “the Hufflepuff of” something can refer to an incoherent
          catchall, a place to put all the stuff you don't have another place
          for.
          <br />
          The entrance to the Hufflepuff common room is concealed in a stack of
          large barrels in a nook on the right-hand side of the kitchen
          corridor. You have to tap the barrel two from the bottom, middle of
          the second row, in the rhythm of 'Helga Hufflepuff,' and the lid will
          swing open.
          <br />
          Hufflepuff characteristics include a strong sense of justice, loyalty,
          patience, and a propensity for hard work. Hufflepuffs are also seen as
          nice, almost to a fault.
          <br />
          Hogwarts houses have moved beyond the realm of fiction and into the
          real world. It's common for fans (known as Potterheads) to sort
          themselves, each other, fictional characters from other stories into
          houses, and celebrities or public figures. Quizzes to figure out what
          house you'd be sorted into are common.
          <br />
          Among Potterheads, a person's Hogwarts House is an important part of
          their identity, and often a source of pride. There is even a
          Hufflepuff Pride day.
          <br />
          Hufflepuff is sometimes perceived as being a miscellaneous category.
          To be “the Hufflepuff of” something can refer to an incoherent
          catchall, a place to put all the stuff you don't have another place
          for. Hufflepuff can also denote someone or something that's not
          particularly memorable, with no notable characteristics.
          <br />
          J.K. Rowling has made a statement that Hufflepuff is just as admirable
          a house as any other. However, the perception of Hufflepuff remains a
          point of contention within the Harry Potter fanbase, which has led to
          articles about the positive aspects of being a Hufflepuff.
        </p>
      }
      cup={
        <ul className="fs-5">
          <li>
            Hufflepuff came fourth for the first house cup with 62,596,368 house
            points.
          </li>
          <li>
            Hufflepuff came third for the second house cup with 48,438,276
            points.
          </li>
          <li>
            Hufflepuff came fourth for the third house cup with 26,715,401
            points.
          </li>
          <li>Hufflepuff won the fourth house cup with 24,915,860.</li>
          <li>
            Hufflepuff came third for the fifth house cup with 27,350,412
            points.
          </li>
          <li>
            Hufflepuff came third for the sixth house cup with 32,259,036
            points.
          </li>
          <li>
            Hufflepuff came second for the seventh house cup with 50,109,456
            points.
          </li>
          <li>Hufflepuff won the eighth house cup with 26,796,774 points.</li>
        </ul>
      }
      fact={null}
    />
  );
}
