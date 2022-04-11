import React from 'react';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import 'flag-icon-css/css/flag-icons.css'
import './Header.css';
import Logo from '../img/logo.png';

const Header = ({data}) => {

    const { t } = useTranslation();
    
    return(
        <div className='navbar'>
            <a href='#home'><img src={Logo} className='logo' alt='logo'></img></a>
            <ul className='navbar_list'>
                <li><a href='#about'>{t('about')}</a></li>
                <li><a href='#projects'>{t('projects')}</a></li>
                {data.map(({code, country}) => (
                    <li key={country}>
                        <span 
                            className={`flag-icon flag-icon-${country}`} 
                            onClick={() => i18n.changeLanguage(code)}
                        ></span>
                    </li>
                ))}
            </ul>
        </div>
    )
} 

export default Header