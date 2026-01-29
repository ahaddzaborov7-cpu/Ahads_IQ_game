import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Switch from "./swich";
import Translaytor from "./translaytor/translaytor";

const Header = ({ url }) => {
  const [appList, setAppList] = useState(false);

  const openList = () => setAppList(true);
  const closeLine = () => setAppList(false);

  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-transparent h-18"></div>

      <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/90 flex items-center justify-between z-60">
        <div className="flex dark:text-amber-50 items-center w-[95%] mx-auto justify-between px-5 py-5 xl:w-[90%]">
          <div className="flex w-fit gap-20 items-center">
            <div className="w-25 flex gap-2 items-center">
              <img src={url} alt="logo" className="w-45" />
            </div>
          </div>

          <div className="hidden xl:flex w-fit gap-15 justify-between items-center">
            <a
              href=""
              className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 dark:text-blue-100 font-bold"
            >
              {t("header.navHome")}
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-100"
            >
              {t("header.navAboutHotel")}
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-100"
            >
              {t("header.navBenefits")}
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-100"
            >
              {t("header.navRooms")}
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-100"
            >
              {t("header.navReviews")}
            </a>
          </div>

          <div className="flex items-center gap-5">
            <button onClick={openList} className="xl:hidden min-w-10">
              <img className="xl:hidden" src="/burger.png" alt="burger" />
            </button>

            <Switch />
            <Translaytor />

            <button className="hidden sm:flex border-2 border-solid border-blue-500 text-blue-500 px-5 py-2 rounded-2xl dark:border-blue-300 dark:text-blue-300">
              {t("header.callBack")}
            </button>
          </div>
        </div>
      </header>

      <div>
        {appList && (
          <div className="absolute top-[15%] z-50 bg-white w-full min-w-90 dark:bg-gray-900/90">
            <button onClick={closeLine} className="ml-15 mt-10">
              <img src="closeLine.png" alt="closeLine" />
            </button>

            <div className="w-full h-auto py-10 px-10">
              <div className="full lg:flex justify-between w-[90%] mx-auto items-center">
                <div className="flex flex-col five:flex-row w-full gap-5 max-w-120">
                  <a
                    href=""
                    className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 dark:text-blue-100 font-bold"
                  >
                    {t("header.navHome")}
                  </a>
                  <a
                    href=""
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-100"
                  >
                    {t("header.navAboutHotel")}
                  </a>
                  <a
                    href=""
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-100"
                  >
                    {t("header.navBenefits")}
                  </a>
                  <a
                    href=""
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-100"
                  >
                    {t("header.navRooms")}
                  </a>
                  <a
                    href=""
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-100"
                  >
                    {t("header.navReviews")}
                  </a>
                </div>

                <button className="hidden sm:flex border-2 border-solid border-blue-500 text-blue-500 px-5 py-2 rounded-2xl dark:border-blue-300 dark:text-blue-300 max-w-45 max-h-11">
                  {t("header.callBack")}
                </button>

                <div className="flex flex-col mt-5">
                  <h3 className="text-gray-600 dark:text-gray-400">{t("header.addressLabel")}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{t("header.addressValue")}</p>
                  <h1 className="dark:text-white">{t("header.phone1")}</h1>
                  <h1 className="dark:text-white">{t("header.phone2")}</h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
















