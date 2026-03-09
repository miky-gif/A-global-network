import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">Impact Horizon Africa</Link>
                        <p className="footer-tagline">
                            A premier pan-African platform bringing together a global network of experts dedicated to the design, capture, and execution of high-impact development projects.
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
                            <h4>Company</h4>
                            <ul>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/team">Leadership</Link></li>
                                <li><Link to="/network">Our Network</Link></li>
                                <li><Link to="/contact">Careers</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                <li><Link to="/expertise">Core Pillars</Link></li>
                                <li><Link to="/how-we-work">Methodology</Link></li>
                                <li><Link to="/expertise">Strategic Intelligence</Link></li>
                                <li><Link to="/expertise">Digital Governance</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Contact</h4>
                            <ul>
                                <li>Kigali, Rwanda</li>
                                <li><a href="mailto:contact@impacthorizon.africa">contact@impacthorizon.africa</a></li>
                                <li><a href="tel:+32493983815">+32 493 98 38 15</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Impact Horizon Africa. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
