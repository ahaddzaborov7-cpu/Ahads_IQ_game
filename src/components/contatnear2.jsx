import React from "react";
import { useTranslation } from "react-i18next";

const Contatnear2 = () => {
  const { t } = useTranslation("translate");

  return (
    <div>
      <div className="dark:bg-[#212539] py-15 lg:py-30">
        <section className="px-2 md:px-8 lg:px-10 lg:py-15 space-y-10 w-[90%] mx-auto">
          <section className="flex flex-col lg:flex-row md:flex-col-reverse gap-9 items-center text-center lg:text-start justify-between">
            
            <div>
              <img
                src="ilistrution2.png"
                alt={t("contatnear2.imageAlt")}
                className="w-120"
              />
            </div>

            <div className="flex flex-col lg:items-start items-center gap-5">
              <h1 className="text-blue-600 font-bold text-6xl xl:text-7xl">
                {t("contatnear2.title")}
              </h1>

              <p className="hidden xsm:flex items-center justify-center">
                <span className="text-1xl dark:text-gray-200 max-w-150">
                  {t("contatnear2.text1")}
                </span>
              </p>

              <p className="hidden xsm:flex items-center justify-center">
                <span className="text-1xl dark:text-gray-200 max-w-150">
                  {t("contatnear2.text2")}
                </span>
              </p>
            </div>

          </section>
        </section>
      </div>
    </div>
  );
};

export default Contatnear2;
