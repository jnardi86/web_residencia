import React, { useEffect, useContext } from 'react'
import Select from 'react-select';
import { LanguageContext } from "../../../../src/context/LanguageContext";
import i18n from "../../../core/config/i18n";
import "./switchLanguage.css"
import sp_flag from "../../../assets/sp_flag.jpg"
import it_flag from "../../../assets/it_flag.png"
import pt_flag from "../../../assets/pt_flag.jpg"
import { useSelect } from '../hooks/useSelect';


const SwitchLanguage = () => {

    const { locale, setLocale } = useContext(LanguageContext);
    const { customStyles } = useSelect()
    // const handleChange = (event) => setLocale(event.target.value);
    const handleChange = (value) => setLocale(value);

    const languageOptions = [
        { value: 'es', label: <span><img className="w-5" src={sp_flag} alt="Spain flag" /></span> },
        { value: 'it', label: <span><img className="w-5" src={it_flag} alt="UK flag" /></span> },
        { value: 'pt', label: <span><img className="w-5" src={pt_flag} alt="Portughese flag" /></span> },
    ];


    useEffect(() => {
        setLocale(i18n.resolvedLanguage);
        console.log("Language detected is: ", i18n.resolvedLanguage)
    }, [])

    useEffect(() => {
        i18n.changeLanguage(locale)
    }, [locale])

    return (
        <div >
            {/* <select className='switchLanguage' value={locale} onChange={handleChange}>
                <option value="es"><img src={sp_flag} alt="spain flag" /></option>
                <option value="en"><img src={sp_flag} alt="spain flag" />EN</option>
            </select> */}
            <Select
                className='switchLanguage'
                styles={customStyles}
                value={languageOptions.find((option) => option.value === locale)}
                onChange={(selectedOption) => handleChange(selectedOption.value)}
                options={languageOptions}
                isSearchable={false} // Disable search box
            />
        </div>
    )
}

export default SwitchLanguage
