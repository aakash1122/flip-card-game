import React, { createContext, useState, useEffect } from "react";
import _ from "lodash";

export const GameContext = createContext();

function GameContextProvider(props) {
  const [cards, setCards] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ]);

  let [score, setScore] = useState(0);

  useEffect(() => {
    setCards(_.shuffle(cards));
  }, []);

  return (
    <GameContext.Provider value={{ cards, score, setScore }}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
