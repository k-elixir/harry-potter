import React from "react";
import "./style.css";
import flag from "./images/ravenclaw_banner.png";
import rowena from "./images/Rowena-Ravenclaw.jpeg";
import hall1 from "./images/hall.jpg";
import hall2 from "./images/Ravenclaw_common_room.webp";
import ghost from "./images/ghost.jpg";
import prof from "./images/fili.jpg";
import cho from "./images/cho.jpg";
import cho2 from "./images/Cho_chang.webp";
import luna from "./images/luna.jpg";
import luna2 from "./images/luna2.jpg";
import quirrell from "./images/Prof. Quirrell.jpg";
import quirrell2 from "./images/Quirinus-Quirrel_458.webp";
import lockhart from "./images/gildero-lockhart.jpg";
import lockhart2 from "./images/gaccion1.jpg";
import trelawney from "./images/Sybill-Trelawney.jpg";
import trelawney2 from "./images/47642FA9-DDBF-4468-B363-D835D496C49F.webp";
import House from "../House/House";

export default function Ravenclaw() {
  return (
    <House
      houseName={"Ravenclaw"}
      flag={<img src={flag} alt="Ravenclaw's flag" />}
      pic1={<img src={rowena} class="d-block w-100" alt="Rowena Ravenclaw" />}
      pic2={<img src={ghost} class="d-block w-100" alt="Ravenclaw's ghost" />}
      pic3={<img src={hall1} class="d-block w-100" alt="Ravenclaw's hall" />}
      pic4={
        <img src={hall2} class="d-block w-100" alt="Ravenclaw's common room" />
      }
      pic5={<img src={prof} class="d-block w-100" alt="Ravenclaw's leader" />}
      member1={cho}
      member1Hover={cho2}
      member1Alt={"Cho Chang"}
      member2={luna}
      member2Hover={luna2}
      member2Alt={"Luna Lovegood"}
      member3={quirrell}
      member3Hover={quirrell2}
      member3Alt={"Quirinus Quirrell"}
      member4={lockhart}
      member4Hover={lockhart2}
      member4Alt={"Gilderoy Lockhart"}
      member5={trelawney}
      member5Hover={trelawney2}
      member5Alt={"Sybill Trelawney"}
      sortingHat={
        "Where those of wit and learning, Will always find their kind."
      }
      description={
        <p className="fs-5 pt-2">
          <span className="h2">Ravenclaw</span> is one of the four Houses of
          Hogwarts School of Witchcraft and Wizardry. It was founded by Rowena
          Ravenclaw, a medieval witch, and its members are known for their wit,
          learning, and wisdom. Ravenclaws are intuitive and possess traits such
          as cleverness, wisdom, wit, intellectual ability, and creativity.
          <br />
          The emblematic animal symbol of Ravenclaw is an eagle, and blue and
          bronze are its colours. Eagles are a symbol for a broader vision and
          strength of mind and heart. The Ravenclaw points hourglass contained
          blue sapphires. Ravenclaw corresponds roughly to the element of air,
          and it was for that reason that the House colours were chosen; blue
          and bronze represented the sky and eagle feathers respectively, both
          having much to do with air.
          <br />
          The Ravenclaw common room and dormitories are located in Ravenclaw
          Tower on the west side of the castle. The common room is circular,
          with arched windows that provide incredible views of the Hogwarts
          grounds, and a domed ceiling painted with stars like the night sky. It
          has a white marble statue of founder Rowena Ravenclaw, and behind it
          lies the door leading to the dormitories. The dormitories are in
          turrets off the main tower, where students can hear the wind whistling
          around the windows. The bedsheets on the four-poster beds are made of
          sky blue silk.
          <br />
          To enter the Ravenclaw common room, students must answer a question
          asked by the eagle-shaped knocker. If the question is answered
          correctly, the door to the common room will open. Ravenclaws learn
          quickly and enjoy the challenges the door sets.
          <br />
          Ravenclaws are known for their intuition and deep understanding of how
          things work. They possess individuality and acceptance of people and
          things that others would consider weird, as well as their outstanding
          intelligence. They can also be quirky and possess unusual intellectual
          interests. While others may be inclined to shun and ridicule such
          people, Ravenclaws generally accept and celebrate these eccentrics,
          such as Luna Lovegood.
          <br />
          Ravenclaws are driven by their logic and so can simply read situations
          or infer things through experiences and circumstances. Luna Lovegood,
          for instance, is very emotionally intuitive. She knows when Harry
          needs company, and she senses when he needs space.
          <br />
          While Ravenclaws are known for their intelligence and wit, they can be
          too concerned with appearances and the semantics and aesthetics of
          things, but not so much with their heart. They are also known to be
          highly competitive when it comes to academic success, and they are so
          competitive that they are known to back stab each other, and likely
          other students, in order to get top marks.
        </p>
      }
      cup={
        <ul className="fs-5">
          <li>
            Ravenclaw came third for the first house cup with 71,815,917 house
            points.
          </li>
          <li>
            Ravenclaw came fourth for the second house cup with 24,567,337
            points.
          </li>
          <li>
            Ravenclaw came second for the third house cup with 26,916,194
            points.
          </li>
          <li>
            Ravenclaw came fourth for the fourth house cup with 24,567,337.
          </li>
          <li>Ravenclaw won the fifth house cup with 28,048,578 points.</li>
          <li>Ravenclaw won the sixth house cup with 32,377,299 points.</li>
          <li>
            Ravenclaw came third for the seventh house cup with 49,775,819
            points.
          </li>
          <li>
            Ravenclaw came third for the eighth house cup with 23,712,525
            points.
          </li>
        </ul>
      }
      fact={null}
    />
  );
}
