import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from "./navItems";
import Hamburger from './Hamburger';
import { useTranslation } from 'react-i18next';
import i18n from "../../../core/config/i18n";
import SwitchLanguage from './SwitchLanguage';
import useNavDesktop from '../hooks/useNavDesktop';


const NavMobile = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'navbar' });
    const [menuOpen, setMenuOpen] = useState(false);
    const [hamburgerCheckbox, setHamburgerCheckbox] = useState(false);
    const { alpha } = useNavDesktop();

    useEffect(() => {
        menuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
    }, [menuOpen]);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        setHamburgerCheckbox(!hamburgerCheckbox);
    };

    return (
        <nav className='w-full fixed top-0 left-0 z-50'>
            {/* HEADER */}
            <div
                className='h-20 flex justify-between items-center px-5'
                style={{
                    // backgroundColor: `rgba(34, 58, 94, ${alpha}`,
                    backgroundColor: `rgba(57, 86, 221, ${alpha})`,
                }}
            >
                <div className='z-50'>
                    <Hamburger
                        menuOpen={menuOpen}
                        setMenuOpen={setMenuOpen}
                        hamburgerCheckbox={hamburgerCheckbox}
                        setHamburgerCheckbox={setHamburgerCheckbox}
                        onClick={handleMenuToggle}
                    />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="/images/logos/white.png" alt="Logo Residencia" width={70} height={70} />
                    {/* <LogoIcon width="40" height="40" color='#fff' /> */}
                </div>
            </div>

            {/* MENÚ */}
            <div className={`fixed z-40 top-0 right-0 ${menuOpen ? 'transform translate-x-0' : 'transform translate-x-full'} transition-transform duration-500 ease-in-out w-full h-3/4 p-9 bg-Blue bg-opacity-90`}>
                {menuOpen && (
                    <ul className='mt-40'>
                        {navItems.map((item, index) => (
                            <li
                                className='w-full p-3 text-center text-2xl font-Poppins font-Bold text-White gap-5'
                                key={index}
                            >
                                <Link className="linkTo textLinks" to={item.link} onClick={handleMenuToggle}>
                                    {t(item.label)}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <div className='mt-10 z-50 w-full flex justify-center'>
                                <SwitchLanguage />
                            </div>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default NavMobile;

