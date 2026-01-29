import React from "react";
import { useTranslation } from "react-i18next";

const Contaynear5 = () => {
  const { t } = useTranslation("translate");

  const cards = [
    { id: 1, url: "user.png", key: "user1" },
    { id: 2, url: "user.png", key: "user2" },
    { id: 3, url: "user.png", key: "user3" },
    { id: 4, url: "user.png", key: "user4" }
  ];

  return (
    <div className="w-[99.9%] dark:bg-gray-700 py-20">
      <h1 className="text-blue-700 text-5xl w-fit mx-auto my-10">
        {t("contaynear5.title")}
      </h1>

      <div className="flex flex-wrap w-[90%] mx-auto gap-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-3xl max-w-[99.9%] gap-5 sm:max-w-[40%] xl:max-w-[20%] flex-col mx-auto text-center dark:bg-[#212539] dark:text-gray-50 w-fit px-5 py-10 shadow-2xl"
          >
            <img
              src={card.url}
              alt={t("contaynear5.userAlt")}
              className="mx-auto"
            />

            <h1 className="max-w-[80%] mx-auto text-blue-700 text-2xl">
              {t(`contaynear5.${card.key}.name`)}
            </h1>

            <p className="max-w-[80%] mx-auto">
              {t(`contaynear5.${card.key}.text`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contaynear5;
