import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("translate");

  return (
    <footer className="w-full bg-[#1f1f1f] text-gray-200">
      <div className="w-[95%] xl:w-[90%] mx-auto py-10">
        <div
          className="
            grid grid-cols-1 gap-10
            five:grid-cols-2
            lg:grid-cols-4
            items-start
          "
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <img
                src="logo.png"
                alt={t("footer.logoAlt")}
                className="w-44 h-14 object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-blue-500 font-semibold">
              {t("footer.nav.title")}
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition">
                  {t("footer.nav.home")}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  {t("footer.nav.about")}
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition">
                  {t("footer.nav.benefits")}
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition">
                  {t("footer.nav.rooms")}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition">
                  {t("footer.nav.reviews")}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-blue-500 font-semibold">
              {t("footer.quick.title")}
            </h3>

            <div className="flex flex-col gap-3 max-w-150">
              <button className="bg-orange-600 hover:bg-orange-500 transition rounded-md py-2 px-4 text-sm font-semibold text-white">
                {t("footer.quick.book")}
              </button>

              <button className="border border-blue-500 text-blue-400 hover:text-blue-300 hover:border-blue-300 transition rounded-md py-2 px-4 text-sm font-semibold">
                {t("footer.quick.callback")}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-blue-500 font-semibold">
              {t("footer.contacts.title")}
            </h3>

            <div className="text-sm flex flex-col gap-2">
              <p>
                <span className="font-semibold">
                  {t("footer.contacts.addressLabel")}
                </span>{" "}
                <span className="text-gray-300">
                  {t("footer.contacts.address")}
                </span>
              </p>
              <p className="text-gray-300">
                {t("footer.contacts.phone1")}
              </p>
              <p className="text-gray-300">
                {t("footer.contacts.phone2")}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-center text-xs text-gray-400">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
