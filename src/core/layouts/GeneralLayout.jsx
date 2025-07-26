import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import LanguageProvider from '../../providers/LanguageProvider'


const GeneralLayout = ({ children }) => {
    return (
        <div className='mx-auto max-w-[1920px] bg-White'>
            <LanguageProvider>
                <Navbar />
                {children}
                <Footer />
            </LanguageProvider>
        </div>
    )
}

export default GeneralLayout