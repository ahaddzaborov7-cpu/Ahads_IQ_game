import React, { useEffect, useState } from "react";
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

  const [best, setBest] = useState(() => {
    const saved = localStorage.getItem("quiz_best");
    return saved ? Number(saved) : 0;
  });

  const wap = questions[q];

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
    onClose?.();
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

  const pickAns = (idx) => {
    if (lock) return;

    setPick(idx);
    setLock(true);

    if (idx === wap.tId) {
      setCnt((s) => s + 1);
      setTimeout(nextQ, 550);
    } else {
      setTimeout(() => setModal(true), 450);
    }
  };

  const optCls = (idx) => {
    const base =
      "w-full text-left px-4 py-3 rounded-xl border transition font-semibold text-gray-900 dark:text-white";

    if (pick === null) {
      return `${base} border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700 hover:scale-[1.01]`;
    }

    const ok = idx === wap.tId;
    const bad = idx === pick && !ok;

    if (ok) return `${base} border-green-500 bg-green-100 dark:bg-green-900/40`;
    if (bad) return `${base} border-red-500 bg-red-100 dark:bg-red-900/40`;

    return `${base} border-gray-300 dark:border-gray-500 bg-white/70 dark:bg-gray-700/60 opacity-80`;
  };

  const end = pick !== null && pick === wap.tId && q + 1 >= questions.length;

  return (
    <div className="w-[95%] max-w-2xl mx-auto">
      <div className="mb-5 flex items-center justify-between">
        <div className="text-lg font-bold text-gray-800 dark:text-white">
          ✅: <span className="text-xl">{cnt}</span>
        </div>

        <div className="text-lg font-extrabold text-gray-900 dark:text-white">
          🏆{" "}
          <span className="text-yellow-500">
            {lang === "ru" ? "Рекорд" : lang === "tj" ? "Рекорд" : "Best"}
          </span>
          : <span className="text-xl">{best}</span>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 dark:border-gray-500 bg-gray-50 dark:bg-gray-800 p-5 shadow-sm">
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4">
          {wap.question[lang]}
        </h2>

        <div className="grid gap-3">
          {wap.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => pickAns(idx)}
              className={optCls(idx)}
              disabled={lock}
            >
              <span className="mr-2 opacity-70">
                {idx === 0 ? "A)" : idx === 1 ? "B)" : idx === 2 ? "C)" : "D)"}
              </span>
              {opt[lang]}
            </button>
          ))}
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-5">
            {end ? (
              <>
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
                  🎉
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-200">
                  {lang === "ru"
                    ? `Игра окончена. Результат: ${cnt}`
                    : lang === "tj"
                    ? `Бозӣ тамом. Натиҷа: ${cnt}`
                    : `Game over. Score: ${cnt}`}
                </p>
              </>
            ) : (
              <>
                <p className="mt-2 text-gray-700 dark:text-gray-200">
                  {lang === "ru" ? "Неправильно." : lang === "tj" ? "Нодуруст." : "Wrong."}
                </p>

                <p className="mt-2 text-gray-700 dark:text-gray-200">
                  {lang === "ru"
                    ? "Твой счёт:"
                    : lang === "tj"
                    ? "Ҳисоб:"
                    : "Score:"}
                  <b className="text-gray-900 dark:text-white">{cnt}</b>
                </p>
              </>
            )}

            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:scale-105 transition"
                onClick={reset}
              >
                {lang === "ru" ? "Закрыть" : lang === "tj" ? "Пӯшидан" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UseGame;
