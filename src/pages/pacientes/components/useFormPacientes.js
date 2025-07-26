import { useState } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export const useFormPacientes = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { t } = useTranslation("translation", { keyPrefix: "patients" });

  const urlFetchAPI =
    "https://script.google.com/macros/s/AKfycbxGGMmvHJYomFaKQnhK2jGbrAsfxQ_EKuIxIOJH8cFMtNk3wr06XxpMx06Uv_vBRofxaQ/exec";

  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialFormData = {
    nombre: "",
    apellido: "",
    email: "",
    pais: "",
    consulta: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitPacientes = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const fetchData = {
        ...formData,
        action: "contacto",
        currentLanguage: currentLanguage,
      };

      // Fetch Gmail to send email
      const jsonResponse = await fetch(urlFetchAPI, {
        method: "POST",
        redirect: "follow",
        dataType: "json",
        accepts: "application/json",
        body: JSON.stringify(fetchData),
      });

      const objectResponse = await jsonResponse.json();
      setFormData(initialFormData);
      setIsSubmitting(false);

      Swal.fire({
        title: objectResponse.status
          ? "Mensaje enviado exitosamente"
          : "Error al enviar el mensaje, intente nuevamente más tarde",
        background: "#FAFAFA",
        color: "#025951",
        iconColor: "#025951",
        icon: objectResponse.status ? "success" : "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#038C7F",
      });
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error inesperado",
        text: "Hubo un problema al enviar el formulario. Inténtalo de nuevo.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#d33",
      });
    }
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmitPacientes,
    isSubmitting,
  };
};
