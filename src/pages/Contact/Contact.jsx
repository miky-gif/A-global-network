import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
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
                    <span className="section-subtitle">Engagement</span>
                    <h1 className="reveal">Get in Touch</h1>
                    <p className="header-desc reveal delay-1">Connect with our global network of experts to design, deploy, and measure high-impact development projects.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container contact-grid">
                    <div className="contact-info reveal-left">
                        <span className="section-subtitle">Contact</span>
                        <h2>Let's talk about impact</h2>
                        <p className="text-muted mb-4">Ready to transform complex development challenges into measurable results? Our strategic team is available for high-level consultations.</p>

                        <div className="contact-details">
                            <div className="contact-detail">
                                <span className="detail-label">Headquarters</span>
                                <span className="detail-value">Kigali, Rwanda</span>
                            </div>
                            <div className="contact-detail">
                                <span className="detail-label">Email</span>
                                <span className="detail-value"><a href="mailto:contact@impacthorizon.africa">contact@impacthorizon.africa</a></span>
                            </div>
                            <div className="contact-detail">
                                <span className="detail-label">Phone</span>
                                <span className="detail-value"><a href="tel:+32493983815">+32 493 98 38 15</a></span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper reveal-right">
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Jean Dupont" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="name@organization.com" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Organization</label>
                                <input type="text" placeholder="Organization name" />
                            </div>
                            <div className="form-group">
                                <label>Inquiry Type</label>
                                <select required>
                                    <option value="">Select an option</option>
                                    <option value="partnership">Strategic Partnership</option>
                                    <option value="expertise">Expertise & Services</option>
                                    <option value="network">Join Our Network</option>
                                    <option value="other">General Inquiry</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="Briefly describe your project or needs..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-full">
                                Send Message <FaArrowRight />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
