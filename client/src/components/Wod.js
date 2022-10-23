import { useState } from "react";

export default function Wod() {
  const [wod, setWod] = useState([]);

  async function getWod(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/");
    const data = await response.json();
    //console.log(data);
    let key = Math.floor(Math.random() * Object.keys(data).length);
    console.log(key);
    let girl = Object.keys(data)[key];
    //console.log(data[girl]);
    setWod(data[girl]);
  }

  //useEffect(() => {getWod()}, []);

  return (
    <section className="wodSection">
      <button className="btn" onClick={getWod}>
        RANDOM GIRL
      </button>
      <div className="wod">
        <div className="name">{wod.name}</div>
        <div className="info">
          <div className="type">{wod.type}</div>
          <div className="timecap">{wod.timecap}</div>
        </div>
        <div className="movements">{wod.movements}</div>
      </div>
    </section>
  );
}
