import React from "react"
import { useTranslation } from "react-i18next";
import './Projects.css'

const Projects = () => {

    const { t } = useTranslation();

    return(
        <div className='projects' id="projects">
            <h1 className="title">{t('projects')}</h1>

            <div className="row projects_description">
                <div >
                    <a href="https://www.behance.net/gallery/135536637/Bric-Broc-Toy-rental-Website" target="_blank" rel="noreferrer"><img src="./images/bric_broc.png" className="projects_img" alt="bric_broc"></img></a>
                </div>
                <div>
                    <h2 className="subtitle_projetcs">{t('bric_broc')}</h2>
                    <p>{t('bric_broc_subtitle')}</p>
                    <p>{t('bric_broc_description')}</p>
                </div>
            </div>

            <div className="row projects_description">
                <div>
                    <a href="https://fr.egliselacite.com/" target="_blank" rel="noreferrer"><img src="./images/la_cite.png" className="projects_img" alt="la_cite"></img></a>
                </div>
                <div>
                    <h2 className="subtitle_projetcs">{t('la_cite')}</h2>
                    <p>{t('la_cite_subtitle')}</p>
                    <p>{t('la_cite_description')}</p>
                </div>
            </div>

            <div className="row projects_description">
                <div>
                    <a href="https://chanterry.github.io/Resume_react/" target="_blank" rel="noreferrer"><img src="./images/resume.png" className="projects_img" alt="resume"></img></a>
                </div>
                <div>
                    <h2 className="subtitle_projetcs">{t('resume_react')}</h2>
                    <p>{t('resume_react_subtitle')}</p>
                    <p>{t('resume_react_description')}</p>

                    <div className="resume">
                        <a href={t('resume_pdf')} className="resume_link" target='_blank' rel="noreferrer">{t('resume')}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects