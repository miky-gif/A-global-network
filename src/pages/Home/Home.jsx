import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Hero from '../../components/Hero/Hero';
import { useLanguage } from '../../context/LanguageContext';
import './Home.css';

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
    const { t } = useLanguage();

    const expertiseAreas = [
        {
            id: "01",
            title: t('home.expertise.areas.1.title'),
            desc: t('home.expertise.areas.1.desc'),
            icon: "/images/Strategic Intelligence.jpg" // placeholder
        },
        {
            id: "02",
            title: t('home.expertise.areas.2.title'),
            desc: t('home.expertise.areas.2.desc'),
            icon: "/images/digital.jpg" // placeholder
        },
        {
            id: "03",
            title: t('home.expertise.areas.3.title'),
            desc: t('home.expertise.areas.3.desc'),
            icon: "/images/social.jpg" // placeholder
        },
        {
            id: "04",
            title: t('home.expertise.areas.4.title'),
            desc: t('home.expertise.areas.4.desc'),
            icon: "/images/hero1.png" // placeholder
        },
        {
            id: "05",
            title: t('home.expertise.areas.5.title'),
            desc: t('home.expertise.areas.5.desc'),
            icon: "/images/hero2.png" // placeholder
        }
    ];

    const whyUsFeatures = [
        {
            id: "01",
            title: t('home.whyUs.features.1.title'),
            desc: t('home.whyUs.features.1.desc')
        },
        {
            id: "02",
            title: t('home.whyUs.features.2.title'),
            desc: t('home.whyUs.features.2.desc')
        },
        {
            id: "03",
            title: t('home.whyUs.features.3.title'),
            desc: t('home.whyUs.features.3.desc')
        }
    ];

    const testimonials = [
        {
            quote: t('home.testimonials.1.quote'),
            author: t('home.testimonials.1.author'),
            role: t('home.testimonials.1.role'),
            image: "/images/eqp1.jpeg"
        },
        {
            quote: t('home.testimonials.2.quote'),
            author: t('home.testimonials.2.author'),
            role: t('home.testimonials.2.role'),
            image: "/images/eqp2.jpeg"
        },
        {
            quote: t('home.testimonials.3.quote'),
            author: t('home.testimonials.3.author'),
            role: t('home.testimonials.3.role'),
            image: "/images/eqp3.jpeg"
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
                        <span className="stat-desc">{t('home.stats.experts')}</span>
                    </div>
                    <div className="stat-divider reveal delay-2"></div>
                    <div className="stat-item reveal delay-3">
                        <span className="stat-number"><AnimatedCounter end={15} suffix="+" /></span>
                        <span className="stat-desc">{t('home.stats.countries')}</span>
                    </div>
                    <div className="stat-divider reveal delay-4"></div>
                    <div className="stat-item reveal delay-5">
                        <span className="stat-number"><AnimatedCounter end={48} suffix="h" /></span>
                        <span className="stat-desc">{t('home.stats.mobilization')}</span>
                    </div>
                </div>
            </section>

            <div className="african-divider" aria-hidden="true"></div>

            {/* ABOUT SECTION */}
            <section className="home-about-section section-padding">
                <div className="container home-about-grid">
                    <div className="home-about-text reveal-left">
                        <span className="section-subtitle">{t('home.about.subtitle')}</span>
                        <h2>{t('home.about.title')}</h2>
                        <p className="text-muted mb-4">
                            {t('home.about.p1')}
                        </p>
                        <p className="text-muted mb-4">
                            {t('home.about.p2')}
                        </p>
                        <Link to="/about" className="btn btn-outline mt-2">{t('home.about.btn')}</Link>
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
                        <span className="section-subtitle">{t('home.expertise.subtitle')}</span>
                        <h2>{t('home.expertise.title')}</h2>
                        <p className="text-muted expertise-intro">{t('home.expertise.intro')}</p>
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
                                    <span className="card-link">{t('home.expertise.learnMore')} <FaArrowRight /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-4 reveal">
                        <Link to="/expertise" className="btn btn-outline">{t('home.expertise.viewAll')}</Link>
                    </div>
                </div>
            </section>

            <div className="african-divider on-light" aria-hidden="true"></div>

            {/* WHY CHOOSE US */}
            <section className="home-why-section section-padding">
                <div className="container home-why-grid">
                    <div className="why-image-wrapper reveal-left">
                        <img src="/images/Why Us.jpg" alt="Professional collaboration" />
                        <div className="why-floating-badge">
                            <span className="badge-number">{t('home.whyUs.badgeNumber')}</span>
                            <span className="badge-text" dangerouslySetInnerHTML={{ __html: t('home.whyUs.badgeText') }}></span>
                        </div>
                    </div>
                    <div className="home-why-content reveal-right">
                        <span className="section-subtitle">{t('home.whyUs.subtitle')}</span>
                        <h2>{t('home.whyUs.title')}</h2>

                        <div className="feature-list">
                            {whyUsFeatures.map((feature, index) => (
                                <div key={index} className="feature-item">
                                    <div className="feature-num-box">
                                        {feature.id}
                                    </div>
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

            {/* TESTIMONIALS */}
            <section className="testimonials-section section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-4 reveal">
                        <span className="section-subtitle">{t('home.testimonials.subtitle')}</span>
                        <h2>{t('home.testimonials.title')}</h2>
                        <p className="text-muted expertise-intro">{t('home.testimonials.intro')}</p>
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((testi, index) => (
                            <div key={index} className={`testimonial-card reveal delay-${index + 1}`}>
                                <div className="quote-mark">"</div>
                                <p className="testimonial-quote">{testi.quote}</p>
                                <div className="testimonial-author-box">
                                    <img src={testi.image} alt={testi.author} className="author-avatar" loading="lazy" />
                                    <div className="author-details">
                                        <h4>{testi.author}</h4>
                                        <p>{testi.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="african-divider on-light" aria-hidden="true"></div>

            {/* OUR NETWORK SECTION */}
            <section className="home-network-section">
                <div className="network-bg-image" style={{ backgroundImage: "url('/images/image de fond.jpg')" }}></div>
                <div className="network-gradient-top"></div>
                <div className="network-overlay"></div>

                <div className="container network-content">
                    <div className="network-grid">
                        <div className="network-text reveal-left">
                            <span className="section-subtitle text-white">{t('home.network.subtitle')}</span>
                            <h2>{t('home.network.title')}</h2>
                            <div className="network-desc">
                                <p>{t('home.network.p1')}</p>
                                <p>{t('home.network.p2')}</p>
                                <p>{t('home.network.p3')}</p>
                            </div>
                        </div>
                        <div className="network-map-wrapper reveal-right">
                            <img src="/images/afrique.png" alt="Africa Map" className="africa-map-img" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            {/* JOIN OUR NETWORK SECTION */}
            <section className="home-join-section section-padding">
                <div className="container">
                    <div className="home-join-card reveal">
                        <div className="home-join-grid">
                            <div className="home-join-content">
                                <span className="section-subtitle">{t('home.joinNetwork.subtitle')}</span>
                                <h2>{t('home.joinNetwork.title')}</h2>
                                <p className="text-muted">{t('home.joinNetwork.p1')}</p>
                                <ul className="home-join-benefits">
                                    <li><FaCheckCircle className="benefit-icon" /> Accès à des projets d'envergure</li>
                                    <li><FaCheckCircle className="benefit-icon" /> Réseau panafricain d'élite</li>
                                    <li><FaCheckCircle className="benefit-icon" /> Collaboration internationale</li>
                                </ul>
                                <Link to="/join-network" className="btn btn-primary mt-4">
                                    {t('home.joinNetwork.btn')} <FaArrowRight />
                                </Link>
                            </div>
                            <div className="home-join-image">
                                <img src="/images/Expert Network.jpg" alt="Join Network" loading="lazy" />
                                <div className="join-image-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-box reveal">
                        <span className="section-subtitle text-white">{t('home.cta.subtitle')}</span>
                        <h2>{t('home.cta.title')}</h2>
                        <p>{t('home.cta.desc')}</p>
                        <div className="cta-btns">
                            <Link to="/contact" className="btn btn-primary">{t('home.cta.btn1')}</Link>
                            <Link to="/expertise" className="btn btn-outline text-white border-white">{t('home.cta.btn2')}</Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
