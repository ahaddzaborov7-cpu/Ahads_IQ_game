import React from "react";
import { useTranslation } from "react-i18next";

const Translaytor = () => {
  const { i18n } = useTranslation();
  return (
    <div>
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="bg-white text-black border rounded px-2 py-1
             dark:bg-gray-700 dark:text-white dark:border-gray-600"
      >
        <option className="dark:bg-gray-700 dark:text-white" value="en">
          en
        </option>
        <option className="dark:bg-gray-700 dark:text-white" value="ru">
          ru
        </option>
        <option className="dark:bg-gray-700 dark:text-white" value="ko">
          kr
        </option>
        <option className="dark:bg-gray-700 dark:text-white" value="tj">
          tj
        </option>
      </select>
    </div>
  );
};

export default Translaytor;
