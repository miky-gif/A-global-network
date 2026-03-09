import React, { useEffect } from 'react';
import './About.css';

const About = () => {
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
        <div className="about-page">
            <section className="page-header">
                <img src="/images/hero3.png" alt="" className="header-bg-image" />
                <div className="container header-content">
                    <span className="section-subtitle">Organization</span>
                    <h1 className="reveal">Who We Are</h1>
                    <p className="header-desc reveal delay-1">A pan-African platform committed to delivering excellence and measurable results through high-level expertise.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container about-story-grid">
                    <div className="about-story-text reveal-left">
                        <span className="section-subtitle">Our Story</span>
                        <h2>Built to deliver excellence across the continent</h2>
                        <p className="text-muted mb-4">
                            Impact Horizon Africa is a premier pan-African platform that aggregates a global network of over 150 elite experts. Our core mission is the strategic design and flawless execution of development projects that foster sustainable growth.
                        </p>
                        <p className="text-muted mb-4">
                            We bridge the gap between international donor standards and specific local African contexts, ensuring that every project is socially anchored and institutionally supported.
                        </p>
                        <div className="about-stats">
                            <div className="about-stat">
                                <span className="stat-number">150+</span>
                                <span className="stat-label">Global Experts</span>
                            </div>
                            <div className="about-stat">
                                <span className="stat-number">15+</span>
                                <span className="stat-label">Countries</span>
                            </div>
                            <div className="about-stat">
                                <span className="stat-number">48h</span>
                                <span className="stat-label">Mobilization</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-story-image reveal-right">
                        <img src="/images/hero2.png" alt="Our impact across Africa" />
                        <div className="about-image-backdrop"></div>
                    </div>
                </div>
            </section>

            <section className="about-fullwidth-image">
                <img src="/images/hero1.png" alt="Development landscape" />
                <div className="fullwidth-overlay">
                    <h2 className="reveal">Driving sustainable growth.</h2>
                </div>
            </section>

            <section className="section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-4 reveal">
                        <span className="section-subtitle">Foundation</span>
                        <h2>What drives us forward</h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-card reveal delay-1">
                            <div className="value-icon">01</div>
                            <h3>Our Vision</h3>
                            <p className="text-muted">To be the leading catalyst for sustainable development in Africa, recognized for our ability to translate high-level vision into tangible, long-term impact.</p>
                        </div>
                        <div className="value-card reveal delay-2">
                            <div className="value-icon">02</div>
                            <h3>Our Mission</h3>
                            <p className="text-muted">To provide organizations with the strategic intelligence and operational support necessary to design, capture, and execute high-impact development projects.</p>
                        </div>
                        <div className="value-card reveal delay-3">
                            <div className="value-icon">03</div>
                            <h3>Our Values</h3>
                            <ul className="value-list">
                                <li>Excellence & Precision</li>
                                <li>Social Accountability</li>
                                <li>Local Stewardship</li>
                                <li>Innovation & Ethics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
