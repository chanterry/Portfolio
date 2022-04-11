import React from "react"
import { useTranslation } from "react-i18next";
import './About.css'
import Portrait from '../img/portrait.jpg'

function About ({data2, data3}){

    const { t } = useTranslation();

    return(
        <div className="about" id="about">
            <h1 className="title">{t('about')}</h1>
            <div className="description_container_grid about_description"> 
                <div className="portrait_position">
                    <img src={Portrait} className="portrait" alt="portrait"></img>
                </div>  

                <div className="about_right">
                    <h2 className="subtitle_about">{t('me')}</h2> 
                    <p>{t('me_paragraph')}</p>

                    <div className="row">
                        <div>{t('me_believer')} : 
                            <ul>
                                <li>{t('clean_code')}</li>
                                <li>{t('open_source')}</li>
                                <li>{t('ux_exp')}</li>
                            </ul>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="technologies">
                <h2 className="subtitle">{t('technologies')}</h2>
                <div>
                    <div className="row technologies_logo">
                        {data2.map((item) => 
                            <div className="col-2" key={item.id}>{item.logo}</div>
                        )}
                    </div>

                    <div className="row">
                        {data3.map((item2) => 
                            <div className="col-2" key={item2.id}>{item2.logo}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;