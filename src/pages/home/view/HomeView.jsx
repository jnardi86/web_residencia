import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import HomeHero from "../components/HomeHero/HomeHero";
import HomeDirectores from "../components/HomeDirectores";
import HomeCursoBrief from "../components/HomeBrief/HomeCursoBrief";
import HomeGaleria from "../components/HomeGaleria/HomeGaleria";
import HomeCursoHighlights from "../components/HomeCursoHighlights";
import HomeCursoFechas from "../components/HomeCursoFechas";
import HomeCursoObjetivo from "../components/HomeCursoObjetivo";
import HomeCursoTeorico from "../components/HomeCursoTeorico";
import HomeCursoPractico from "../components/HomeCursoPractico";
import HomeCursoResumen from "../components/HomeResumen/HomeCursoResumen";
import SectionWrapper from "../../../components/sectionWrapper/SectionWrapper";
import HomeFormView from "../components/HomeFormInscripcion/HomeFormView";
import HomeCusoInfo from "../components/HomeCursoInfo";
import AnimatedSection from "../../../components/animatedSection/AnimatedSection";
import useScrollToTop from "../../../hooks/useScrollToTop";

const HomeView = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home" });
  const homeContactoRef = useRef(null);
  useScrollToTop();


  return (
    <div>
      <HomeHero
        homeContactoRef={homeContactoRef}
      />

      <AnimatedSection
        direction="left"
        triggerOnce>
        <HomeCursoBrief />
      </AnimatedSection>

      <AnimatedSection
        direction="right"
        triggerOnce>
        <HomeDirectores />
      </AnimatedSection>

      <AnimatedSection
        direction="left"
        triggerOnce>
        <HomeCursoObjetivo />
      </AnimatedSection>

      <HomeCusoInfo />

      <AnimatedSection
        direction="left"
        triggerOnce>
        <HomeCursoHighlights />
      </AnimatedSection>

      <AnimatedSection
        direction="right"
        triggerOnce>
        <HomeGaleria />
      </AnimatedSection>

      {/* <SectionWrapper>
        <HomeCursoTeorico />
      </SectionWrapper> */}



      {/* <SectionWrapper>
        <HomeCursoPractico />
      </SectionWrapper> */}

      <AnimatedSection
        direction="left"
        triggerOnce>
        <HomeCursoResumen />
      </AnimatedSection>


      <SectionWrapper>
        <HomeCursoFechas />
      </SectionWrapper>

      <AnimatedSection
        direction="left"
        triggerOnce>
        <HomeFormView
          homeContactoRef={homeContactoRef}
        />
      </AnimatedSection>

    </div>
  );
};

export default HomeView;
