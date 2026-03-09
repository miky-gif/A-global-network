import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [language, setLanguage] = useState('EN');
    const location = useLocation();

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'EN' ? 'FR' : 'EN');
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
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/expertise', label: 'Expertise' },
        { path: '/how-we-work', label: 'Approach' },
        { path: '/network', label: 'Network' },
        { path: '/team', label: 'Team' }
    ];

    return (
        <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="navbar">
                    <div className="nav-container">
                        {/* Logo Section */}
                        <div className="nav-brand">
                            <Link to="/">
                                <img 
                                    src="/images/logo.png" 
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
                            <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle Language">
                                <FaGlobe size={18} />
                                <span>{language}</span>
                            </button>
                            <Link to="/contact" className="btn nav-btn">
                                Contact
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
                            <button className="lang-toggle mobile-lang-toggle" onClick={toggleLanguage}>
                                <FaGlobe size={20} />
                                <span>{language}</span>
                            </button>
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
                            Contact Us
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
