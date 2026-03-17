import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe, FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const langMenuRef = useRef(null);
    const mobileLangMenuRef = useRef(null);
    const location = useLocation();

    // Close lang menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const isOutsideDesktop = langMenuRef.current && !langMenuRef.current.contains(event.target);
            const isOutsideMobile = mobileLangMenuRef.current && !mobileLangMenuRef.current.contains(event.target);
            
            if (isOutsideDesktop && isOutsideMobile) {
                setIsLangMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        setIsLangMenuOpen(false);
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [mobileMenuOpen]);

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/about', label: t('nav.about') },
        { path: '/expertise', label: t('nav.expertise') },
        { path: '/how-we-work', label: t('nav.approach') },
        { path: '/network', label: t('nav.network') },
        { path: '/team', label: t('nav.team') }
    ];

    return (
        <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="navbar">
                    <div className="nav-container">
                        {/* Logo Section */}
                        <div className="nav-brand">
                            <Link to="/">
                                <img 
                                    src={scrolled ? "/images/logo.png" : "/images/logo blanc.png"} 
                                    alt="Impact Horizon Africa" 
                                    className="logo-img"
                                />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <ul className="nav-menu">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink 
                                        to={link.path} 
                                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* Right Actions */}
                        <div className="nav-actions">
                            <div className="lang-menu-container" ref={langMenuRef}>
                                <button 
                                    className={`lang-toggle ${isLangMenuOpen ? 'active' : ''}`} 
                                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} 
                                    aria-label="Toggle Language"
                                >
                                    <FaGlobe size={18} />
                                    <span>{language}</span>
                                    <FaChevronDown size={12} className="lang-chevron" />
                                </button>
                                
                                {isLangMenuOpen && (
                                    <div className="lang-dropdown shadow-lg">
                                        <button 
                                            className={`lang-option ${language === 'EN' ? 'selected' : ''}`}
                                            onClick={() => changeLanguage('EN')}
                                        >
                                            <span className="lang-code">EN</span>
                                            <span className="lang-name">English</span>
                                        </button>
                                        <button 
                                            className={`lang-option ${language === 'FR' ? 'selected' : ''}`}
                                            onClick={() => changeLanguage('FR')}
                                        >
                                            <span className="lang-code">FR</span>
                                            <span className="lang-name">Français</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                            <Link to="/contact" className="btn nav-btn">
                                {t('nav.contact')}
                            </Link>
                            <button 
                                className="mobile-toggle" 
                                onClick={() => setMobileMenuOpen(true)}
                                aria-label="Open Menu"
                            >
                                <FaBars size={22} />
                            </button>
                        </div>
                    </div>
                </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-content">
                    <div className="mobile-header">
                        <img src="/images/logo.png" alt="Impact Horizon Africa" className="mobile-logo-img" />
                        <div className="mobile-header-actions">
                            <div className="lang-menu-container mobile-lang-container" ref={mobileLangMenuRef}>
                                <button 
                                    className={`lang-toggle mobile-lang-toggle ${isLangMenuOpen ? 'active' : ''}`} 
                                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                >
                                    <FaGlobe size={20} />
                                    <span>{language}</span>
                                    <FaChevronDown size={14} className="lang-chevron" />
                                </button>
                                
                                {isLangMenuOpen && (
                                    <div className="lang-dropdown mobile-lang-dropdown shadow-lg">
                                        <button 
                                            className={`lang-option ${language === 'EN' ? 'selected' : ''}`}
                                            onClick={() => changeLanguage('EN')}
                                        >
                                            <span className="lang-code">EN</span>
                                            <span className="lang-name">English</span>
                                        </button>
                                        <button 
                                            className={`lang-option ${language === 'FR' ? 'selected' : ''}`}
                                            onClick={() => changeLanguage('FR')}
                                        >
                                            <span className="lang-code">FR</span>
                                            <span className="lang-name">Français</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                            <button 
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close Menu"
                                className="close-menu-btn"
                            >
                                <FaTimes size={26} />
                            </button>
                        </div>
                    </div>
                    
                    <div className="mobile-links">
                        {navLinks.map((link, index) => (
                            <NavLink 
                                key={index} 
                                to={link.path} 
                                onClick={() => setMobileMenuOpen(false)}
                                className={({ isActive }) => isActive ? 'active' : ''}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Link 
                            to="/contact" 
                            className="mt-4 btn btn-primary btn-full text-center"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t('nav.contactUs')}
                        </Link>
                    </div>
                    
                    <div className="mobile-footer-info">
                        <p>hello@impacthorizon.africa</p>
                        <p>Impact Horizon Africa © 2026</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
