import { useRef } from "react";
import PacientesForm from "./PacientesForm";
import { useTranslation } from "react-i18next";


const PacientesContacto = ({ contactoRef }) => {

  const { t } = useTranslation("translation", { keyPrefix: "patients" });


  return (
    <section
      className="w-full py-16 px-6 mt-60"
      ref={contactoRef}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-Poppins text-4xl font-ExtraBold text-Blue mb-6 desktop:text-6xl">
          {t("patients_formSection_contacto_title")}
        </h2>
        <p className="text-xl text-Black font-Poppins font-Regular mb-8">
          {t("patients_formSection_contacto_paragraph")}
        </p>
      </div>
      <PacientesForm />
    </section>
  );
};

export default PacientesContacto;
