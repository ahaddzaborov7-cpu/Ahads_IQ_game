import React from "react";
import { useTranslation } from "react-i18next";

const Conteynear4 = () => {
  const { t } = useTranslation("translate");

  const listKeys = ["shower", "bed", "tv", "wifi", "extra", "special"];

  return (
    <div className="w-[99.9%] dark:bg-gray-700 py-20">
      <h1 className="text-blue-700 text-5xl w-fit mx-auto my-10">
        {t("conteynear4.title")}
      </h1>

      <div className="flex-row sm:flex w-[80%] mx-auto justify-between gap-5">
        <div className="flex items-center gap-5">
          <img src="boy_left.png" alt={t("conteynear4.boyAlt")} className="hidden xl:flex" />

          <div className=" mx-auto sm:w-fit h-fit flex flex-col gap-5 border-2 border-blue-700 px-10 py-10 rounded-3xl ">
            <img src="icon_for_light.png" alt={t("conteynear4.iconAlt")} />

            <h2 className="text-blue-700 text-xl w-fit mx-auto my-10">
              {t("conteynear4.single.title")}
            </h2>

            <div className="dark:text-white">
              {listKeys.map((k) => (
                <li key={k}>
                  <ul>{t(`conteynear4.features.${k}`)}</ul>
                </li>
              ))}
            </div>

            <h2 className="text-blue-700 text-xl w-fit mx-auto">
              {t("conteynear4.priceLabel")}
            </h2>
            <h1 className="text-red-700 text-xl w-fit mx-auto">
              {t("conteynear4.single.price")}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className=" mx-auto mt-10 sm:mt-0 w-fit h-fit flex flex-col gap-5 border-2 border-blue-700 px-10 py-10 rounded-3xl">
            <img src="icon_for_light.png" alt={t("conteynear4.iconAlt")} />

            <h2 className="text-blue-700 text-xl w-fit mx-auto my-10">
              {t("conteynear4.double.title")}
            </h2>

            <div className="dark:text-white">
              {listKeys.map((k) => (
                <li key={k}>
                  <ul>{t(`conteynear4.features.${k}`)}</ul>
                </li>
              ))}
            </div>

            <h2 className="text-blue-700 text-xl w-fit mx-auto">
              {t("conteynear4.priceLabel")}
            </h2>
            <h1 className="text-red-700 text-xl w-fit mx-auto">
              {t("conteynear4.double.price")}
            </h1>
          </div>

          <img src="girl_right.png" alt={t("conteynear4.girlAlt")} className="hidden xl:flex" />
        </div>
      </div>
    </div>
  );
};

export default Conteynear4;
