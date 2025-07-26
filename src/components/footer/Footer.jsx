import React from "react";
import FooterSection from "./FooterSection";
import FooterLink from "./FooterLink";
import { useGlobal } from "../../hooks/useGlobal";
import Contact from "./svgIcons/Contact";
import { ContactEmail } from "./svgIcons/ContactEmail";
import { useTranslation } from "react-i18next";
import Instagram from "./svgIcons/Instagram";


const Footer = () => {

  const { directoresRef, scrollToSection, refs } = useGlobal();
  const { t } = useTranslation("translation", { keyPrefix: "footer" });

  // const homeSections = ["section_one_item1", "section_one_item2", "section_one_item3", "section_one_item4", "section_one_item5", "section_one_item6"]

  return (
    <footer className="bg-Black mt-20 text-White py-8 ">
      <div className="laptop1:flex laptop1:justify-between laptop1:items-center">
        <div className="flex flex-col justify-center items-center laptop2:items-start laptop2:w-1/2 mb-4 px-4">
          {/* Columna 1: Residencia Cigomático */}
          <div className="flex flex-col justify-center items-center">
            <img src="/images/logos/white.png" alt="Logo Residencia" width={90} height={90} />
            <h3 className="font-Poppins text-base font-bold mb-1">
              {t('section_one_title')}
            </h3>
            <p className="font-Poppins text-center font-Thin font-bold mb-6">{t('section_one_subTitle')}</p>
          </div>
        </div>

        {/* Columna 2: Contacto*/}
        <div className="flex flex-col justify-center items-center laptop2:items-start mb-4">
          <h3 className="font-Poppins text-base font-bold mb-4">
            {t('section_two_title')}
          </h3>
          <div className="w-full mb-4">
            <p className="font-Poppins font-Regular text-sm text-center laptop2:text-start mb-2">
              Dr. Guillermo Parisi
            </p>
            <p className="w-full flex justify-center laptop2:justify-start items-center font-Poppins font-Thin text-sm">
              <Instagram
                width={"20px"}
                height={"20px"}
                color={"#fff"}
              />
              <a href="https://www.instagram.com/parisiguille/" target="_blank" className="pl-2 hover:underline">{t('section_two_item3')}</a>
            </p>
          </div>

          <div className="w-full mb-4">
            <p className="font-Poppins font-Regular text-sm text-center laptop2:text-start mb-2">
              Dr. Leandro Fevola
            </p>
            <p className="w-full flex justify-center laptop2:justify-start items-center font-Poppins font-Thin text-sm">
              <Instagram
                width={"20px"}
                height={"20px"}
                color={"#fff"}
              />
              <a href="https://www.instagram.com/atencionodontologicaintegral/" target="_blank" className="pl-2 hover:underline">{t('section_two_item4')}</a>
            </p>
          </div>
          <div className="w-full mb-4">
            <p className="w-full flex justify-center laptop2:justify-start items-center font-Poppins font-Thin text-sm py-3 tablet:py-1 tablet:text-base">
              <ContactEmail
                width={"20px"}
                height={"20px"}
                color={"#fff"}
              />
              <a href="mailto:residenciacigomaticos@gmail.com" className="pl-2 hover:underline">{t('section_two_item2')}</a></p>
          </div>
        </div>
        {/* Columna 3: Lugar*/}
        <div className="flex flex-col justify-center items-center mb-4 px-4">
          <h3 className="font-Poppins text-base font-bold mb-4">
            {t('section_three_title')}
          </h3>
        </div>
      </div>
      <div className="w-full">
        <p className="font-Montserrat font-Regular text-sm pt-6 text-center px-2">&copy;{t('section_develop')}</p>
      </div>
    </footer>
  );
};

export default Footer;

