import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const useFormContacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    pais: "",
    consulta: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null); // 🛡️ Nuevo estado

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitContacto = async (e, recaptchaRef) => {
  e.preventDefault();
  setIsSubmitting(true);

  if (!recaptchaToken || recaptchaToken.trim() === "") {
    Swal.fire({
      title: "Verificación requerida",
      text: "Por favor, confirmá que no sos un robot.",
      icon: "warning",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#038C7F",
    });
    setIsSubmitting(false);
    return;
  }

  const templateParams = {
    name: formData.nombre,
    email: formData.email,
    country: formData.pais || "No especificado",
    message: formData.consulta,
    recaptchaToken,
  };

  try {
    await emailjs.send(
      "service_y5yb009",
      "template_fp34fit",
      templateParams,
      "PY7wPDjSP77ndMB0B"
    );

    Swal.fire({
      title: "Tu mensaje fue enviado con éxito",
      text: "Gracias por contactarte. A la brevedad te responderemos.",
      icon: "success",
      iconColor: "#3956dd", // Verde para éxito
      color: "#3956dd",
      background: "#fff",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#3956dd",
    });

    setFormData({ nombre: "", apellido: "", email: "", pais: "", consulta: "" });
    setRecaptchaToken(null);

    // ✅ Reset visual del reCAPTCHA
    recaptchaRef?.current?.reset();
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: "Hubo un problema al enviar el mensaje. Intentá más tarde.",
      icon: "error",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#038C7F",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return {
    formData,
    handleChange,
    handleSubmitContacto,
    isSubmitting,
    setRecaptchaToken,
  };
};

export default useFormContacto;
