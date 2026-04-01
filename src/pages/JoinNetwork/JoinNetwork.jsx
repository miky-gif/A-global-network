import React, { useEffect, useState } from 'react';
import { FaUpload, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './JoinNetwork.css';

const JoinNetwork = () => {
    const { t } = useLanguage();
    const [isSubmitted, setIsSubmitted] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we would typically handle form submission to a backend
        setIsSubmitted(true);
        window.scrollTo(0, 0);
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
                        <h2>Rejoignez l'élite du conseil en Afrique</h2>
                        <p className="text-muted mt-3 mb-4">
                            En rejoignant Impact Horizon Africa, vous intégrez un réseau exclusif de professionnels dédiés à la transformation du continent. Nous collaborons avec des experts pointus pour déployer des solutions durables et institutionnellement ancrées.
                        </p>
                        
                        <div className="info-feature-list">
                            <div className="info-feature">
                                <div className="info-icon"><FaCheckCircle /></div>
                                <div>
                                    <h4>Missions de haut niveau</h4>
                                    <p>Accédez à des projets stratégiques financés par les principaux bailleurs internationaux.</p>
                                </div>
                            </div>
                            <div className="info-feature">
                                <div className="info-icon"><FaCheckCircle /></div>
                                <div>
                                    <h4>Impact mesurable</h4>
                                    <p>Participez à la conception et l'exécution de programmes transformateurs sur le terrain.</p>
                                </div>
                            </div>
                            <div className="info-feature">
                                <div className="info-icon"><FaCheckCircle /></div>
                                <div>
                                    <h4>Réseau pluridisciplinaire</h4>
                                    <p>Collaborez avec plus de 150 experts répartis sur l'ensemble des corridors de développement africains.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-container">
                        <div className="form-card-header">
                            <h3>{t('joinNetworkPage.form.submit').split(' ')[0]} votre candidature</h3>
                        </div>
                        <form className="join-form shadow-md" onSubmit={handleSubmit}>
                            <div className="form-grid">
                                <div className="form-group full-width">
                                    <label>{t('joinNetworkPage.form.name')}</label>
                                    <input type="text" placeholder="John Doe" className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label>{t('joinNetworkPage.form.country')}</label>
                                    <input type="text" placeholder="Cameroun" className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label>{t('joinNetworkPage.form.sector')}</label>
                                    <input type="text" placeholder="Ex: Infrastructures, Santé publique" className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label>{t('joinNetworkPage.form.specialty')}</label>
                                    <input type="text" placeholder="Ex: Analyse de données, Gestion E&S" className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label>{t('joinNetworkPage.form.experience')}</label>
                                    <input type="number" min="0" placeholder="5" className="form-input" required />
                                </div>
                                <div className="form-group full-width">
                                    <label>{t('joinNetworkPage.form.cv')}</label>
                                    <div className="file-upload-wrapper">
                                        <input type="file" id="cv-upload" accept=".pdf,.doc,.docx" required />
                                        <label htmlFor="cv-upload" className="file-upload-label">
                                            <FaUpload className="upload-icon" /> 
                                            <span>Cliquez pour parcourir ou glissez votre fichier ici</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-footer mt-4">
                                <button type="submit" className="btn btn-primary btn-full form-submit-btn">
                                    {t('joinNetworkPage.form.submit')}
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
