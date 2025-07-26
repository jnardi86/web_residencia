import { useState } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export const useFormInscripcion = () => {
  const { i18n } = useTranslation();
  // Check the currently selected language
  const currentLanguage = i18n.language;
  const { t } = useTranslation("translation", { keyPrefix: "home" });

  const urlFetchAPI =
    "https://script.google.com/macros/s/AKfycbxGGMmvHJYomFaKQnhK2jGbrAsfxQ_EKuIxIOJH8cFMtNk3wr06XxpMx06Uv_vBRofxaQ/exec";
  //   Link Spreadsheet residenciacigomatics@gmail.com https://docs.google.com/spreadsheets/d/112iyCDucbWusplhDVQ0Fud2bbobQfqfvRK_urcVH3GU/edit?gid=0#gid=0

  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialFormData = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    pais: "",
    fechaCurso: "",
    comentarios: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitInscripcion = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const fetchData = {
        ...formData,
        action: "inscripcion",
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

      // Handle the response from the Google Apps Script endpoint
      const objectResponse = await jsonResponse.json();
      console.log("Response is: ", objectResponse);
      setFormData(initialFormData);
      setIsSubmitting(false);

      const title = objectResponse.status
        ? "Su pre-inscripción ha sido recibida"
        : "Error al procesar su pre-inscripción, intente nuevamente más tarde";
      Swal.fire({
        title: `${title}`,
        background: "#FAFAFA",
        color: "#025951",
        iconColor: "#025951",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#038C7F",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmitInscripcion,
    isSubmitting,
  };
};
