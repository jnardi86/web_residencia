import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { homeIntroFechas } from "../../pages/home/components/homeIntroFechas";
import { useGlobal } from "../../hooks/useGlobal";

const PopupInscripcion = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { t } = useTranslation("translation", { keyPrefix: "home" });
    const { homeContactoRef } = useGlobal(); // no lo usamos, pero queda por coherencia

    const bookingOpenText = t("home_residences_cards_open_registration");

    const openCard = homeIntroFechas.find(
        (card) => t(card.booking) === bookingOpenText
    );

    useEffect(() => {
        if (openCard) {
            setShowPopup(true);
        }
    }, [openCard]);

    useEffect(() => {
        if (showPopup && openCard) {
            Swal.fire({
                title: '<span style="font-size: 1.8rem; font-weight: bold; color: #102859">¡Inscripción abierta!</span>',
                html: `
          <div style="margin-top: 15px;">
            <svg width="60" height="60" fill="#3956dd" viewBox="0 0 24 24" style="margin: 0 auto 20px;">
              <path d="M12 0C5.371 0 0 5.371 0 12c0 6.628 5.371 12 12 12s12-5.372 12-12C24 5.371 18.628 0 12 0zm-1.2 17.2l-4.6-4.6 1.6-1.6 3 3 6-6 1.6 1.6-7.6 7.6z"/>
            </svg>
            <p style="font-size: 1.1rem; color: #333; margin-bottom: 1rem;">
              Ya podés inscribirte a la Residencia de Cigomáticos en <strong>${t(openCard.venue)}</strong>.
              <br />
              Cupos abierto para la fecha del <strong>${t(openCard.dates)}</strong>
            </p>
          </div>
        `,
                showConfirmButton: true,
                confirmButtonText: "Volver a la página",
                confirmButtonColor: "#3956dd",
                background: "#fff",
                customClass: {
                    popup: "rounded-xl shadow-xl px-4 py-6",
                },
            });

            setShowPopup(false);
        }
    }, [showPopup, openCard, t]);

    return null;
};

export default PopupInscripcion;
