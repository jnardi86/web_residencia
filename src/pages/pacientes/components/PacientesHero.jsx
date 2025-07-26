import React from "react";
import { useGlobal } from "../../../hooks/useGlobal";
import { Zoom, Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const PacientesHero = ({ contactoRef }) => {
  const { mobileView } = useGlobal();
  const { t } = useTranslation("translation", {keyPrefix: "patients"})

  const handleScrollToContact = () => {
    if (contactoRef?.current) {
      contactoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${mobileView ? '/images/hero_img_patients_mobile.png' : '/images/hero_img_patients_desktop.png'})` }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-Blue bg-opacity-60 tablet:bg-opacity-80"></div>

      {/* Contenido con efectos */}
      <div className="relative z-10 text-White px-6 desktop:mt-4 laptop1:px-20">
        <Zoom triggerOnce duration={1500}>
          <h1 className="w-full font-Poppins text-center font-Semibold text-5xl text-White leading-tight mb-8 tablet:leading-relaxed desktop:text-start laptop1:text-6xl laptop1:leading-[5rem]">
          {t("patients_hero_title1")} <span className="bg-White text-Blue px-4 font-ExtraBold">{t("patients_hero_title2")}</span> {t("patients_hero_title3")} <span className="bg-White text-Blue px-4 font-ExtraBold">{t("patients_hero_title4")}</span>
          </h1>
        </Zoom>

        <Fade direction="up" delay={500} triggerOnce>
          <p className="font-Montserrat text-xl mb-10 text-center desktop:text-2xl desktop:text-start">
          {t("patients_hero_paragraph")}
          </p>
        </Fade>

        <Fade direction="up" delay={800} triggerOnce>
          <div className="w-full flex justify-center">
            <button
              onClick={handleScrollToContact}
              className="text-center bg-White cursor-pointer text-Blue font-Poppins text-lg tablet:mt-10 tablet:text-xl laptop2:text-2xl font-Bold py-4 px-6 rounded-lg shadow-DarkBlue shadow-lg transition-transform duration-1000 ease-in-out hover:bg-Blue hover:text-White hover:scale-110"
            >
              {t("patients_hero_text_button")}
            </button>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default PacientesHero;
