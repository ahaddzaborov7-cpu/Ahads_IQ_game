import React from "react";
// import { useTranslation } from "react-i18next";
import Switch from "./swich";
import Translaytor from "./translaytor/translaytor";

const Header = ({ url }) => {
  // const { t } = useTranslation();

  return (
    <div>
      <div className="bg-transparent h-24"></div>

      <header className="fixed top-0 left-0 w-full bg-gray-400/80 dark:bg-gray-900/90 flex items-center justify-between z-60">
        <div className="flex dark:text-amber-50 items-center w-[95%] mx-auto justify-between px-5  xl:w-[90%]">
          <div className="flex w-fit gap-20 items-center">
              <img src={url} alt="logo" className="w-25" />
          </div>
          <div className="flex items-center gap-5">
            <Switch />
            <Translaytor />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
















