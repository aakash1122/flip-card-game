import React, { useContext, useState } from "react";
import { GameContext } from "./context/GameContext";
import Card from "./Card";
import GameOver from "./GameOver";

function App() {
  let { cards, setScore, score } = useContext(GameContext);
  let [gameOver, setgameOver] = useState(false);

  const increaseScore = () => {
    setScore(++score);
  };

  return (
    <div className="container">
      {gameOver ? <GameOver score={score} /> : null}
      <h2 className="mt-1 ">Score: {score}</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {cards.map(card => {
          return (
            <Card item={card} increaseScore={increaseScore} go={setgameOver} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
