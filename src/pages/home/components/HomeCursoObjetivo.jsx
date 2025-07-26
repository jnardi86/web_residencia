import React from "react";
import { useGlobal } from "../../../hooks/useGlobal";
import { useTranslation } from "react-i18next";


const HomeCursoObjetivo = () => {

  const { mobileView } = useGlobal()
  const { t } = useTranslation("translation", { keyPrefix: "home" });

  return (
    <div className="w-full laptop1:w-3/4 m-auto mt-60 p-5 flex">
      <div className="flex flex-col justify-start laptop1:justify-center items-center p-5">
        <h2 className="font-Poppins font-Bold text-Black text-5xl mb-4">{t('home_goals_title')}</h2>
        <p className="font-Poppins text-Black font-Regular text-start text-xl tracking-tight tablet:text-center laptop2:text-2xl mb-8">
          {t('home_goals_paragraph')}
        </p>
        {/* Botón de descarga */}
        <h3 className="font-Poppins font-Bold text-Black text-center text-3xl mb-4">{t('home_goals_download_title')}</h3>
        <p className="font-Poppins text-Black font-Regular text-start text-xl tracking-tight mb-8 tablet:text-center laptop2:text-2xl">
        {t('home_goals_download_paragraph')}
        </p>
        <a
          href="/pdfs/info_residencia.pdf" // 📌 Ruta donde está el PDF en `public/pdfs`
          download="Programa_Residencia.pdf"
          className="text-center bg-Blue cursor-pointer text-White font-Poppins text-lg tablet:mt-10 tablet:text-xl laptop2:text-2xl font-Bold py-4 px-6 rounded-lg shadow-DarkBlue shadow-lg hover:bg-White hover:text-Blue hover:border-solid hover:border-Blue hover:border-2 hover:scale-110 transition-transform duration-1000 ease-in-out"
        >
          {t('home_goals_download_text_button')}
        </a>
      </div>
    </div>
  );
};

export default HomeCursoObjetivo;
