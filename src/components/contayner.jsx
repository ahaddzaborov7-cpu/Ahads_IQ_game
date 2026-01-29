import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contayner = ({ url }) => {
  const { t } = useTranslation("translate");
  const [modal, setModal] = useState(false);
  const [emage, setEmage] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const cloceAndShowEmage = () => {
    setEmage(true);
    setTimeout(() => {
      setEmage(false);
    }, 2000);
  };

  return (
    <div className="w-full ">
      <div className="dark:bg-[#212539] py-5 lg:py-10">
        <section className="px-2 md:px-8 lg:px-10 lg:py-15 space-y-10 w-[90%] mx-auto">
          <section className="flex flex-col lg:flex-row md:flex-col-reverse gap-9 items-center text-center lg:text-start justify-between">
            <div className="flex flex-col lg:items-start items-center gap-5">
              <h1 className="text-blue-600 font-bold text-6xl xl:text-7xl">
                {t("contayner.bay")}
              </h1>

              <p className="hidden xsm:flex items-center justify-center">
                <span className="text-1xl dark:text-gray-200 max-w-150">
                  {t("contayner.description")}
                </span>
              </p>

              <button
                onClick={openModal}
                className="bg-orange-700 hover:bg-orange-500 transition-colors duration-1000 rounded-xl text-white py-3 px-10"
              >
                {t("contayner.bookBtn")}
              </button>
            </div>

            <div>
              <img src={url} alt={t("contayner.imageAlt")} className="w-120" />
            </div>
          </section>
        </section>
      </div>

      {emage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 dark:bg-gray-600/50 z-50">
          <div className="bg-white dark:bg-[#212539] w-[80%] max-w-130 h-fit flex flex-col px-10 py-10 rounded-3xl gap-5">
            <img
              src="galochka.png"
              alt={t("contayner.checkAlt")}
              className="mx-auto"
            />
            <h1 className="text-3xl text-blue-500 font-bold mx-auto">
              {t("contayner.successTitle")}
            </h1>
          </div>
        </div>
      )}

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 dark:bg-gray-600/50 z-50">
          <div className="bg-white dark:bg-[#212539] w-[80%] max-w-130 h-fit flex flex-col px-10 py-10 rounded-3xl gap-5">
            <h1 className="text-3xl text-blue-500 font-bold mx-auto">
              {t("contayner.formTitle")}
            </h1>

            <p className="text-gray-500 ">{t("contayner.formDesc")}</p>

            <input
              className="shadow-lg rounded-xl px-10 py-2 dark:text-white"
              type="text"
              placeholder={t("contayner.namePlaceholder")}
              required
            />
            <input
              className="shadow-lg rounded-xl px-10 py-2 dark:text-white"
              type="number"
              placeholder={t("contayner.phonePlaceholder")}
              required
            />
            <input
              className="shadow-lg rounded-xl px-10 py-2 dark:text-white"
              type="tel"
              placeholder={t("contayner.commentPlaceholder")}
              required
            />

            <button
              onClick={() => {
                closeModal();
                cloceAndShowEmage();
              }}
              className="bg-orange-700 hover:bg-orange-500 transition-colors duration-1000 rounded-xl text-white py-3 px-10"
            >
              {t("contayner.sendBtn")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contayner;
