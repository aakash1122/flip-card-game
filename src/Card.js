import React, { useState } from "react";
import { TweenMax } from "gsap/TweenMax";
import love from "./assets/love.png";
import bomb from "./assets/bomb.png";
import q from "./assets/q.png";
import scream from "./assets/scream.mp3";

export default function Card({ item, increaseScore, go }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      if (item) {
        increaseScore();
      } else {
        const audio = new Audio(scream);
        audio.play();
        go(true);
      }
    }
  };

  return (
    <div className="card" onClick={handleClick} id={clicked ? "animate" : null}>
      {clicked ? (
        <img className="game-image" src={item ? love : bomb} />
      ) : (
        <img src={q} />
      )}
    </div>
  );
}
