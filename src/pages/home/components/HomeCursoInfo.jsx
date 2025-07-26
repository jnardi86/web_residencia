// import ToothIcon from "../../../../components/icons/ToothIcon";

import { useTranslation } from "react-i18next";
import AnimatedSection from "../../../components/animatedSection/AnimatedSection";

const HomeCursoInfo = () => {

    const { t } = useTranslation("translation", { keyPrefix: "home" });


    return (
        <section className="w-full px-6 bg-White mt-60">

            {/* Fila 1 */}
            <AnimatedSection
                direction="right"
                triggerOnce
            >
                <div className="w-full flex flex-col laptop1:flex-row items-center gap-12 mb-12">
                    <div className="flex-1 text-center order-1 laptop1:order-none">
                        <h2 className="font-Poppins text-center text-5xl font-ExtraBold text-Black px-4 leading-snug mb-4 laptop1:text-4xl laptop1:leading-relaxed">
                            {t("home_info_section1_title_1")}
                            <span className="text-White bg-Blue px-2 py-1">{t("home_info_section1_title_2")}</span>
                            {t("home_info_section1_title_3")}
                            <span className="text-White bg-Blue px-2 py-1">{t("home_info_section1_title_4")}</span>
                            {t("home_info_section1_title_5")}
                            <span className="text-White bg-Blue px-2 py-1">{t("home_info_section1_title_6")}</span>
                            {t("home_info_section1_title_7")}
                        </h2>
                    </div>
                    <div className="flex-1 order-2 laptop1:order-none laptop1:flex laptop1:items-center laptop1:justify-center">
                        <img
                            src="/images/galeria/galeria_2.jpg"
                            alt="Implante Cigomático"
                            className="w-full h-[450px] shadow-LightShadowGrey laptop1:rounded-full laptop1:w-[350px] laptop1:h-[350px]"
                        />
                    </div>
                </div>
            </AnimatedSection>


            {/* Fila 2 */}
            <AnimatedSection
                direction="left"
                triggerOnce
            >
                <div className="flex flex-col laptop1:flex-row items-center gap-12 mb-12">
                    <div className="flex-1 order-4 laptop1:order-none laptop1:flex laptop1:items-center laptop1:justify-center">
                        <img
                            src="/images/galeria/galeria_17.jpg"
                            alt="Cirugía Implante"
                            className="w-full h-[450px] shadow-LightShadowGrey laptop1:rounded-full laptop1:w-[350px] laptop1:h-[350px]"
                        />
                    </div>
                    <div className="flex-1 text-center laptop1:text-left order-3 laptop1:order-none">
                        <h2 className="font-Poppins text-center text-5xl font-ExtraBold text-Black px-4 leading-snug mb-4 laptop1:text-4xl laptop1:leading-relaxed">
                            {t("home_info_section2_title_1")}
                            <span className="text-White bg-Blue px-2 py-1">{t("home_info_section2_title_2")}</span>
                            <span className="text-White bg-Blue px-2 py-1">{t("home_info_section2_title_3")}</span>
                        </h2>
                    </div>
                </div>

            </AnimatedSection>


            {/* Fila 3 */}
            <AnimatedSection
                direction="right"
                triggerOnce
            >
                <div className="flex flex-col laptop1:flex-row items-center gap-12 mb-12">
                    <div className="flex-1 text-center laptop1:text-left order-5 laptop1:order-none">
                        <h2 className="font-Poppins text-center text-5xl font-ExtraBold text-Black px-4 leading-snug mb-4 laptop1:text-4xl laptop1:leading-relaxed">
                            {t("home_info_section3_title_1")}
                            <span className="text-White bg-Blue px-2 py-1">{t("home_info_section3_title_2")}</span>
                            {t("home_info_section3_title_3")}
                            <span className="text-White bg-Blue px-2 py-1">{t("home_info_section3_title_4")}</span>
                        </h2>
                    </div>
                    <div className="flex-1 order-6 laptop1:order-none laptop1:flex laptop1:items-center laptop1:justify-center">
                        <img
                            src="/images/galeria/galeria_16.jpg"
                            alt="Procedimiento Implante"
                            className="w-full h-[450px] shadow-LightShadowGrey laptop1:rounded-full laptop1:w-[350px] laptop1:h-[350px]"
                        />
                    </div>
                </div>

            </AnimatedSection>

        </section>
    );
};

export default HomeCursoInfo;
