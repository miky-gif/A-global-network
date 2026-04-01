import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Contact.css';

const Contact = () => {
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
        <div className="contact-page">
            <section className="page-header">
                <img src="/images/hero2.png" alt="" className="header-bg-image" />
                <div className="container header-content">
                    <span className="section-subtitle">{t('contactPage.header.subtitle')}</span>
                    <h1 className="reveal">{t('contactPage.header.title')}</h1>
                    <p className="header-desc reveal delay-1">{t('contactPage.header.desc')}</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container contact-grid">
                    <div className="contact-info reveal-left">
                        <span className="section-subtitle">{t('contactPage.info.subtitle')}</span>
                        <h2>{t('contactPage.info.title')}</h2>
                        <p className="text-muted mb-4">{t('contactPage.info.desc')}</p>

                        <div className="contact-details">
                            <div className="contact-detail">
                                <span className="detail-label">{t('contactPage.info.hq')}</span>
                                <span className="detail-value">{t('footer.location')}</span>
                            </div>
                            <div className="contact-detail">
                                <span className="detail-label">{t('contactPage.info.email')}</span>
                                <span className="detail-value"><a href="mailto:contact@impacthorizon.africa">contact@impacthorizon.africa</a></span>
                            </div>
                            <div className="contact-detail">
                                <span className="detail-label">{t('contactPage.info.phone')}</span>
                                <span className="detail-value">
                                    <a href="tel:+237699970402">+237 699 970 402</a><br />
                                    <a href="tel:+32493983815">+32 493 98 38 15</a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper reveal-right">
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>{t('contactPage.form.name')}</label>
                                    <input type="text" placeholder={t('contactPage.form.namePh')} required />
                                </div>
                                <div className="form-group">
                                    <label>{t('contactPage.form.email')}</label>
                                    <input type="email" placeholder={t('contactPage.form.emailPh')} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>{t('contactPage.form.org')}</label>
                                <input type="text" placeholder={t('contactPage.form.orgPh')} />
                            </div>
                            <div className="form-group">
                                <label>{t('contactPage.form.inquiry')}</label>
                                <select required>
                                    <option value="">{t('contactPage.form.options.default')}</option>
                                    <option value="partnership">{t('contactPage.form.options.partnership')}</option>
                                    <option value="expertise">{t('contactPage.form.options.expertise')}</option>
                                    <option value="network">{t('contactPage.form.options.network')}</option>
                                    <option value="other">{t('contactPage.form.options.other')}</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>{t('contactPage.form.message')}</label>
                                <textarea rows="5" placeholder={t('contactPage.form.messagePh')} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-full">
                                {t('contactPage.form.submit')} <FaArrowRight />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
