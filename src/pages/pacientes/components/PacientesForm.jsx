import React, { useState } from "react";

import { useFormPacientes } from "./useFormPacientes";
import { useTranslation } from "react-i18next";
import countryList from "react-select-country-list";
import TextInputComponent from "../../../components/Form/TextInputComponent";

const PacientesForm = () => {
  const { formData, handleChange, handleSubmitPacientes, isSubmitting } =
    useFormPacientes();

  const { t } = useTranslation("translation", { keyPrefix: "patients" });

  // Obtener la lista de países
  const countryOptions = countryList().getData();

  return (
    <div className="w-full tablet:w-3/4 laptop1:w-1/2 laptop2:w-1/3 m-auto rounded-lg bg-Blue shadow-lg p-6 laptop2:p-8 mb-20">
      {/* <h2 className="title-sections font-Bold text-DarkBlue pb-5 text-center">
        {t("patients_form_contacto_title")}
      </h2> */}
      <form
        onSubmit={handleSubmitPacientes}
        className="space-y-4"
        disabled={isSubmitting}
      >
        <TextInputComponent
          id="nombre"
          label={t("patients_form_contacto_name")}
          value={formData.nombre}
          onChange={handleChange}
        />
        <TextInputComponent
          id="apellido"
          label={t("patients_form_contacto_lastName")}
          value={formData.apellido}
          onChange={handleChange}
        />
        <TextInputComponent
          id="email"
          label={t("patients_form_contacto_email")}
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <div>
          <label
            className="w-full block font-Poppins text-xl text-White font-Regular mb-2"
            htmlFor="pais"
          >
            {t("patients_form_contacto_country")}
          </label>
          <select
            id="pais"
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            required
            className="w-full p-3 font-Poppins text-xl text-Black font-Regular rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            <option className="font-Poppins text-Black text-lg" value="" disabled>
              {t("patients_form_contacto_selectCountry")}
            </option>
            {countryOptions.map((country) => (
              <option
                key={country.value}
                className="font-Poppins text-Black text-lg"
                value={country.label}
              >
                {country.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            className="block font-Poppins text-xl text-White font-Regular mb-2"
            htmlFor="consulta"
          >
            {t("patients_form_contacto_question")}
          </label>
          <textarea
            id="consulta"
            name="consulta"
            value={formData.consulta}
            onChange={handleChange}
            rows="4"
            className="w-full font-Poppins text-Black text-lg p-3 bg-White rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          ></textarea>
        </div>

        <div className="laptop1:flex laptop1:justify-center">
          <button
            type="submit"
            className="w-full laptop1:w-1/2 text-center bg-White cursor-pointer text-Blue font-Poppins text-lg tablet:mt-10 tablet:text-xl laptop2:text-2xl font-Bold py-4 px-6 mb-8 rounded-lg shadow-DarkBlue shadow-lg  hover:scale-110 transition-transform duration-1000 ease-in-out"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("patients_form_contacto_button_sending") : t("patients_form_contacto_button_send")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PacientesForm;
