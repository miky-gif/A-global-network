import React, { useEffect, useState } from 'react';
import { FaUpload, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './JoinNetwork.css';

const JoinNetwork = () => {
    const { t } = useLanguage();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [fileName, setFileName] = useState('');

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

    // Nous n'utilisons plus e.preventDefault() pour laisser le navigateur 
    // faire un POST natif, ce qui est obligatoire pour que FormSubmit lise le Fichier.
    const handleSubmit = () => {
        setIsSubmitting(true);
    };

    if (isSubmitted) {
        return (
            <div className="join-network-page success-state">
                <section className="section-padding">
                    <div className="container text-center success-box reveal">
                        <FaCheckCircle className="success-icon" />
                        <h2>Success!</h2>
                        <p>Thank you for your interest. Our team will review your application and get back to you shortly.</p>
                        <button onClick={() => window.location.href = '/'} className="btn btn-primary mt-4">Return Home</button>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="join-network-page">
            <section className="page-header">
                <img src="/images/Why Us.jpg" alt="" className="header-bg-image" />
                <div className="container header-content">
                    <span className="section-subtitle">{t('joinNetworkPage.header.subtitle')}</span>
                    <h1 className="reveal">{t('joinNetworkPage.header.title')}</h1>
                    <p className="header-desc reveal delay-1">{t('joinNetworkPage.header.desc')}</p>
                </div>
            </section>

            <section className="section-padding bg-light">
                <div className="container form-page-grid reveal">
                    <div className="form-page-info">
                        <h2>{t('joinNetworkPage.info.title')}</h2>
                        <p className="text-muted mt-3 mb-4">
                            {t('joinNetworkPage.info.desc')}
                        </p>
                        
                        <div className="info-feature-list">
                            <div className="info-feature">
                                <div className="info-icon"><FaCheckCircle /></div>
                                <div>
                                    <h4>{t('joinNetworkPage.info.features.1.title')}</h4>
                                    <p>{t('joinNetworkPage.info.features.1.desc')}</p>
                                </div>
                            </div>
                            <div className="info-feature">
                                <div className="info-icon"><FaCheckCircle /></div>
                                <div>
                                    <h4>{t('joinNetworkPage.info.features.2.title')}</h4>
                                    <p>{t('joinNetworkPage.info.features.2.desc')}</p>
                                </div>
                            </div>
                            <div className="info-feature">
                                <div className="info-icon"><FaCheckCircle /></div>
                                <div>
                                    <h4>{t('joinNetworkPage.info.features.3.title')}</h4>
                                    <p>{t('joinNetworkPage.info.features.3.desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-container">
                        <div className="form-card-header">
                            <h3>{t('joinNetworkPage.form.submitTitle')}</h3>
                        </div>
                        <form 
                            className="join-form shadow-md" 
                            action="https://formsubmit.co/jojajejujijy@gmail.com" 
                            method="POST" 
                            encType="multipart/form-data"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value="Impact Horizon Africa - Nouvelle candidature Expert !" />
                            <input type="hidden" name="_template" value="table" />
                            
                            <div className="form-grid">
                                <div className="form-group full-width">
                                    <label>{t('joinNetworkPage.form.name')}</label>
                                    <input type="text" name="name" placeholder={t('joinNetworkPage.form.namePh')} className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label>{t('joinNetworkPage.form.country')}</label>
                                    <input type="text" name="country" placeholder={t('joinNetworkPage.form.countryPh')} className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label>{t('joinNetworkPage.form.sector')}</label>
                                    <input type="text" name="sector" placeholder={t('joinNetworkPage.form.sectorPh')} className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label>{t('joinNetworkPage.form.specialty')}</label>
                                    <input type="text" name="specialty" placeholder={t('joinNetworkPage.form.specialtyPh')} className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label>{t('joinNetworkPage.form.experience')}</label>
                                    <input type="number" name="experience" min="0" placeholder={t('joinNetworkPage.form.experiencePh')} className="form-input" required />
                                </div>
                                <div className="form-group full-width">
                                    <label>{t('joinNetworkPage.form.cv')}</label>
                                    <div className="file-upload-wrapper">
                                        <input 
                                            type="file" 
                                            name="attachment" 
                                            id="cv-upload" 
                                            accept=".pdf,.doc,.docx" 
                                            required 
                                            onChange={(e) => {
                                                if (e.target.files && e.target.files.length > 0) {
                                                    setFileName(e.target.files[0].name);
                                                } else {
                                                    setFileName('');
                                                }
                                            }}
                                        />
                                        <label htmlFor="cv-upload" className={`file-upload-label ${fileName ? 'has-file' : ''}`}>
                                            {fileName ? <FaCheckCircle className="upload-icon" style={{color: '#10b981'}} /> : <FaUpload className="upload-icon" />}
                                            <span style={{ fontWeight: fileName ? 'bold' : 'normal', color: fileName ? '#10b981' : '' }}>
                                                {fileName ? fileName : t('joinNetworkPage.form.cvPlaceholder')}
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                            {submitError && (
                                <div className="form-error-message mt-3" style={{color: 'red', textAlign: 'center'}}>
                                    {submitError}
                                </div>
                            )}

                            <div className="form-footer mt-4">
                                <button type="submit" className="btn btn-primary btn-full form-submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? t('joinNetworkPage.form.submitting') : t('joinNetworkPage.form.submit')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JoinNetwork;
