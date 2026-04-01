import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">Impact Horizon Africa</Link>
                        <p className="footer-tagline">
                            {t('footer.tagline')}
                        </p>
                        <div className="footer-socials">
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="Email"><FaEnvelope /></a>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="footer-nav-group">
                        <div className="footer-col">
                            <h4>{t('footer.company')}</h4>
                            <ul>
                                <li><Link to="/about">{t('footer.links.about')}</Link></li>
                                <li><Link to="/team">{t('footer.links.leadership')}</Link></li>
                                <li><Link to="/network">{t('footer.links.network')}</Link></li>
                                <li><Link to="/contact">{t('footer.links.careers')}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>{t('footer.services')}</h4>
                            <ul>
                                <li><Link to="/expertise">{t('footer.links.pillars')}</Link></li>
                                <li><Link to="/how-we-work">{t('footer.links.methodology')}</Link></li>
                                <li><Link to="/expertise">{t('footer.links.strategic')}</Link></li>
                                <li><Link to="/expertise">{t('footer.links.digital')}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>{t('footer.contact')}</h4>
                            <ul>
                                <li>{t('footer.location')}</li>
                                <li><a href="mailto:contact@impacthorizon.africa">contact@impacthorizon.africa</a></li>
                                <li><a href="tel:+237699970402">+237 699 970 402</a></li>
                                <li><a href="tel:+32493983815">+32 493 98 38 15</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Impact Horizon Africa. {t('footer.rights')}</p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy">{t('footer.privacy')}</Link>
                        <Link to="/terms">{t('footer.terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
