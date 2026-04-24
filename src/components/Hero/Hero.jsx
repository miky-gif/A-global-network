import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { t } = useLanguage();

    const images = [
        "/images/page d'accueil.jpg",
        "/images/page d'accueil2.jpg",
        "/images/page d'accueil3.jpg"
    ];

    const slideData = t('hero.slides');

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="hero">
            <div 
                className="hero-slider-track" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {images.map((img, index) => (
                    <div key={index} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
                        <div 
                            className="hero-bg"
                            style={{ backgroundImage: `url("${img}")` }}
                        >
                            <div className="hero-overlay" />
                        </div>
                        
                        <div className="container hero-content">
                            <div className={`hero-text-box loaded`}>
                                <span className="hero-tagline">{slideData[index].tagline}</span>
                                <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: slideData[index].title }}></h1>
                                <p className="hero-subtitle">
                                    {slideData[index].subtitle}
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
                    </div>
                ))}
            </div>

            <div className="hero-slider-dots">
                {images.map((_, index) => (
                    <button 
                        key={index} 
                        className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
