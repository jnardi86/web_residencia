import React from "react";
import InstrumentalIcon from "./svgIcons/InstrumentalIcon";
import AgendaIcon from "./svgIcons/AgendaIcon";
import LocationIcon from "./svgIcons/LocationIcon";
import AccomodationIcon from "./svgIcons/AccomodationIcon";
import { useTranslation } from "react-i18next";

const HomeCursoResumen = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home" });

  // URL del hotel
  const hotelUrl = "https://www.hoteltomaso.com.ar"; // 🔗 Cambiar por la URL real del hotel

  // Array de objetos para representar cada ítem del resumen
  const resumenItems = [
    {
      id: 1,
      icon: <InstrumentalIcon width="40px" height="40px" fill="#FFF" />,
      mainText: "home_summary_mainItem_1",
    },
    {
      id: 2,
      icon: <AgendaIcon width="40px" height="40px" fill="#FFF" />,
      mainText: "home_summary_mainItem_2",
    },
    {
      id: 3,
      icon: <LocationIcon width="50px" height="50px" fill="#FFF" />,
      mainText: "home_summary_mainItem_3",
      subText: <p className="font-Poppins text-wHITE font-Regular">{t("home_summary_textItem_3")}</p>,
    },
    {
      id: 4,
      icon: <AccomodationIcon width="40px" height="40px" fill="#FFF" />,
      mainText: "home_summary_mainItem_4",
      subText: (
        <a
          href={hotelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-wHITE font-Regular text-xl cursor-pointer hover:underline"
        >
          {t("home_summary_textItem_4")}
        </a>
      ),
    },
  ];

  return (
    <div
      className="relative w-full p-6 mt-60 bg-fixed bg-center bg-cover laptop1:h-[480px] laptop2:h-[580px] laptop2:flex laptop2:flex-col laptop2:justify-center laptop2:items-center"
      style={{
        backgroundImage: "url('/images/galeria/galeria_14.jpg')",
      }}
    >
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-Black opacity-80"></div>

      <div className="relative z-10 text-center tablet:flex tablet:flex-col tablet:items-center">
        <h2 className="font-Poppins text-center text-5xl font-ExtraBold text-White leading-snug px-4 mb-4">
          {t("home_summary_title_1")}
        </h2>

        {/* Contenedor de los ítems */}
        <div className="flex flex-col items-start text-White">
          {resumenItems.map((item) => (
            <div key={item.id} className="w-full flex items-center gap-2 tablet:gap-4 my-3">
              <div className="w-[50px] flex justify-center">{item.icon}</div>

              <div className="flex flex-col text-left">
                <p className="font-Poppins font-Bold text-lg text-White mb-2 tablet:text-base laptop2:text-2xl">
                  {t(item.mainText)}
                </p>
                {item.subText && <div>{item.subText}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCursoResumen;
