import React, { useState } from "react";
import { useRef } from "react";
import TextInputComponent from "../../../../components/Form/TextInputComponent";
import { useFormContacto } from "./useFormContacto";
import { useTranslation } from "react-i18next";
import countryList from "react-select-country-list";
import ReCAPTCHA from "react-google-recaptcha";


const FormContacto = () => {
  const { formData, handleChange, handleSubmitContacto, isSubmitting, setRecaptchaToken } =
    useFormContacto();

  const { t } = useTranslation("translation", { keyPrefix: "home" });
  const recaptchaRef = useRef();

  // Obtener la lista de países
  const countryOptions = countryList().getData();

  return (
    <div className="w-full tablet:w-3/4 laptop1:w-1/2 laptop2:w-1/3 mx-auto rounded-lg bg-Blue shadow-lg p-6 laptop1:p-8 mb-20">
      {/* <h2 className="title-sections font-Bold text-DarkBlue pb-5 text-center">
        {t("home_form_contacto_title")}
      </h2> */}
      <form
        onSubmit={(e) => handleSubmitContacto(e, recaptchaRef)}
        className="space-y-4"
        disabled={isSubmitting}
      >
        <TextInputComponent
          id="nombre"
          label={t("home_form_contacto_name")}
          value={formData.nombre}
          onChange={handleChange}
        />
        <TextInputComponent
          id="apellido"
          label={t("home_form_contacto_lastname")}
          value={formData.apellido}
          onChange={handleChange}
        />
        <TextInputComponent
          id="email"
          label={t("home_form_contacto_email")}
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        {/* <TextInputComponent
          id="pais"
          label={t("home_form_contacto_country")}
          value={formData.pais}
          onChange={handleChange}
        /> */}
        <div>
          <label
            className="w-full block font-Poppins text-xl text-White font-Regular mb-2"
            htmlFor="pais"
          >
            {t("home_form_inscription_country")}
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
              {t("home_form_inscription_country")}
            </option>
            {/* Mapear las opciones de países */}
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
            {t("home_form_contacto_question")}
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

        <div className="flex flex-col items-center">
          <div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LdxOo0rAAAAAECEMwDHLskRpkwU_KH-_iWt-6vW"
              onChange={(token) => setRecaptchaToken(token)}
              className="mb-1"
            />
          </div>
          <button
            type="submit"
            // className="w-full bg-White text-Blue font-Poppins text-2xl font-SemiBold py-3 rounded-lg hover:bg-teal-700 transition duration-300 laptop1:w-1/2"
            className="w-full laptop1:w-1/2 text-center bg-White cursor-pointer text-Blue font-Poppins text-lg tablet:mt-6 tablet:text-xl laptop2:text-2xl font-Bold py-4 px-6 mb-8 rounded-lg shadow-DarkBlue shadow-lg  hover:scale-110 transition-transform duration-1000 ease-in-out"

            disabled={isSubmitting}
          >
            {isSubmitting
              ? t("home_form_contacto_sending")
              : t("home_form_contacto_send")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContacto;
