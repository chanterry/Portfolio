import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

import 'flag-icon-css/css/flag-icons.css'
import './Header.css';
import Logo from '../img/logo.png';

const Header = (props) => {

    const {onToggle, toggle} = props

    const { t } = useTranslation();

    return(
        <div className='navbar'>
            <a href='#home'><img src={Logo} className='logo' alt='logo'></img></a>
            <ul className='navbar_list'>
                <li><a href='#about'>{t('about')}</a></li>
                <li><a href='#projects'>{t('projects')}</a></li>
                <li>
                    <div 
                        className={toggle ? 'flag-icon flag-icon-us' : 'flag-icon flag-icon-fr'}
                        onClick={onToggle}
                    >
                    </div>
                </li>
            </ul>
        </div>
    )
} 

export default Header