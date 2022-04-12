import React from "react"
import { useTranslation } from "react-i18next";
import './Projects.css'

import bric_broc from '../img/bric_broc.png'
import la_cite from '../img/la_cite.png'
import resume from '../img/resume.png'
import CV_english from '../img/Terry_Resume.pdf'
import CV_french from '../img/CV_Terry.pdf'

const Projects = (props) => {

    const { t } = useTranslation();

    return(
        <div className='projects' id="projects">
            <h1 className="title">{t('projects')}</h1>

            <div className="row projects_description">
                <div >
                    <a href="https://www.behance.net/gallery/135536637/Bric-Broc-Toy-rental-Website" target="_blank" rel="noreferrer"><img src={bric_broc} className="projects_img" alt="bric_broc"></img></a>
                </div>
                <div>
                    <h2 className="subtitle_projetcs">{t('bric_broc')}</h2>
                    <p>{t('bric_broc_subtitle')}</p>
                    <p>{t('bric_broc_description')}</p>
                </div>
            </div>

            <div className="row projects_description">
                <div>
                    <a href="https://fr.egliselacite.com/" target="_blank" rel="noreferrer"><img src={la_cite} className="projects_img" alt="la_cite"></img></a>
                </div>
                <div>
                    <h2 className="subtitle_projetcs">{t('la_cite')}</h2>
                    <p>{t('la_cite_subtitle')}</p>
                    <p>{t('la_cite_description')}</p>
                </div>
            </div>

            <div className="row projects_description">
                <div>
                    <a href="https://chanterry.github.io/Resume_react/" target="_blank" rel="noreferrer"><img src={resume} className="projects_img" alt="resume"></img></a>
                </div>
                <div>
                    <h2 className="subtitle_projetcs">{t('resume_react')}</h2>
                    <p>{t('resume_react_subtitle')}</p>
                    <p>{t('resume_react_description')}</p>

                    <div className="resume">
                        <a href={t('resume_pdf')} className="resume_link" target='_blank' rel="noreferrer">{t('resume')}</a>
                        <a href={CV_english} className="resume_test" target='_blank' rel="noreferrer">{t('resume')}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects