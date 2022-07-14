import React from "react"
import { useTranslation } from "react-i18next";
import './Projects.css'
import bric_broc from '../img/bric_broc.png'
//import la_cite from '../img/la_cite.png'
import resume from '../img/resume.png'
import CV_english from '../img/Terry_Resume.pdf'
import CV_french from '../img/CV_Terry.pdf'
import crypto_app from '../img/crypto_app.png'
import todolist from '../img/todolist.png'

const Projects = (props) => {

    const {toggle3} = props;

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
                    <a href="https://chanterry.github.io/crypto-app/" target="_blank" rel="noreferrer"><img src={crypto_app} className="projects_img" alt="crypto_app"></img></a>
                </div>
                <div>
                    <h2 className="subtitle_projetcs">{t('crypto_app')}</h2>
                    <p>{t('crypto_app_subtitle')}</p>
                    <p>{t('crypto_app_description')}</p>
                </div>
            </div>

            <div className="row projects_description">
                <div>
                    <a href="https://chanterry.github.io/todo-list/" target="_blank" rel="noreferrer"><img src={todolist} className="projects_img" alt="crypto_app"></img></a>
                </div>
                <div>
                    <h2 className="subtitle_projetcs">{t('todolist_app')}</h2>
                    <p>{t('todolist_app_subtitle')}</p>
                    <p>{t('todolist_app_description')}</p>
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
                        <a href={toggle3 ? CV_french : CV_english}  className="resume_link" target='_blank' rel="noreferrer">{t('resume')}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects