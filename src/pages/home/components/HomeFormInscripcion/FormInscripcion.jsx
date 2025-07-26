import React, { useState } from "react";
import TextInputComponent from "../../../../components/Form/TextInputComponent";
import { useFormInscripcion } from "./useFormInscripcion";
import { useTranslation } from "react-i18next";
import countryList from "react-select-country-list";

const FormInscripcion = () => {
  const {
    btnSubmitText,
    formData,
    handleChange,
    handleSubmitInscripcion,
    isSubmitting,
  } = useFormInscripcion();

  const { t } = useTranslation("translation", { keyPrefix: "home" });

  // Obtener la lista de países
  const countryOptions = countryList().getData();
  

  return (
    <div className="w-full tablet:w-3/4 laptop1:w-1/2 laptop2:w-1/3 m-auto rounded-lg bg-White shadow-lg p-6 mb-20">
      {/* <h2 className="title-sections font-Bold text-DarkBlue pb-5 text-center">
        {t("home_form_inscription_title")}
      </h2> */}
      <form
        onSubmit={handleSubmitInscripcion}
        className="space-y-4"
        disabled={isSubmitting}
      >
        <TextInputComponent
          id="nombre"
          label={t("home_form_inscription_name")}
          value={formData.nombre}
          onChange={handleChange}
        />
        <TextInputComponent
          id="apellido"
          label={t("home_form_inscription_lastname")}
          value={formData.apellido}
          onChange={handleChange}
        />
        <TextInputComponent
          id="email"
          label={t("home_form_inscription_email")}
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextInputComponent
          id="telefono"
          label={t("home_form_inscription_tel")}
          type="tel"
          value={formData.telefono}
          onChange={handleChange}
        />
        {/* <TextInputComponent
          id="pais"
          label={t("home_form_inscription_country")}
          value={formData.pais}
          onChange={handleChange}
        /> */}
        {/* Select para el país */}
        <div>
          <label
            className="w-full block font-Poppins text-base text-DarkBlue font-Semibold mb-2"
            htmlFor="pais"
          >
            {t("home_form_inscription_country")}
          </label>
          <select
            id="pais"
            name="pais"
            value={formData.pais}
            onChange={handleChange} // El mismo handler que usas para los otros inputs
            required
            className="w-full p-3 bg-LightGray_2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            <option className="font-Poppins text-base" value="" disabled>
              {t("home_form_inscription_country")}
            </option>
            {/* Mapear las opciones de países */}
            {countryOptions.map((country) => (
              <option
                key={country.value}
                className="font-Poppins text-base"
                value={country.label}
              >
                {country.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            className="w-full block font-Poppins text-base text-DarkBlue font-Semibold mb-2"
            htmlFor="fechaCurso"
          >
            {t("home_form_inscription_courseDate")}
          </label>
          <select
            id="fechaCurso"
            name="fechaCurso"
            value={formData.fechaCurso}
            onChange={handleChange}
            required
            className="w-full p-3 bg-LightGray_2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            <option className="font-Poppins text-base" value="" disabled>
              {t("home_form_inscription_selectDate")}
            </option>
            <option className="font-Poppins text-base" value="2-6/12">
              {t("home_form_inscription_date1")}
            </option>
          </select>
        </div>

        <div>
          <label
            className="block font-Poppins text-base text-DarkBlue font-Semibold mb-2"
            htmlFor="comentarios"
          >
            {t("home_form_inscription_comments")}
          </label>
          <textarea
            id="comentarios"
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
            rows="4"
            className="w-full font-Poppins text-base p-3 bg-LightGray_2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-TealGreen text-White font-Montserrat text-lg font-bold py-3 rounded-lg hover:bg-teal-700 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t("home_form_inscription_sending")
              : t("home_form_inscription_send")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormInscripcion;
