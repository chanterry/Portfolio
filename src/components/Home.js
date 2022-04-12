import React from 'react';
import { useTranslation } from "react-i18next";
import './Home.css';

const Home = () => {

    const { t } = useTranslation();
    // Appel de la function scroll lors du scroll
    window.onscroll = function () {
        scrollFunction()
    }

    // function scroll fait apparait la flèche lorsque le scroll est de 50px.
    function scrollFunction () {
        let arrow = document.getElementById('myArrow');
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
            arrow.style.display = 'block';
        } else {
            arrow.style.display = 'none';
        }
    }

    //function qui fait remonter la page lorsqu'on appuie sur la flèche
    function topFunction (){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

     

    return(
        <>
            <div className='home' id='home'>
                <div className='side_bar'>
                    <ul className='side_bar_icons'>
                        <li><a href='https://github.com/chanterry' target='_blank' rel='noreferrer'><i className="devicon-github-original"></i></a></li>
                        <li><a href='https://www.linkedin.com/in/terrychan-paris/' target='_blank' rel='noreferrer'><i className="devicon-linkedin-plain"></i></a></li>
                    </ul>
                </div>

                <div className='welcome'>
                    <p className='title'>{t('welcome_message')}</p>
                    <h1 className='name'>{t('name')},</h1>
                    <h2>{t('position')}.</h2>
                </div>
                <div className='introduction'>
                    <img src={t('introduction')} alt='presentation'></img>
                </div>
                <div>
                    <i className="fa-solid fa-circle-arrow-up" id='myArrow' onClick={topFunction}></i>
                </div>
            </div>
        </>
    )
} 

export default Home