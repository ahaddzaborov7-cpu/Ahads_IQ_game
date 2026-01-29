import React from "react";
import { useTranslation } from "react-i18next";

const Contayner3 = () => {
  const { t } = useTranslation("translate");

  const cards = [
    { id: 1, url: "card_map01.png", key: "wifi" },
    { id: 2, url: "card_map02.png", key: "access" },
    { id: 3, url: "card_map03.png", key: "tv" },
    { id: 4, url: "card_map04.png", key: "parking" },
    { id: 5, url: "card_map05.png", key: "cleaning" },
    { id: 6, url: "card_map06.png", key: "laundry" },
    { id: 7, url: "card_map07.png", key: "kitchen" },
    { id: 8, url: "card_map08.png", key: "banquet" },
    { id: 9, url: "card_map09.png", key: "canteen" }
  ];

  return (
    <div className="w-[99.9%] dark:bg-gray-700 py-20">
      <h1 className="text-blue-700 text-5xl w-fit mx-auto my-10">
        {t("contayner3.title")}
      </h1>

      <div className="flex flex-wrap w-[80%] mx-auto gap-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="py-5 rounded-3xl max-w-[99.9%] gap-5 sm:max-w-[40%] xl:max-w-[25%] flex-col mx-auto text-center dark:bg-[#212539] dark:text-gray-50"
          >
            <img
              src={card.url}
              alt={t("contayner3.imgAlt")}
              className="mx-auto"
            />

            <h1 className="max-w-[80%] mx-auto text-blue-700 text-2xl">
              {t(`contayner3.${card.key}.title`)}
            </h1>

            <p className="max-w-[80%] mx-auto">
              {t(`contayner3.${card.key}.desc`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contayner3;
