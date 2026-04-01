import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './HowWeWork.css';

const HowWeWork = () => {
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

    const steps = [
        {
            num: "01",
            title: t('howWeWorkPage.steps.1.title'),
            desc: t('howWeWorkPage.steps.1.desc')
        },
        {
            num: "02",
            title: t('howWeWorkPage.steps.2.title'),
            desc: t('howWeWorkPage.steps.2.desc')
        },
        {
            num: "03",
            title: t('howWeWorkPage.steps.3.title'),
            desc: t('howWeWorkPage.steps.3.desc')
        },
        {
            num: "04",
            title: t('howWeWorkPage.steps.4.title'),
            desc: t('howWeWorkPage.steps.4.desc')
        },
        {
            num: "05",
            title: t('howWeWorkPage.steps.5.title'),
            desc: t('howWeWorkPage.steps.5.desc')
        }
    ];

    const assurances = [
        {
            title: t('howWeWorkPage.assurance.items.1.title'),
            desc: t('howWeWorkPage.assurance.items.1.desc')
        },
        {
            title: t('howWeWorkPage.assurance.items.2.title'),
            desc: t('howWeWorkPage.assurance.items.2.desc')
        },
        {
            title: t('howWeWorkPage.assurance.items.3.title'),
            desc: t('howWeWorkPage.assurance.items.3.desc')
        },
        {
            title: t('howWeWorkPage.assurance.items.4.title'),
            desc: t('howWeWorkPage.assurance.items.4.desc')
        }
    ];

    return (
        <div className="how-we-work-page">
            <section className="page-header">
                <img src="/images/hero1.png" alt="" className="header-bg-image" />
                <div className="container header-content">
                    <span className="section-subtitle">{t('howWeWorkPage.header.subtitle')}</span>
                    <h1 className="reveal">{t('howWeWorkPage.header.title')}</h1>
                    <p className="header-desc reveal delay-1">{t('howWeWorkPage.header.desc')}</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="steps-grid">
                        {steps.map((step, i) => (
                            <div key={i} className={`step-card reveal delay-${(i % 5) + 1}`}>
                                <span className="step-num">{step.num}</span>
                                <h3>{step.title}</h3>
                                <p className="text-muted">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="hww-image-band">
                <img src="/images/social.jpg" alt="Our process in action" />
                <div className="fullwidth-overlay">
                    <h2 className="reveal">{t('howWeWorkPage.execution')}</h2>
                </div>
            </section>

            <section className="section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-4 reveal">
                        <span className="section-subtitle">{t('howWeWorkPage.assurance.subtitle')}</span>
                        <h2>{t('howWeWorkPage.assurance.title')}</h2>
                    </div>
                    <div className="assurance-grid">
                        {assurances.map((item, i) => (
                            <div key={i} className={`assurance-card reveal delay-${(i % 2) + 1}`}>
                                <div className="assurance-bullet"></div>
                                <div className="assurance-text">
                                    <h4>{item.title}</h4>
                                    <p className="text-muted">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowWeWork;
