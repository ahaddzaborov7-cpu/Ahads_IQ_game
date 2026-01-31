import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("translate");

  return (
    <footer className="w-full bg-gradient-to-b from-gray-100 to-gray-200 dark:from-slate-950 dark:to-slate-900">
      <div className="w-[95%] xl:w-[90%] mx-auto py-10">
        {/* main box */}
        <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur shadow-xl p-6 sm:p-10">
          <div
            className="
              grid grid-cols-1 gap-10
              five:grid-cols-2
              lg:grid-cols-4
              items-start
            "
          >
            {/* logo */}
            <div className="flex items-start gap-3 min-w-50">
              <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-3 shadow-sm">
                <img
                  src="logo.png"
                  alt={t("footer.logoAlt")}
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
                />
              </div>
            </div>

            {/* nav */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                {t("footer.nav.title")}
              </h3>

              <ul className="flex flex-col gap-2 text-sm">
                {[
                  ["#home", "footer.nav.home"],
                  ["#about", "footer.nav.about"],
                  ["#benefits", "footer.nav.benefits"],
                  ["#rooms", "footer.nav.rooms"],
                  ["#reviews", "footer.nav.reviews"],
                ].map(([href, key]) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="
                        group inline-flex items-center gap-2
                        text-gray-600 dark:text-white/70
                        hover:text-gray-900 dark:hover:text-white
                        transition
                      "
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400/60 dark:bg-white/25 group-hover:bg-blue-500 transition" />
                      {t(key)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* contacts */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                {t("footer.contacts.title")}
              </h3>

              <div className="text-sm flex flex-col gap-2">
                <p className="text-gray-600 dark:text-white/70">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {t("footer.contacts.addressLabel")}
                  </span>{" "}
                  <span className="text-gray-600 dark:text-white/70">
                    {t("footer.contacts.address")}
                  </span>
                </p>

                <p className="text-gray-600 dark:text-white/70">
                  {t("footer.contacts.phone1")}
                </p>
                <p className="text-gray-600 dark:text-white/70">
                  {t("footer.contacts.phone2")}
                </p>

                {/* small badges */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-black/5 dark:bg-white/10 text-gray-700 dark:text-white/80">
                    i18n
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-black/5 dark:bg-white/10 text-gray-700 dark:text-white/80">
                    responsive
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-black/5 dark:bg-white/10 text-gray-700 dark:text-white/80">
                    dark mode
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* bottom line */}
          <div className="mt-10 pt-6 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500 dark:text-white/50">
              © {new Date().getFullYear()} {t("footer.logoAlt")} — All rights reserved.
            </p>

            <div className="text-xs flex gap-4">
              <a
                href="#"
                className="text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
