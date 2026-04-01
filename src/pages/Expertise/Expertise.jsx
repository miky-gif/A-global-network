import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Expertise.css';

const Expertise = () => {
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

    const areas = [
        {
            id: "01",
            title: t('expertisePage.areas.1.title'),
            desc: t('expertisePage.areas.1.desc'),
            items: t('expertisePage.areas.1.items') || [],
            image: "/images/Strategic Intelligence.jpg"
        },
        {
            id: "02",
            title: t('expertisePage.areas.2.title'),
            desc: t('expertisePage.areas.2.desc'),
            items: t('expertisePage.areas.2.items') || [],
            image: "/images/digital.jpg"
        },
        {
            id: "03",
            title: t('expertisePage.areas.3.title'),
            desc: t('expertisePage.areas.3.desc'),
            items: t('expertisePage.areas.3.items') || [],
            image: "/images/social.jpg"
        },
        {
            id: "04",
            title: t('expertisePage.areas.4.title'),
            desc: t('expertisePage.areas.4.desc'),
            items: t('expertisePage.areas.4.items') || [],
            image: "/images/hero1.png"
        },
        {
            id: "05",
            title: t('expertisePage.areas.5.title'),
            desc: t('expertisePage.areas.5.desc'),
            items: t('expertisePage.areas.5.items') || [],
            image: "/images/hero3.png"
        }
    ];

    return (
        <div className="expertise-page">
            <section className="page-header">
                <img src="/images/hero2.png" alt="" className="header-bg-image" />
                <div className="container header-content">
                    <span className="section-subtitle">{t('expertisePage.header.subtitle')}</span>
                    <h1 className="reveal">{t('expertisePage.header.title')}</h1>
                    <p className="header-desc reveal delay-1">{t('expertisePage.header.desc')}</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="expertise-flow">
                        {areas.map((area, i) => (
                            <div key={i} className={`exp-row reveal delay-1 ${i % 2 !== 0 ? 'exp-row-reverse' : ''}`}>
                                <div className="exp-image">
                                    <img src={area.image} alt={area.title} loading="lazy" />
                                </div>
                                <div className="exp-content">
                                    <span className="exp-number">{area.id}</span>
                                    <h2>{area.title}</h2>
                                    <p className="text-muted">{area.desc}</p>
                                    <ul className="exp-list">
                                        {area.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Expertise;
