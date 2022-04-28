import React from "react";
import { useTranslation } from "react-i18next";
import './Footer.css';

const Footer = () =>{

    const { t } = useTranslation();

    return(
        <div className="footer">
            <p>{t('copyright')} © 2022 - Terry Chan</p>
        </div>
    )
}

export default Footer