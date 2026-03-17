import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { t } = useLanguage();

    useEffect(() => { setIsLoaded(true); }, []);

    return (
        <section className="hero">
            <div 
                className="hero-bg"
                style={{ backgroundImage: `url("/images/page d'accueil.jpg")` }}
            >
                <div className="hero-overlay" />
            </div>

            <div className="container hero-content">
                <div className={`hero-text-box ${isLoaded ? 'loaded' : ''}`}>
                    <span className="hero-tagline">{t('hero.tagline')}</span>
                    <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t('hero.title') }}></h1>
                    <p className="hero-subtitle">
                        {t('hero.subtitle')}
                    </p>
                    <div className="hero-btns">
                        <Link to="/expertise" className="btn btn-primary">
                            {t('hero.discover')} <FaArrowRight />
                        </Link>
                        <Link to="/contact" className="btn hero-btn-outline">
                            {t('hero.explore')}
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
