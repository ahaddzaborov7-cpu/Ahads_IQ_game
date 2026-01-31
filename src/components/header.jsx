import React from "react";
import Switch from "./swich";
import Translaytor from "./translaytor/translaytor";

const Header = ({ url }) => {
  return (
    <div>
      <div className="h-20 sm:h-24 dark:bg-gray-600" />

      <header className="fixed top-0 left-0 w-full z-40">
        <div className="mx-auto w-[95%] xl:w-[90%] mt-3">
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur shadow-lg">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center overflow-hidden">
                  <img src={url} alt="logo" className="w-8 h-8 object-contain" />
                </div>

                <div className="leading-tight">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    IQ Game
                  </div>
                  <div className="text-xs text-gray-500 dark:text-white/60">
                    Id & fun
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10">
                  <Switch />
                </div>
                <div className="px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10">
                  <Translaytor />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
