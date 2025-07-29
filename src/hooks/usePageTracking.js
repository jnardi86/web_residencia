// src/hooks/usePageTracking.js

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// TU ID DE MEDICIÓN DE GOOGLE ANALYTICS
const GA_MEASUREMENT_ID = 'G-REE64JBZ6F';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Comprueba que la función gtag exista en el objeto window
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title // Opcional: envía también el título de la página
      });
      console.log(`GA Pageview: ${location.pathname + location.search}`); // Para depurar
    }
  }, [location]); // Se ejecuta cada vez que 'location' cambia
};

export default usePageTracking;