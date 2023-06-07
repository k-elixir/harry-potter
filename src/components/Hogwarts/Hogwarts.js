import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Hogwarts() {
  return (
    <div className="" id="up">
      <div className="hogwarts-page">
        <NavBar />
        <div className="p-5 text-center">
          <div className="container pt-5 mt-4 pb-5 mb-5">
            <hr />
            <h1 className="title p-md-5">Hogwarts</h1>
            <p>School of Witchcraft and Wizardry</p>
            <hr />
          </div>
        </div>
      </div>
      <main className="container">
        <div className="mb-5 mt-5">
          <h2 className="h1">
            <span>E</span>xpecto Patronum!
          </h2>

          <div className="fs-5">
            The Patronus is a form of advanced magic which even the most
            qualified wizards can struggle with. Harry Potter was one of the
            youngest wizards to cast a corporeal Patronus, having been taught by
            Professor Lupin at the tender age of 13.
            <br />
            As Professor Lupin told Harry in Prisoner of Azkaban, the Patronus
            is ‘a kind of Anti-Dementor – a guardian which acts as a shield
            between you and the Dementor.’ It’s also ‘a kind of positive force,
            a projection of the very things that the Dementor feeds upon – hope,
            happiness, the desire to survive – but it cannot feel despair, as
            real humans can, so the Dementors can’t hurt it.’
            <br />
            The Patronus has two forms, non-corporeal and corporeal. A
            non-corporeal Patronus can appear as ‘a thin wisp of silver’ that
            hovers ‘like mist’. Whereas a corporeal Patronus has a form that is
            clearly defined and is more than vapour or smoke.
            <br />
            The ability to cast a corporeal or non-corporeal Patronus is down to
            the skill of the witch or wizard. Each Patronus is unique to the
            witch or wizard who conjures it, and it’s possible, in some cases,
            for a Patronus to change.
          </div>
        </div>
        <div>
          <h2 className="h1">
            <span>D</span>ethly hollows
          </h2>
          <div className="fs-5">
            In The Tales of Beedle the Bard, the author presented his own
            version of the origin of the Hallows. Hundreds of years ago, the
            three Peverell brothers were travelling at twilight, and reached a
            river too dangerous to cross. The three brothers, being trained in
            the magical arts, simply waved their wands and created a bridge
            across the river. They were then stopped by Death himself, who felt
            cheated that they had gotten across the river, as most travellers
            drowned in it.
            <br />
            Death, a cunning liar, then pretended to congratulate them on being
            clever enough to evade him, and offered each of them a powerful
            magical item. The first brother, Antioch Peverell, wished to have
            the most powerful wand out of his combative personality; Death broke
            a branch off a nearby elder tree and created for him the Elder Wand,
            a wand more powerful than any other in existence. The second
            brother, Cadmus Peverell, out of arrogance, wanted to humiliate
            Death even further, and wished to have the power to bring loved ones
            from the grave; Death then took a stone from the riverbed and
            created for him the Resurrection Stone, a stone capable of bringing
            the dead back to the living world. The third brother, Ignotus
            Peverell, who was a humble man, did not trust Death and asked to go
            on from the river without being followed by Death; Death then gave
            him his own Cloak of Invisibility, an invisibility cloak that never
            lost its power through curses or age. In time, the brothers went
            their separate ways.
            <br />
            The three legendary objects, (the cloak, the wand and the stone)
            together made up the Deathly Hallows.
            <br />
            Instead of being rewards for their cleverness, the Deathly Hallows
            were actually part of a cunning plan by Death to kill off the
            Peverells so he could take them for his own. However, Albus
            Dumbledore felt that it was more likely that the Hallows were
            actually created by the very talented and powerful brothers, and
            that the story of their origins as objects fashioned by Death sprang
            up around them as result of the powers they possessed.
            <br />
            Antioch travelled to a wizarding village where he killed the man he
            once duelled with, he then boasted of the power of the Elder Wand,
            that it was unbeatable and in his possession, invoking envy amongst
            the many wanting to possess it for themselves. His throat was slit
            in his sleep by another wizard who stole the Elder Wand.
            <br />
            Cadmus travelled back home and used the Resurrection Stone to bring
            back the woman he loved, but was dismayed to find that it was only a
            pale imitation of her: the dead did not belong in the living world
            and could not truly be brought back. He found that she was cold,
            lifeless, and miserable in the land of the living, nothing like she
            used to be. In the end Cadmus committed suicide by hanging himself
            so he could truly join her.
            <br />
            Ignotus used the cloak to remain hidden from Death for a long time.
            When he was an old man, he passed the cloak onto his son, greeted
            Death as an old friend, and went with him to the next world.
            <br />
            That is a children's tale, told to amuse rather than to instruct.
            Those of us who understand these matters, however, recognise that
            the ancient story refers to three objects, or Hallows, which, if
            united, will make the possessor Master of Death.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
