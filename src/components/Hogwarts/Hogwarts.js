import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import ollivanders from "./images/ollivanders.jpg";
import quidditch from "./images/quidditch.jpg";
import stag from "./images/stag.jpg";
import doe from "./images/doe.webp";
import phoenix from "./images/phoenix.jpg";
import wolf from "./images/Wolf.webp";
import cat from "./images/cat.jpeg";
import founders from "./images/Founders_Hero.jpg";
export default function Hogwarts() {
  return (
    <div className="hogwarts" id="up">
      <div className="hogwarts-page pb-5">
        <NavBar />
        <div className="p-5 mb-5 text-center">
          <div className="container pt-5 mt-4 pb-5 mb-5">
            <hr />
            <h1 className="title p-md-5">Hogwarts</h1>
            <p>School of Witchcraft and Wizardry</p>
            <hr />
          </div>
        </div>
      </div>
      <main className="container-md mt-5">
        <div className="hogwarts-founders">
          <p className="fs-5">
            <span>Hogwarts</span> School of Witchcraft and Wizardry is a
            boarding school of magic for students aged eleven to seventeen.
            <br />
            Founded around the 9th century and 10th century by Godric
            Gryffindor, Rowena Ravenclaw, Helga Hufflepuff and Salazar
            Slytherin, Hogwarts was established in the Highlands of Scotland to
            educate young wizards and witches as well as to keep students safe
            from Muggle persecution. Theory has it that Rowena Ravenclaw came up
            with the name of Hogwarts after dreaming of a warty hog that led her
            to a cliff by a lake. Since then, Hogwarts educated most wizarding
            children with residence in Great Britain and Ireland, keeping its
            location hidden from other wizarding schools and Muggles.
          </p>
          <div className="text-center p-4">
            <img src={founders} alt="Hogwarts founders" />
          </div>
        </div>
        <div id="diagon" className="pb-4">
          <h2 className="h1">
            <span>D</span>iagon alley
          </h2>
          <div className="fs-5 pb-xl-5">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide float-end ms-3 d-none d-sm-block diagon-img"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={ollivanders}
                    class="d-block w-100"
                    alt="ollinvanders shop"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={quidditch}
                    class="d-block w-100"
                    alt="quidditch shop"
                  />
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
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
                  data-bs-target="#carouselExampleAutoplaying"
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
            <p>
              Diagon Alley is a wizarding shopping area located in London,
              England, which is completely hidden from the Muggle world. All
              items on the Hogwarts supply list could be bought at Diagon Alley.
              The alley was essentially the centre of wizarding London and was
              very large in area.
              <br />
              Access to Diagon Alley was behind the Leaky Cauldron in a small,
              walled courtyard with a dustbin. Diagon Alley could be accessed by
              tapping the correct brick in the wall behind the Leaky Cauldron
              (from the rubbish bin, three up and two across). The wall went in
              a small hole first but formed a large archway. It could also be
              accessed by Floo Powder and Apparition. There might have been
              other entrances as well.
              <br />
              <br />
              First you need a wand, Mr Ollivanders will help you. But remember
              your wand has chosen you!
              <li>
                If you have money and love to fly, I suggest you buy Nimbus,
                maybe Nimbus 2023!
              </li>
            </p>
          </div>
        </div>
        <div className="mt-5" id="patronus">
          <h2 className="h1">
            <span>E</span>xpecto Patronum!
          </h2>
          <div className="fs-5">
            <p>
              The Patronus is a form of advanced magic which even the most
              qualified wizards can struggle with. Harry Potter was one of the
              youngest wizards to cast a corporeal Patronus, having been taught
              by Professor Lupin at the tender age of 13.
              <br />
              As Professor Lupin told Harry in Prisoner of Azkaban, the Patronus
              is ‘a kind of Anti-Dementor – a guardian which acts as a shield
              between you and the Dementor.’ It’s also ‘a kind of positive
              force, a projection of the very things that the Dementor feeds
              upon – hope, happiness, the desire to survive – but it cannot feel
              despair, as real humans can, so the Dementors can’t hurt it.’
              <br />
              The Patronus has two forms, non-corporeal and corporeal. A
              non-corporeal Patronus can appear as ‘a thin wisp of silver’ that
              hovers ‘like mist’. Whereas a corporeal Patronus has a form that
              is clearly defined and is more than vapour or smoke.
              <br />
              The ability to cast a corporeal or non-corporeal Patronus is down
              to the skill of the witch or wizard. Each Patronus is unique to
              the witch or wizard who conjures it, and it’s possible, in some
              cases, for a Patronus to change.
            </p>
          </div>
          <br />
          <div className="row text-center">
            <div className="col">
              <img src={stag} alt="Stag patronus" width={230} height={230} />
              <ul>
                <li>Harry Potter</li>
                <li>James Potter</li>
              </ul>
            </div>
            <div className="col">
              <img src={doe} alt="Doe patronus" width={230} height={230} />
              <ul>
                <li>Lily Potter</li>
                <li>Severus Snape</li>
              </ul>
            </div>
            <div className="col">
              <img
                src={phoenix}
                alt="Phoenix patronus"
                width={230}
                height={230}
              />
              <ul>
                <li>Albus Dumbledore</li>
              </ul>
            </div>
            <div className="col">
              <img src={wolf} alt="Wolf patronus" width={230} height={230} />
              <ul>
                <li>Remus Lupin</li>
                <li>Nymphadora Tonks</li>
              </ul>
            </div>
            <div className="col">
              <img src={cat} alt="Cat patronus" width={230} height={230} />
              <ul>
                <li>Minerva McGonagall</li>
                <li>Dolores Umbridge</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5" id="death">
          <h2 className="h1">
            <span>D</span>eathly Hallows
          </h2>
          <div className="fs-5">
            <div className="text-center">
              <iframe
                width="550"
                height="310"
                src="https://www.youtube.com/embed/clvreim9_PE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className=" ms-3 float-sm-end"
              ></iframe>
            </div>
            <p>
              In The Tales of Beedle the Bard, the author presented his own
              version of the origin of the Hallows. Hundreds of years ago, the
              three Peverell brothers were travelling at twilight, and reached a
              river too dangerous to cross. The three brothers, being trained in
              the magical arts, simply waved their wands and created a bridge
              across the river. They were then stopped by Death himself, who
              felt cheated that they had gotten across the river, as most
              travellers drowned in it.
              <br />
              Death, a cunning liar, then pretended to congratulate them on
              being clever enough to evade him, and offered each of them a
              powerful magical item. The first brother, Antioch Peverell, wished
              to have the most powerful wand out of his combative personality;
              Death broke a branch off a nearby elder tree and created for him
              the Elder Wand, a wand more powerful than any other in existence.
              The second brother, Cadmus Peverell, out of arrogance, wanted to
              humiliate Death even further, and wished to have the power to
              bring loved ones from the grave; Death then took a stone from the
              riverbed and created for him the Resurrection Stone, a stone
              capable of bringing the dead back to the living world. The third
              brother, Ignotus Peverell, who was a humble man, did not trust
              Death and asked to go on from the river without being followed by
              Death; Death then gave him his own Cloak of Invisibility, an
              invisibility cloak that never lost its power through curses or
              age. In time, the brothers went their separate ways.
              <br />
              The three legendary objects, (the cloak, the wand and the stone)
              together made up the Deathly Hallows.
              <br />
              Instead of being rewards for their cleverness, the Deathly Hallows
              were actually part of a cunning plan by Death to kill off the
              Peverells so he could take them for his own. However, Albus
              Dumbledore felt that it was more likely that the Hallows were
              actually created by the very talented and powerful brothers, and
              that the story of their origins as objects fashioned by Death
              sprang up around them as result of the powers they possessed.
              <br />
              Antioch travelled to a wizarding village where he killed the man
              he once duelled with, he then boasted of the power of the Elder
              Wand, that it was unbeatable and in his possession, invoking envy
              amongst the many wanting to possess it for themselves. His throat
              was slit in his sleep by another wizard who stole the Elder Wand.
              <br />
              Cadmus travelled back home and used the Resurrection Stone to
              bring back the woman he loved, but was dismayed to find that it
              was only a pale imitation of her: the dead did not belong in the
              living world and could not truly be brought back. He found that
              she was cold, lifeless, and miserable in the land of the living,
              nothing like she used to be. In the end Cadmus committed suicide
              by hanging himself so he could truly join her.
              <br />
              Ignotus used the cloak to remain hidden from Death for a long
              time. When he was an old man, he passed the cloak onto his son,
              greeted Death as an old friend, and went with him to the next
              world.
              <br />
              That is a children's tale, told to amuse rather than to instruct.
              Those of us who understand these matters, however, recognise that
              the ancient story refers to three objects, or Hallows, which, if
              united, will make the possessor Master of Death.
            </p>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="h1">
            <span>S</span>
            ome rules about magic it’s important to bear in mind.
          </h2>
          <ul className="fs-5">
            <li>The International Statute of Secrecy must be abided</li>
            <li>
              You can’t use magic outside of Hogwarts until you come of age
            </li>
            <li>You can’t magically create food</li>
            <li>Playing with life and death will warrant dark consequences</li>
            <li>If you become an Animagus, you have to get a license</li>
            <li>If you’re American, you would’ve needed a wand permit</li>
            <li>The Unforgivable Curses are illegal, obviously</li>
            <li>
              And looking after certain fantastic beasts is also... frowned upon
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
