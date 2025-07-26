import React, { useState } from 'react'
import { LanguageContext } from "../context/LanguageContext";

const LanguageProvider = ({ children }) => {
    const [locale, setLocale] = useState()

    return (
        < LanguageContext.Provider
            value={{ locale, setLocale }}>
            {children}
        </LanguageContext.Provider >
    )
}


export default LanguageProvider;