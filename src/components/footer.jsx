import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("translate");

  return (
    <footer className="w-full w-[100%] bg-gray-200 dark:bg-[#1f1f1f] text-gray-200">
      <div className="w-[95%] xl:w-[90%] mx-auto py-10">
        <div
          className="
            grid grid-cols-1 gap-10
            five:grid-cols-2
            lg:grid-cols-4
            items-start
          "
        >
         
            <div className="flex items-start gap-3 min-w-50">
              <img
                src="logo.png"
                alt={t("footer.logoAlt")}
                className="w-54 h-54 object-contain"
              />
            </div>
       

          <div className="flex flex-col gap-4">
            <h3 className="text-blue-500 font-semibold">
              {t("footer.nav.title")}
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="#home" className=" text-gray-500 dark:text-gray-300 hover:text-white transition">
                  {t("footer.nav.home")}
                </a>
              </li>
              <li>
                <a href="#about" className=" text-gray-500 dark:text-gray-300 hover:text-white transition">
                  {t("footer.nav.about")}
                </a>
              </li>
              <li>
                <a href="#benefits" className=" text-gray-500 dark:text-gray-300 hover:text-white transition">
                  {t("footer.nav.benefits")}
                </a>
              </li>
              <li>
                <a href="#rooms" className=" text-gray-500 dark:text-gray-300 hover:text-white transition">
                  {t("footer.nav.rooms")}
                </a>
              </li>
              <li>
                <a href="#reviews" className=" text-gray-500 dark:text-gray-300 hover:text-white transition">
                  {t("footer.nav.reviews")}
                </a>
              </li>
            </ul>
          </div>


          <div className="flex flex-col gap-4">
            <h3 className="text-blue-500 font-semibold">
              {t("footer.contacts.title")}
            </h3>

            <div className="text-sm flex flex-col gap-2">
              <p>
                <span className="font-semibold  text-gray-500 dark:text-gray-300">
                  {t("footer.contacts.addressLabel")}
                </span>{" "}
                <span className=" text-gray-500 dark:text-gray-300 ">
                  {t("footer.contacts.address")}
                </span>
              </p>
              <p className=" text-gray-500 dark:text-gray-300 ">
                {t("footer.contacts.phone1")}
              </p>
              <p className=" text-gray-500 dark:text-gray-300 ">
                {t("footer.contacts.phone2")}
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
