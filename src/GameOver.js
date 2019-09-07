import React from "react";

export default function GameOver({ score }) {
  return (
    <div className="go" id="gocontainer">
      <div className="go">
        <h1 className="game-over">Game Over</h1>
        <h3>Scored: {score}</h3>
        <button
          type="button"
          class="btn btn-info"
          id="play-again"
          onClick={() => window.location.reload()}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
