import React, { useState } from "react";
import UseGame from "./useGame";
import { useTranslation } from "react-i18next";

const Game = () => {
  const { t } = useTranslation("translate");
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
    <div className="w-full min-h-84 h-fit bg-white dark:bg-gray-600 py-10">
      <div className="w-[95%] xl:w-[90%] mx-auto">
        {starter && (
          <div className="max-w-xl mx-auto">
            <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur shadow-xl p-6 sm:p-10">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-center tracking-tight text-gray-900 dark:text-white">
                {t("startcoment")}
              </h1>


              <button
                className="mt-8 w-full flex items-center justify-center rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 active:scale-[0.98] transition shadow-md"
                onClick={startGame}
              >
                <img
                  src="logo.png"
                  alt="logo_start it"
                  className="w-44 sm:w-60 md:w-72 py-4 drop-shadow"
                />
              </button>
            </div>

            <div className="mt-6 flex justify-center gap-2 text-xs text-gray-500 dark:text-white/50">
              <span className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10">
                i18n
              </span>
              <span className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10">
                dark mode
              </span>
              <span className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10">
                mobile friendly
              </span>
            </div>
          </div>
        )}

        {gameMode && (
          <div className="w-full max-w-3xl mx-auto">
            <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur shadow-xl p-4 sm:p-6">
              <UseGame onClose={closeGame} />
            </div>

            <div className="mt-4 flex justify-center">
              <button
                onClick={closeGame}
                className="text-sm px-4 py-2 rounded-full bg-black/5 dark:bg-white/10 text-gray-700 dark:text-white/80 hover:bg-black/10 dark:hover:bg-white/15 transition"
              >
                ← Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
