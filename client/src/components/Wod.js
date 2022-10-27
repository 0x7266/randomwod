import { useState } from "react";
import getWod from "../util/getWod.js";
import Card from "./Card.js";

export default function Wod() {
  const [card, setCard] = useState([]);

  async function getCard() {
    const wod = await getWod();
    console.log(wod);
    setCard(<Card text={wod.name} type={wod.type} timecap={wod.timecap} movements={wod.movements}/>);
  };

  return (
    <section className="wodSection">
      <button className="btn" onClick={getCard}>
        RANDOM GIRL
      </button>
      <div>{card}</div>
    </section>
  );
};
