import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Hero from '../../components/Hero/Hero';
import './Home.css';

// Custom hook to trigger reveal animations on scroll
const useScrollReveal = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);
};

// Animated counter component for the stats section
const AnimatedCounter = ({ end, duration = 2500, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let startTime = null;
                    const animate = (currentTime) => {
                        if (!startTime) startTime = currentTime;
                        const progress = Math.min((currentTime - startTime) / duration, 1);
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                        setCount(Math.floor(easeOutQuart * end));
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };
                    requestAnimationFrame(animate);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <span ref={countRef}>
            {count}{suffix}
        </span>
    );
};

const Home = () => {
    useScrollReveal();

    const expertiseAreas = [
        {
            id: "01",
            title: "Strategic Intelligence",
            desc: "Evidence-based research and sectoral diagnostics to inform high-level decision making.",
            icon: "/images/Strategic Intelligence.jpg" // placeholder
        },
        {
            id: "02",
            title: "Digital Governance",
            desc: "Modernizing institutional frameworks through data architecture and analytics.",
            icon: "/images/digital.jpg" // placeholder
        },
        {
            id: "03",
            title: "Social Marketing",
            desc: "Driving behavioral change through community engagement and advocacy.",
            icon: "/images/social.jpg" // placeholder
        },
        {
            id: "04",
            title: "Climate & Infrastructure",
            desc: "Sustainable infrastructure design and climate adaptation strategies.",
            icon: "/images/hero1.png" // placeholder
        },
        {
            id: "05",
            title: "Human Development",
            desc: "Empowering communities through capacity building and skills transfer.",
            icon: "/images/hero2.png" // placeholder
        }
    ];

    const whyUsFeatures = [
        {
            id: "01",
            title: "End-to-end Project Mastery",
            desc: "We support the full project lifecycle from strategic design to impact reporting, leaving no gap between theory and field."
        },
        {
            id: "02",
            title: "Pan-African Network",
            desc: "Access to 150+ operational experts across the continent, allowing for rapid mobilization and deep local anchorage."
        },
        {
            id: "03",
            title: "Global Standards, Local Focus",
            desc: "We align strictly with international donor expectations while perfectly understanding African institutional realities."
        }
    ];

    return (
        <div className="home-page">
            <Hero />

            {/* IMPACT STATS */}
            <section className="impact-stats">
                <div className="container stats-grid">
                    <div className="stat-item reveal delay-1">
                        <span className="stat-number"><AnimatedCounter end={150} suffix="+" /></span>
                        <span className="stat-desc">Specialized Experts</span>
                    </div>
                    <div className="stat-divider reveal delay-2"></div>
                    <div className="stat-item reveal delay-3">
                        <span className="stat-number"><AnimatedCounter end={15} suffix="+" /></span>
                        <span className="stat-desc">Countries Covered</span>
                    </div>
                    <div className="stat-divider reveal delay-4"></div>
                    <div className="stat-item reveal delay-5">
                        <span className="stat-number"><AnimatedCounter end={48} suffix="h" /></span>
                        <span className="stat-desc">Mobilization Lead Time</span>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="home-about-section section-padding">
                <div className="container home-about-grid">
                    <div className="home-about-text reveal-left">
                        <span className="section-subtitle">About Us</span>
                        <h2>A global network, built for impact in Africa</h2>
                        <p className="text-muted mb-4">
                            Impact Horizon Africa is a premier pan-African platform bringing together a global network of experts dedicated to the design, capture and execution of high-impact development projects.
                        </p>
                        <p className="text-muted mb-4">
                            We operate at the intersection of international standards and local institutional realities, ensuring that projects are effectively delivered and socially anchored.
                        </p>
                        <Link to="/about" className="btn btn-outline mt-2">Discover Our Story</Link>
                    </div>
                    <div className="about-image-wrapper reveal-right">
                        <img src="/images/a propos acuueil.jpg" alt="Development landscape" />
                        <div className="about-image-backdrop"></div>
                    </div>
                </div>
            </section>

            {/* EXPERTISE SECTION */}
            <section className="expertise-section section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-4 reveal">
                        <span className="section-subtitle">Core Pillars</span>
                        <h2>Our Expertise Matrix</h2>
                        <p className="text-muted expertise-intro">Integrated solutions designed to navigate complexity and deliver sustainable development outcomes.</p>
                    </div>

                    <div className="expertise-grid">
                        {expertiseAreas.slice(0, 3).map((area, index) => (
                            <Link to="/expertise" key={index} className={`expertise-card reveal delay-${index + 1}`}>
                                <div className="expertise-card-img">
                                    <img src={area.icon} alt={area.title} loading="lazy" />
                                </div>
                                <div className="expertise-card-body">
                                    <span className="card-num">{area.id}</span>
                                    <h3>{area.title}</h3>
                                    <p>{area.desc}</p>
                                    <span className="card-link">Learn More <FaArrowRight /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-4 reveal">
                        <Link to="/expertise" className="btn btn-outline">View All Practice Areas</Link>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="home-why-section section-padding">
                <div className="container home-why-grid">
                    <div className="why-image-wrapper reveal-left">
                        <img src="/images/Why Us.jpg" alt="Professional collaboration" />
                    </div>
                    <div className="home-why-content reveal-right">
                        <span className="section-subtitle">Why Us</span>
                        <h2>Bridging the gap between theory and field</h2>

                        <div className="feature-list">
                            {whyUsFeatures.map((feature, index) => (
                                <div key={index} className="feature-item">
                                    <div className="feature-num">{feature.id}</div>
                                    <div className="feature-text">
                                        <h4>{feature.title}</h4>
                                        <p className="text-muted">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-box reveal">
                        <span className="section-subtitle text-white">Engage With Us</span>
                        <h2>Ready to accelerate impact?</h2>
                        <p>Partner with our high-level network of experts specialized in African development.</p>
                        <div className="cta-btns">
                            <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
                            <Link to="/expertise" className="btn btn-outline text-white border-white">Explore Services</Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
