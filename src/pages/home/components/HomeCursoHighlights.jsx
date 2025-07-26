import React from "react";
import { useTranslation } from "react-i18next";
import { useHomeCursoHighlight } from "./useHomeCursoHighlight";

const HomeCursoHighlights = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home" });
  const { countHoras, countDias, countCirugias, countParticipantes, ref } = useHomeCursoHighlight();

  const highlights = [
    { id: 1, value: countHoras, description: "home_highlights_first_quadrant", bgColor: "bg-[#2f4bc8]" }, // Azul oscuro
    { id: 2, value: countDias, description: "home_highlights_second_quadrant", bgColor: "bg-[#3956dd]" }, // Azul principal
    { id: 3, value: `${countCirugias}+`, description: "home_highlights_third_quadrant", bgColor: "bg-[#4f6eff]" }, // Azul más claro
    { id: 4, value: countParticipantes, description: "home_highlights_fourth_quadrant", bgColor: "bg-[#697fff]" } // Azul pastel
  ];
  

  return (
    <div ref={ref} className="w-full flex flex-col m-auto tablet:w-3/4 mt-60">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-Poppins text-center text-5xl font-ExtraBold text-Black px-4 leading-snug mb-4">
          {t("home_highlights_title")}
        </h2>
      </div>
      {/* Cuadrantes con métricas */}
      <div className="w-full mt-10 flex flex-wrap">
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
            className={`w-full h-44 flex flex-col px-2 justify-center items-center tablet:w-1/2 laptop:w-1/4 ${highlight.bgColor}`}
          >
            <p className="font-Poppins font-ExtraBold text-6xl text-White">
              {highlight.value}
            </p>
            <p className="font-Poppins font-Thin text-xl text-center text-White pt-3">
              {t(highlight.description)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCursoHighlights;
