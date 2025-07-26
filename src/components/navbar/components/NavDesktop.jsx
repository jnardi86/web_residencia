import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "./navItems";
import SwitchLanguage from "./SwitchLanguage";
import { useTranslation } from "react-i18next";
import useNavDesktop from "../hooks/useNavDesktop";

const NavDesktop = () => {
  const { alpha } = useNavDesktop();
  const { t } = useTranslation("translation", { keyPrefix: "navbar" });
  const location = useLocation(); // Detecta en qué página estás

  const isPacientesPage = location.pathname === "/pacientes"; // Verifica si estás en /pacientes

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="flex justify-between items-center px-5"
        style={{
          // backgroundColor: `rgba(34, 58, 94, ${alpha})`,
          backgroundColor: `rgba(57, 86, 221, ${alpha})`,
        }}
      >
        {/* Contenedor del Logo y Títulos */}
        <div className="flex flex-col justify-center items-center text-White py-4">
          <img src="/images/logos/white.png" alt="Logo Residencia" width={70} height={70} />
          {/* {isPacientesPage ? (
            // 🔹 Solo muestra el logo si es la página de Pacientes
            <img src="/images/logos/white.png" alt="Logo Residencia" width={70} height={70} />
          ) : (
            // 🔹 Muestra los títulos si NO es la página de Pacientes
            <>
              <div className="flex gap-3">
                <h1 className="font-Poppins font-Semibold text-center text-2xl tablet:text-base tablet:text-start laptop2:text-2xl leading-relaxed">
                  {t("title")}
                </h1>
              </div>
              <h2 className="font-Poppins font-Regular text-center text-xl tablet:text-sm laptop2:text-xl">
                {t("subtitle")}
              </h2>
            </>
          )} */}
        </div>

        {/* Navegación */}
        <div className="flex items-center">
          <ul className="flex space-x-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  className="font-Poppins text-lg font-Semibold text-White p-5 tablet:text-base hover:underline  laptop1:text-2xl"
                  to={item.link}
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <SwitchLanguage />
      </div>
    </nav>
  );
};

export default NavDesktop;
