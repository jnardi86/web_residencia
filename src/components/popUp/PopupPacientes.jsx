import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const PopupPacientes = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { t } = useTranslation("translation", { keyPrefix: "home" })

    useEffect(() => {

        const currentPath = window.location.pathname;
        const popupShown = localStorage.getItem("popupShown");

        if (!popupShown && (currentPath === "#/" || currentPath === "/")) {
            setShowPopup(true);
            localStorage.setItem("popupShown", "true"); // Evita que se muestre otra vez
        }
    }, []);

    useEffect(() => {
        if (showPopup) {
            Swal.fire({
                title: t('home_popUp_title'),
                text: t('home_popUp_paragraph'),
                icon: "info",
                iconColor: "#3956dd",
                showCancelButton: true,
                confirmButtonText: t('home_popUp_text_button1'),
                confirmButtonColor: "#3956dd",
                cancelButtonColor: "#312f2b",
                cancelButtonText: t('home_popUp_text_button2'),

            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.hash = "#/pacientes"; // ✅ Redirige correctamente con HashRouter
                }
            });

            setShowPopup(false); // Evita que se vuelva a mostrar en esta sesión
        }

    }, [showPopup]);

    return null; // No renderiza nada, solo maneja el popup
};

export default PopupPacientes;
