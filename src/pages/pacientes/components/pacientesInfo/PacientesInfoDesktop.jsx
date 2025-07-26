import { useTranslation } from "react-i18next";


const PacientesInfoDesktop = () => {

    const { t } = useTranslation("translation", { keyPrefix: "patients" })

    return (
        <section className="w-full py-16 px-8 bg-White text-center">
            <div className="w-3/4 mx-auto">
                <h2 className="font-Poppins font-ExtraBold text-6xl inline text-Black p-2">
                    {t("patients_info_title1")} <span className="text-White bg-Blue px-2 py-1">{t("patients_info_title2")}</span>
                </h2>
                <p className="font-Poppins text-3xl font-ExtraBold text-Black text-right my-6">
                {t("patients_info_paragraph")}
                </p>
            </div>
            <div className="flex justify-between items-center">
                {/* Tarjeta 1 */}
                <div className="flex flex-col items-center mt-36 max-w-xs">
                    <img
                        src="/images/img2_info_patient_mobile.png"
                        alt="Calidad de atención"
                        className="w-64 h-64 object-cover rounded-full shadow-LightShadowGrey"
                    />
                    <h3 className="font-Poppins text-2xl font-ExtraBold text-Blue mt-6">¿Qué son los Implantes Cigomáticos?</h3>
                    <p className="font-Poppins text-lg text-Black mt-2">
                        Solución para pacientes con atrofia maxilar severa, fijando prótesis sin injertos óseos.
                    </p>
                </div>

                {/* Tarjeta 2 */}
                <div className="flex flex-col items-center max-w-xs">
                    <img
                        src="/images/img_info_patient_mobile.png"
                        alt="Integridad y Confianza"
                        className="w-64 h-64 object-cover rounded-full shadow-LightShadowGrey"
                    />
                    <h3 className="font-Poppins text-2xl font-ExtraBold text-Blue mt-6">Beneficios</h3>
                    <p className="font-Poppins text-lg text-Black mt-2">
                        No requieren injertos y ofrecen estabilidad con una sonrisa funcional desde el primer día.
                    </p>
                </div>

                {/* Tarjeta 3 */}
                <div className="flex flex-col items-center max-w-xs mt-36">
                    <img
                        src="/images/img3_info_patient_mobile.png"
                        alt="Procedimiento Implante"
                        className="w-64 h-64 object-cover rounded-full shadow-LightShadowGrey"
                    />
                    <h3 className="font-Poppins text-2xl font-ExtraBold text-Blue mt-6">Procedimiento</h3>
                    <p className="font-Poppins text-lg text-Black mt-2">
                        En una única cirugía, los implantes se fijan al pómulo y se colocan dientes fijos provisionales el mismo día.
                    </p>
                </div>

                {/* Tarjeta 4 */}
                <div className="flex flex-col items-center max-w-xs mt-10">
                    <img
                        src="/images/img4_info_patient_mobile.png"
                        alt="Post cirugía"
                        className="w-64 h-64 object-cover rounded-full shadow-LightShadowGrey"
                    />
                    <h3 className="font-Poppins text-2xl font-ExtraBold text-Blue mt-6">Post cirugía</h3>
                    <p className="font-Poppins text-lg text-Black mt-2">
                        Recuperación rápida con mínimas molestias. Dientes fijos desde el primer día y definitivos en pocos meses.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PacientesInfoDesktop;
