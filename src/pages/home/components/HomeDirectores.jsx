import React from "react";
import { useGlobal } from "../../../hooks/useGlobal";
import ListIcon from "../../../components/icons/ListIcon";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const HomeDirectores = () => {

  const { directoresRef } = useGlobal();
  const { t } = useTranslation("translation", { keyPrefix: "home" });

  const directors = [
    {
      id: 1,
      imageSrc: "/images/autoridades/parisi.png",
      name: "home_directors_name1",
      description: {
        speciality: "home_directors_description1_especiality",
        position: "home_directors_description1_position",
        role: "home_directors_description1_role",
        focus: "home_directors_description1_focus"
      }
    },
    {
      id: 2,
      imageSrc: "/images/autoridades/fevola.png",
      name: "home_directors_name2",
      description: {
        speciality: "home_directors_description2_especiality",
        position: "home_directors_description2_position",
        role: "home_directors_description2_role",
        focus: "home_directors_description2_focus"
      }
    }
  ];


  // Función para mostrar el modal con información detallada
  const showDirectorInfo = (director) => {
    Swal.fire({
      title: `<h2 class="font-Poppins text-3xl font-ExtraBold text-Black">${t(director.name)}</h2>`,
      html: `
        <div class="flex flex-col items-center">
          <img src="${director.imageSrc}" alt="${t(director.name)}" class="w-40 h-40 rounded-full mb-4 shadow-lg" />
          <ul class="font-Poppins text-lg text-Black text-start space-y-2 list-none">
            <li class="flex gap-2 w-full items-center font-Semibold text-center">
              ${t(director.description.speciality)}
            </li>
            <li class="flex gap-2 items-center">
              ${t(director.description.position)}
            </li>
            <li class="flex gap-2 items-center">
              ${t(director.description.role)}
            </li>
            <li class="flex gap-2 items-center">
              ${t(director.description.focus)}
            </li>
          </ul>
        </div>
      `,
      showCloseButton: true,
      confirmButtonText: "Cerrar",
      confirmButtonColor: "#3956dd",
      customClass: {
        popup: "w-auto max-w-lg",
        title: "font-Poppins text-Black",
        confirmButton: "font-Poppins text-white",
      }
    });
  };

  return (
    <div
      ref={directoresRef}
      className="w-full tablet:w-3/4 mx-auto bg-White rounded-lg flex flex-col items-center p-5 pb-10 mt-60"
    >
      <h2 className="font-Poppins text-center text-5xl font-ExtraBold text-Black mb-4">
        {t("home_directors_title")}
      </h2>
      <p className="font-Poppins text-Black font-Regular text-xl text-start laptop2:text-2xl mb-4 px-5 tablet:text-center">
        {t("home_directors_paragraph")}
      </p>
      <div className="flex flex-col items-center justify-around flex-wrap pt-10 gap-10 laptop1:w-full laptop1:flex-row laptop1:flex-nowrap laptop1:justify-center laptop1:gap-5">
        {directors.map((director) => (
          <div
            key={director.id}
            className="flex flex-col items-center w-full laptop1:w-1/2 laptop1:h-[480px]"
          >
            <h2 className="font-Poppins text-center text-3xl font-ExtraBold text-Black px-4 py-2 mb-2">
              {t(director.name)}
            </h2>
            <div className="pb-3">
              <img
                className="rounded-full w-[200px] h-[200px] tablet:w-[300px] tablet:h-[300px] laptop1:hover:filter laptop1:hover:grayscale laptop1:hover:transition laptop1:hover:duration-300"
                src={director.imageSrc}
                alt={t(director.name)}
              />
            </div>
            <button
              className="text-center bg-Blue cursor-pointer text-White font-Poppins text-lg tablet:mt-10 tablet:text-xl laptop2:text-2xl font-Bold py-4 px-6 rounded-lg shadow-DarkBlue shadow-lg transition-transform duration-1000 ease-in-out hover:bg-White hover:text-Blue hover:border-solid hover:border-Blue hover:border-2 hover:scale-110"
              onClick={() => showDirectorInfo(director)}
            >
              {t("home_directors_text_button")}
            </button>

            {/* <div className="flex flex-col items-center justify-center w-full">
              <ul className="font-Poppins text-DarkBlue text-sm text-start w-full px-2 pt-4 tablet:text-base list-none">
                {Object.values(director.description).map((desc, index) => (
                  <li key={index} className="flex gap-1 items-center">
                    <div className="w-7 h-7">
                    <ListIcon width={"28px"} height={"28px"} color={"#223A5E"} />
                    </div>
                    <p className="">{t(desc)}</p>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDirectores;


