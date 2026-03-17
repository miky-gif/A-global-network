import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Network.css';

const Network = () => {
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

        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const regions = [
        {
            name: t('networkPage.regions.items.1.name'),
            focus: t('networkPage.regions.items.1.focus'),
            image: "/images/hero1.png"
        },
        {
            name: t('networkPage.regions.items.2.name'),
            focus: t('networkPage.regions.items.2.focus'),
            image: "/images/hero2.png"
        },
        {
            name: t('networkPage.regions.items.3.name'),
            focus: t('networkPage.regions.items.3.focus'),
            image: "/images/hero3.png"
        },
        {
            name: t('networkPage.regions.items.4.name'),
            focus: t('networkPage.regions.items.4.focus'),
            image: "/images/hero1.png"
        }
    ];

    return (
        <div className="network-page">
            <section className="page-header">
                <img src="/images/hero1.png" alt="" className="header-bg-image" />
                <div className="container header-content">
                    <span className="section-subtitle">{t('networkPage.header.subtitle')}</span>
                    <h1 className="reveal">{t('networkPage.header.title')}</h1>
                    <p className="header-desc reveal delay-1">{t('networkPage.header.desc')}</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container network-intro-grid">
                    <div className="network-intro-text reveal">
                        <span className="section-subtitle">{t('networkPage.intro.subtitle')}</span>
                        <h2>{t('networkPage.intro.title')}</h2>
                        <p className="text-muted mb-4">
                            {t('networkPage.intro.desc')}
                        </p>
                    </div>
                    <div className="network-intro-image reveal delay-1">
                        <img src="/images/hero2.png" alt="Our network across Africa" />
                        <div className="network-image-backdrop"></div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-4 reveal">
                        <span className="section-subtitle">{t('networkPage.regions.subtitle')}</span>
                        <h2>{t('networkPage.regions.title')}</h2>
                    </div>
                    <div className="regions-grid">
                        {regions.map((r, i) => (
                            <div key={i} className={`region-card reveal delay-${i + 1}`}>
                                <div className="region-card-image">
                                    <img src={r.image} alt={r.name} />
                                </div>
                                <div className="region-card-body">
                                    <h3>{r.name}</h3>
                                    <p className="text-muted">{r.focus}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="network-stats">
                        <div className="network-stat reveal delay-1">
                            <span className="network-stat-num">150+</span>
                            <span className="network-stat-label">{t('networkPage.stats.experts')}</span>
                        </div>
                        <div className="network-stat reveal delay-2">
                            <span className="network-stat-num">15+</span>
                            <span className="network-stat-label">{t('networkPage.stats.countries')}</span>
                        </div>
                        <div className="network-stat reveal delay-3">
                            <span className="network-stat-num">48h</span>
                            <span className="network-stat-label">{t('networkPage.stats.mobilization')}</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Network;
