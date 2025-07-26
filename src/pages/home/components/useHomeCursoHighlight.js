import { useInView } from "react-intersection-observer";
import React, { useState, useEffect } from "react";

export const useHomeCursoHighlight = () => {
  const [countHoras, setCountHoras] = useState(0);
  const [countDias, setCountDias] = useState(0);
  const [countCirugias, setCountCirugias] = useState(0);
  const [countParticipantes, setCountParticipantes] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      let countHorasStart = 0;
      let countDiasStart = 0;
      let countCirugiasStart = 0;
      let countParticipantesStart = 0;
      const countHorasMax = 40; // Final number to reach
      const countDiasMax = 5; // Final number to reach
      const countCirugiasMax = 10; // Final number to reach
      const countParticipantesMax = 8; // Final number to reach
      const duration = 2000; // Duration in milliseconds
      const incrementHoras = countHorasMax / (duration / 10);
      const incrementDias = countDiasMax / (duration / 10);
      const incrementCirugias = countCirugiasMax / (duration / 10);
      const incrementParticipantes = countParticipantesMax / (duration / 10);

      const intervalHoras = setInterval(() => {
        countHorasStart += incrementHoras;
        if (countHorasStart >= countHorasMax) {
          clearInterval(intervalHoras);
          setCountHoras(countHorasMax);
        } else {
          setCountHoras(Math.ceil(countHorasStart));
        }
      }, 10);

      const intervalDias = setInterval(() => {
        countDiasStart += incrementDias;
        if (countDiasStart >= countDiasMax) {
          clearInterval(intervalDias);
          setCountDias(countDiasMax);
        } else {
            setCountDias(Math.ceil(countDiasStart));
        }
      }, 10);

      const intervalCirugias = setInterval(() => {
        countCirugiasStart += incrementCirugias;
        if (countCirugiasStart >= countCirugiasMax) {
          clearInterval(intervalCirugias);
          setCountCirugias(countCirugiasMax);
        } else {
            setCountCirugias(Math.ceil(countCirugiasStart));
        }
      }, 10);

      const intervalParticipantes = setInterval(() => {
        countParticipantesStart += incrementParticipantes;
        if (countParticipantesStart >= countParticipantesMax) {
          clearInterval(intervalParticipantes);
          setCountParticipantes(countParticipantesMax);
        } else {
            setCountParticipantes(Math.ceil(countParticipantesStart));
        }
      }, 10);

      return () => clearInterval(intervalHoras);
      return () => clearInterval(intervalDias);
    }
  }, [inView]);

  return {
    countHoras,
    countDias,
    countCirugias,
    countParticipantes,
    ref,
  };
};
