import React, { useState } from "react";
import UseGame from "./useGame";

const Game = () => {
  const [starter, setStarter] = useState(true);
  const [gameMode, setGameMode] = useState(false);

  const startGame = () => {
    setStarter(false);
    setGameMode(true);
  };
  const closeGame = () => {
    setStarter(true);
    setGameMode(false);
  };
  return (
    <div className="w-full min-h-84 h-fit bg-white dark:bg-gray-600">
      {starter && (
        <div className="w-fit m-auto transition">
          <button className="w-fit" onClick={startGame}>
            <img src="logo.png" alt="logo_start it" className="w-83" />
          </button>
        </div>
      )}
      {gameMode && (
          <div className="w-100 sm:w-150 min-w-80 m-auto">
            <UseGame onClose={closeGame}/>
            </div>
      )}
    </div>
  );
};

export default Game;
