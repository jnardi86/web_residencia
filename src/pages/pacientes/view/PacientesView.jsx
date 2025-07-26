import React, { useEffect, useRef } from 'react'

import { useTranslation } from 'react-i18next'
import PacientesHero from '../components/PacientesHero';

import PacientesTestimonios from '../components/PacientesTestimonios';
import PacientesContacto from '../components/PacientesContacto';
import PacientesInfoView from '../components/pacientesInfo/PacientesInfoView';
import AnimatedSection from '../../../components/animatedSection/AnimatedSection';
import WhatsAppIcon from '../../../components/whatsapp/WhatsAppIcon';
import useScrollToTop from '../../../hooks/useScrollToTop';



const PacientesView = () => {

  const { t } = useTranslation("translation", { keyPrefix: "patients" });
  const contactoRef = useRef(null);
  useScrollToTop();


  return (
    <div>
      <PacientesHero
        contactoRef={contactoRef}
      />
      <AnimatedSection
        direction='left'
        triggerOnce
      >
        <PacientesInfoView />
      </AnimatedSection>
      <AnimatedSection
        direction='right'
        triggerOnce
      >
        <PacientesTestimonios />
      </AnimatedSection>
      <AnimatedSection
        direction='right'
        triggerOnce
      >
        <PacientesContacto
          contactoRef={contactoRef}
        />
      </AnimatedSection>
      <WhatsAppIcon />
    </div>
  )
}

export default PacientesView
