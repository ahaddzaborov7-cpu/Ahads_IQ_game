import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { questions } from "./qw";

const UseGame = ({ onClose }) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || "ru").slice(0, 2);

  const [cnt, setCnt] = useState(0);
  const [q, setQ] = useState(0);

  const [pick, setPick] = useState(null);
  const [lock, setLock] = useState(false);

  const [modal, setModal] = useState(false);

  const [lives, setLives] = useState(3);

  const [best, setBest] = useState(() => {
    const saved = localStorage.getItem("quiz_best");
    return saved ? Number(saved) : 0;
  });

  const wap = questions[q];

  const total = questions.length;
  const progress = Math.round(((q + 1) / total) * 100);

  const labels = useMemo(() => {
    const map = {
      ru: {
        best: "Рекорд",
        close: "Закрыть",
        wrong: "Неправильно",
        score: "Твой счёт",
        gameOver: "Игра окончена",
        result: "Результат",
        question: "Вопрос",
        of: "из",
        restart: "Сыграть снова",
        lives: "Жизни",
      },
      tj: {
        best: "Рекорд",
        close: "Пӯшидан",
        wrong: "Нодуруст",
        score: "Ҳисоб",
        gameOver: "Бозӣ тамом",
        result: "Натиҷа",
        question: "Савол",
        of: "аз",
        restart: "Боз оғоз кун",
        lives: "Ҷонҳо",
      },
      en: {
        best: "Best",
        close: "Close",
        wrong: "Wrong",
        score: "Score",
        gameOver: "Game over",
        result: "Result",
        question: "Question",
        of: "of",
        restart: "Play again",
        lives: "Lives",
      },
    };
    return map[lang] || map.en;
  }, [lang]);

  useEffect(() => {
    if (cnt > best) {
      setBest(cnt);
      localStorage.setItem("quiz_best", String(cnt));
    }
  }, [cnt, best]);

  const reset = () => {
    setCnt(0);
    setQ(0);
    setPick(null);
    setLock(false);
    setModal(false);
    setLives(3);
    onClose?.();
  };

  const restartInside = () => {
    setModal(false);
    setCnt(0);
    setQ(0);
    setPick(null);
    setLock(false);
    setLives(3);
  };

  const nextQ = () => {
    setPick(null);
    setLock(false);

    if (q + 1 >= questions.length) {
      setModal(true);
      return;
    }
    setQ((p) => p + 1);
  };

  const loseLifeOrEnd = () => {
    setLives((prev) => {
      const next = prev - 1;
      if (next <= 0) {
        setTimeout(() => setModal(true), 250);
        return 0;
      }
      setTimeout(() => {
        setPick(null);
        setLock(false);
      }, 450);
      return next;
    });
  };

  const pickAns = (idx) => {
    if (lock) return;

    setPick(idx);
    setLock(true);

    if (idx === wap.tId) {
      setCnt((s) => s + 1);
      setTimeout(nextQ, 520);
    } else {
      loseLifeOrEnd();
    }
  };

  const optCls = (idx) => {
    const base =
      "w-full text-left px-4 sm:px-5 py-3 sm:py-4 rounded-2xl border transition font-semibold " +
      "focus:outline-none focus:ring-2 focus:ring-blue-500/40 " +
      "active:scale-[0.99]";

    if (pick === null) {
      return (
        base +
        " border-black/5 dark:border-white/10 " +
        "bg-white/70 dark:bg-white/5 backdrop-blur " +
        "text-gray-900 dark:text-white " +
        "hover:bg-white dark:hover:bg-white/10 hover:shadow-md"
      );
    }

    const ok = idx === wap.tId;
    const bad = idx === pick && !ok;

    if (ok)
      return (
        base +
        " border-green-500/60 bg-green-500/10 dark:bg-green-500/15 " +
        "text-gray-900 dark:text-white shadow-sm"
      );

    if (bad)
      return (
        base +
        " border-red-500/60 bg-red-500/10 dark:bg-red-500/15 " +
        "text-gray-900 dark:text-white shadow-sm"
      );

    return (
      base +
      " border-black/5 dark:border-white/10 " +
      "bg-white/40 dark:bg-white/5 " +
      "text-gray-700 dark:text-white/60 opacity-80"
    );
  };

  const letters = ["A", "B", "C", "D"];
  const isLast = q + 1 >= questions.length;
  const end = pick !== null && pick === wap.tId && isLast;
  const gameEndedByLives = lives <= 0;

  const hearts = Array.from({ length: 3 }, (_, i) => i < lives);

  return (
    <div className="w-[95%] max-w-2xl mx-auto">
      <div className="mb-4 sm:mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="px-3 py-2 rounded-2xl bg-black/5 dark:bg-white/10 text-gray-900 dark:text-white">
            ✅ <span className="font-extrabold">{cnt}</span>
          </div>

          <div className="px-3 py-2 rounded-2xl bg-black/5 dark:bg-white/10 text-gray-900 dark:text-white">
            🏆 
            <span className="font-extrabold text-yellow-500">{best}</span>
          </div>

          <div className="px-3 py-2 rounded-2xl bg-black/5 dark:bg-white/10 text-gray-900 dark:text-white flex items-center gap-2">
            
            <span className="flex items-center gap-1">
              {hearts.map((full, i) => (
                <span
                  key={i}
                  className={
                    full
                      ? "text-red-500 drop-shadow-sm"
                      : "text-gray-400 dark:text-white/30"
                  }
                >
                  ♥
                </span>
              ))}
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="px-3 py-2 rounded-2xl bg-black/5 dark:bg-white/10 text-gray-700 dark:text-white/80 hover:bg-black/10 dark:hover:bg-white/15 transition"
        >
          ✖
        </button>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-white/60 mb-2">
          <span className="font-semibold">{progress}%</span>
        </div>

        <div className="h-2 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-blue-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur shadow-xl p-5 sm:p-7">
        <h2 className="text-lg sm:text-2xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-5">
          {wap.question[lang]}
        </h2>

        <div className="grid gap-3">
          {wap.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => pickAns(idx)}
              className={optCls(idx)}
              disabled={lock || modal || gameEndedByLives}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/10 text-gray-800 dark:text-white/80 font-extrabold">
                  {letters[idx] || idx + 1}
                </span>

                <span className="flex-1">{opt[lang]}</span>

                {pick !== null && idx === wap.tId && (
                  <span className="text-green-500 font-extrabold">✓</span>
                )}
                {pick !== null && idx === pick && idx !== wap.tId && (
                  <span className="text-red-500 font-extrabold">✕</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 z-70 flex items-center justify-center    p-4">
          <div className="w-full max-w-md rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-black/5 dark:border-white/10 shadow-2xl p-6">
            {end ? (
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  🎉 {labels.gameOver}
                </h3>
                <p className="mt-2 text-gray-700 dark:text-white/80">
                  {labels.result}:{" "}
                  <b className="text-gray-900 dark:text-white">{cnt}</b>
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  😭 {labels.wrong}
                </h3>
                <p className="mt-2 text-gray-700 dark:text-white/80">
                  {labels.score}:{" "}
                  <b className="text-gray-900 dark:text-white">{cnt}</b>
                </p>
              </div>
            )}

            <div className="mt-5 flex items-center justify-end gap-3">
              <button
                className="px-4 py-2 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-white/10 transition"
                onClick={reset}
              >
                {labels.close}
              </button>

              <button
                className="px-4 py-2 rounded-2xl bg-blue-500 text-white font-semibold hover:opacity-95 active:scale-[0.99] transition"
                onClick={restartInside}
              >
                {labels.restart}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UseGame;
