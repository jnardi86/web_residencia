import { useTranslation } from "react-i18next";
import ToothIcon from "../../../../components/icons/ToothIcon";
import AnimatedSection from "../../../../components/animatedSection/AnimatedSection";

const PacientesInfo = () => {

  const { t } = useTranslation("translation", { keyPrefix: "patients" })

  return (
    <section className="w-full py-16 px-6 mt-10">
      <AnimatedSection
        direction="left"
        triggerOnce
      >
        <div className="w-full mb-40">
          <h2 className="font-Poppins text-5xl text-center font-ExtraBold mb-6 leading-tight">
            {t("patients_info_title1")} <span className="text-White bg-Blue px-1 py-1">{t("patients_info_title2")}</span>
          </h2>
          <p className="font-Poppins text-2xl text-center laptop1:text-right font-ExtraBold text-Black my-6">
            {t("patients_info_paragraph")}
          </p>
        </div>
      </AnimatedSection>

      {/* Fila 1 - Introducción */}
      <AnimatedSection
        direction="right"
        triggerOnce
      >
        <div className="w-full flex flex-col laptop1:flex-row items-center gap-12 mb-12">
          <div className="flex-1 text-center order-1 laptop1:order-none">
            <h2 className="font-Poppins text-4xl font-ExtraBold mb-6">
              {t("patients_info_section1_title_1")} <span className="text-Blue text-5xl px-2 py-1">{t("patients_info_section1_title_2")}</span>
            </h2>
            <p className="font-Poppins text-Black font-Regular text-start text-xl pl-6 space-y-3">
              {t("patients_info_section1_paragraph")}
            </p>
          </div>
          <div className="flex-1 order-2 laptop1:order-none laptop1:flex laptop1:items-center laptop1:justify-center">
            <img
              src="/images/img2_info_patient_mobile.png"
              alt="Implante Cigomático"
              className="w-full h-[450px] shadow-LightShadowGrey laptop1:rounded-full laptop1:w-[350px] laptop1:h-[350px]"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Fila 2 - Beneficios */}
      <AnimatedSection
        direction="left"
        triggerOnce
      >
        <div className="flex flex-col laptop1:flex-row items-center gap-12 mb-12">
          <div className="flex-1 order-4 laptop1:order-none laptop1:flex laptop1:items-center laptop1:justify-center">
            <img
              src="/images/img_info_patient_mobile.png"
              alt="Cirugía Implante"
              className="w-full h-[450px] shadow-LightShadowGrey laptop1:rounded-full laptop1:w-[350px] laptop1:h-[350px]"
            />
          </div>
          <div className="flex-1 text-center laptop1:text-left order-3 laptop1:order-none">
            <h2 className="font-Poppins text-center text-4xl font-ExtraBold mb-6">
              {t("patients_info_section2_title_1")} <span className="text-Blue text-5xl px-2 py-1">{t("patients_info_section2_title_2")}</span>
            </h2>
            <div className="tablet:flex tablet:justify-center">
              <ul className="font-Poppins text-start text-lg pl-6 space-y-3 tablet:px-6">
                <li className="flex gap-4">
                  <div className="flex items-center">
                    <ToothIcon fill="#3956dd"
                    />
                  </div>
                  {t("patients_info_section2_list1")}
                </li>
                <li className="flex gap-4 jus">
                  <div className="flex items-center">
                    <ToothIcon fill="#3956dd"
                    />
                  </div>
                  {t("patients_info_section2_list2")}
                </li>
                <li className="flex gap-4 jus">
                  <div className="flex items-center">
                    <ToothIcon fill="#3956dd"
                    />
                  </div>
                  {t("patients_info_section2_list3")}
                </li>
                <li className="flex gap-4 jus">
                  <div className="flex items-center">
                    <ToothIcon fill="#3956dd"
                    />
                  </div>
                  {t("patients_info_section2_list4")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Fila 3 - Procedimiento */}
      <AnimatedSection
        direction="right"
        triggerOnce
      >
        <div className="flex flex-col laptop1:flex-row items-center gap-12 mb-12">
          <div className="flex-1 text-center laptop1:text-left order-5 laptop1:order-none">
            <h2 className="font-Poppins text-center text-4xl font-ExtraBold mb-6">
              {t("patients_info_section3_title_1")} <span className="text-Blue text-5xl px-2 py-1">{t("patients_info_section3_title_2")}</span>
            </h2>
            <p className="font-Poppins text-start text-lg pl-6 space-y-3">
              {t("patients_info_section3_paragraph")}
            </p>
          </div>
          <div className="flex-1 order-6 laptop1:order-none laptop1:flex laptop1:items-center laptop1:justify-center">
            <img
              src="/images/img3_info_patient_mobile.png"
              alt="Procedimiento Implante"
              className="w-full h-[450px] shadow-LightShadowGrey laptop1:rounded-full laptop1:w-[350px] laptop1:h-[350px]"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Fila 4 - Postoperatorio */}
      <AnimatedSection
        direction="left"
        triggerOnce
      >
        <div className="flex flex-col laptop1:flex-row items-center gap-12">
          <div className="flex-1 order-8 laptop1:order-none laptop1:flex laptop1:items-center laptop1:justify-center">
            <img
              src="/images/img4_info_patient_mobile.png"
              alt="Postoperatorio Implante"
              className="w-full h-[450px] shadow-LightShadowGrey laptop1:rounded-full laptop1:w-[350px] laptop1:h-[350px]"
            />
          </div>
          <div className="flex-1 text-center laptop1:text-left order-7 laptop1:order-none">
            <h2 className="font-Poppins text-center text-4xl font-ExtraBold mb-6">
              {t("patients_info_section4_title_1")} <span className="text-Blue text-5xl px-2 py-1"> {t("patients_info_section4_title_2")}</span>
            </h2>
            <div className=" tablet:flex tablet:justify-center">
              <ul className="font-Poppins text-start text-lg pl-6 space-y-3 tablet:px-6">
                <li className="flex gap-4">
                  <div className="flex items-center">
                    <ToothIcon fill="#3956dd"
                    />
                  </div>
                  {t("patients_info_section4_list1")}
                </li>
                <li className="flex gap-4 items">
                  <div className="flex items-center">
                    <ToothIcon fill="#3956dd"
                    />
                  </div>
                  {t("patients_info_section4_list2")}
                </li>
                <li className="flex gap-4 items">
                  <div className="flex items-center">
                    <ToothIcon fill="#3956dd"
                    />
                  </div>
                  {t("patients_info_section4_list3")}
                </li>
                <li className="flex gap-4 items">
                  <div className="flex items-center">
                    <ToothIcon fill="#3956dd"
                    />
                  </div>
                  {t("patients_info_section4_list4")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default PacientesInfo;
