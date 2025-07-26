import React from "react";

import { useGlobal } from "../../../../hooks/useGlobal";
import { useTranslation } from "react-i18next";

const HomeCursoBrief = () => {

  const { t } = useTranslation ("translation", { keyPrefix: "home" });
  const { mobileView } = useGlobal()

  return (
    <div className="flex flex-col items-center m-auto w-full tablet:w-3/4 mt-60">
      <h1 className="font-Poppins text-center text-5xl font-ExtraBold text-Black leading-snug mb-2">
        {t('home_brief_title')}
        <span className="text-White bg-Blue px-2 py-1">{t('home_brief_title_1')}</span>
        <span className="text-White bg-Blue px-2 py-1">{t('home_brief_title_2')}</span>
      </h1>
      <p className="font-Poppins font-Bold text-Black text-2xl mb-4">{t('home_brief_title_3')}</p>
      <div className="flex items-start justify-center">
        <p className="font-Poppins text-Black font-Regular text-start text-xl tablet:text-center laptop2:text-2xl px-10">
          {t('home_brief_paragraph')}
        </p>
      </div>
    </div>
  );
};

export default HomeCursoBrief;
