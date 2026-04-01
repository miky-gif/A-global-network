import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './About.css';

const About = () => {
    const { t } = useLanguage();
    // Add simple scroll reveal
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-page">
            <section className="page-header">
                <img src="/images/hero3.png" alt="" className="header-bg-image" />
                <div className="container header-content">
                    <span className="section-subtitle">{t('aboutPage.header.subtitle')}</span>
                    <h1 className="reveal">{t('aboutPage.header.title')}</h1>
                    <p className="header-desc reveal delay-1">{t('aboutPage.header.desc')}</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container about-story-grid">
                    <div className="about-story-text reveal-left">
                        <span className="section-subtitle">{t('aboutPage.story.subtitle')}</span>
                        <h2>{t('aboutPage.story.title')}</h2>
                        <p className="text-muted mb-4">
                            {t('aboutPage.story.p1')}
                        </p>
                        <p className="text-muted mb-4">
                            {t('aboutPage.story.p2')}
                        </p>
                        <div className="about-stats">
                            <div className="about-stat">
                                <span className="stat-number">150+</span>
                                <span className="stat-label">{t('aboutPage.story.stats.experts')}</span>
                            </div>
                            <div className="about-stat">
                                <span className="stat-number">15+</span>
                                <span className="stat-label">{t('aboutPage.story.stats.countries')}</span>
                            </div>
                            <div className="about-stat">
                                <span className="stat-number">48h</span>
                                <span className="stat-label">{t('aboutPage.story.stats.mobilization')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-story-image reveal-right">
                        <img src="/images/Strategic Intelligence.jpg" alt="Our impact across Africa" />
                        <div className="about-image-backdrop"></div>
                    </div>
                </div>
            </section>

            <section className="about-fullwidth-image">
                <img src="/images/social.jpg" alt="Development landscape" />
                <div className="fullwidth-overlay">
                    <h2 className="reveal">{t('aboutPage.driving')}</h2>
                </div>
            </section>

            <section className="section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-4 reveal">
                        <span className="section-subtitle">{t('aboutPage.foundation.subtitle')}</span>
                        <h2>{t('aboutPage.foundation.title')}</h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-card reveal delay-1">
                            <div className="value-icon">01</div>
                            <h3>{t('aboutPage.foundation.vision.title')}</h3>
                            <p className="text-muted">{t('aboutPage.foundation.vision.desc')}</p>
                        </div>
                        <div className="value-card reveal delay-2">
                            <div className="value-icon">02</div>
                            <h3>{t('aboutPage.foundation.mission.title')}</h3>
                            <p className="text-muted">{t('aboutPage.foundation.mission.desc')}</p>
                        </div>
                        <div className="value-card reveal delay-3">
                            <div className="value-icon">03</div>
                            <h3>{t('aboutPage.foundation.values.title')}</h3>
                            <ul className="value-list">
                                {t('aboutPage.foundation.values.points')?.map ? t('aboutPage.foundation.values.points').map((point, i) => (
                                    <li key={i}>{point}</li>
                                )) : null}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
