import React from "react";
import { useTranslation } from "react-i18next";

const Conteynear6 = () => {
  const { t } = useTranslation("translate");

  return (
    <section className="w-full py-10">
      <div className="w-[95%] xl:w-[90%] mx-auto">

        {/* DESKTOP */}
        <div className="hidden lg:block relative">
          <img
            src="map_big.png"
            alt={t("conteynear6.mapAlt")}
            className="w-full rounded-3xl"
          />

          <div
            className="
              absolute left-8 top-8
              bg-white rounded-3xl shadow-2xl
              px-8 py-8 w-100
            "
          >
            <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-6">
              {t("conteynear6.title")}
            </h2>

            <div className="text-gray-700 space-y-3">
              <p className="text-sm font-semibold">
                {t("conteynear6.addressLabel")}
              </p>
              <p className="text-sm text-gray-600">
                {t("conteynear6.address")}
              </p>

              <p className="text-xl font-semibold text-gray-900 mt-4">
                {t("conteynear6.phone1")}
              </p>
              <p className="text-xl font-semibold text-gray-900">
                {t("conteynear6.phone2")}
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET */}
        <div className="block lg:hidden">
          <img
            src="map_smal.png"
            alt={t("conteynear6.mapAlt")}
            className="w-full rounded-3xl"
          />

          <div className="bg-white rounded-3xl shadow-2xl px-8 py-8 mt-6 max-w-220 mx-auto">
            <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-6">
              {t("conteynear6.title")}
            </h2>

            <div className="text-gray-700 space-y-3">
              <p className="text-sm font-semibold">
                {t("conteynear6.addressLabel")}
              </p>
              <p className="text-sm text-gray-600">
                {t("conteynear6.address")}
              </p>

              <p className="text-xl font-semibold text-gray-900 mt-4">
                {t("conteynear6.phone1")}
              </p>
              <p className="text-xl font-semibold text-gray-900">
                {t("conteynear6.phone2")}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Conteynear6;
