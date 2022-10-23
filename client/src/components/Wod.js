import { useEffect, useState } from "react";

export default function Wod() {
  const [wod, setWod] = useState([]);

  async function getWod(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/");
    const data = await response.json();
    console.log(data);
    setWod(data);
  }

  //useEffect(() => {getWod()}, []);

  return (
    <main className="d-flex justify-content-center p-3">
      <button className="btn btn-primary" onClick={getWod}>
        CLICK
      </button>
      <div className="info">
        <div className="name">{wod.name}</div>
        <div className="description">{wod.description}</div>
        <div className="equipment">{wod.equipment}</div>
        <div className="excersices">{wod.excercises}</div>
      </div>
    </main>
  );
}
