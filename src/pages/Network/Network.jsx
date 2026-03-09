import React, { useEffect } from 'react';
import './Network.css';

const Network = () => {
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

        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const regions = [
        {
            name: "West Africa",
            focus: "Strategic hubs in French and English speaking markets, including Senegal, Côte d'Ivoire, and Nigeria.",
            image: "/images/hero1.png"
        },
        {
            name: "Central Africa",
            focus: "Institutional advisory and high-level sectoral diagnostics throughout the CEMAC region.",
            image: "/images/hero2.png"
        },
        {
            name: "East Africa",
            focus: "Regional headquarters in Kigali, Rwanda, serving as a tech and governance innovation center.",
            image: "/images/hero3.png"
        },
        {
            name: "Southern Africa",
            focus: "Dedicated infrastructure, green finance, and donor-aligned impact measurement services.",
            image: "/images/hero1.png"
        }
    ];

    return (
        <div className="network-page">
            <section className="page-header">
                <img src="/images/hero1.png" alt="" className="header-bg-image" />
                <div className="container header-content">
                    <span className="section-subtitle">Presence</span>
                    <h1 className="reveal">A Pan-African Expert Network</h1>
                    <p className="header-desc reveal delay-1">Built for scale, agility, and measurable impact across the continent's most strategic development corridors.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container network-intro-grid">
                    <div className="network-intro-text reveal">
                        <span className="section-subtitle">Operational Scale</span>
                        <h2>Agile teams deployed where impact matters</h2>
                        <p className="text-muted mb-4">
                            With over 150 experts strategically embedded across Africa, we operate at the intersection of international standards and local institutional realities. Our model combines deep local presence with centralized coordination.
                        </p>
                    </div>
                    <div className="network-intro-image reveal delay-1">
                        <img src="/images/hero2.png" alt="Our network across Africa" />
                        <div className="network-image-backdrop"></div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-4 reveal">
                        <span className="section-subtitle">Regions</span>
                        <h2>Where we operate</h2>
                    </div>
                    <div className="regions-grid">
                        {regions.map((r, i) => (
                            <div key={i} className={`region-card reveal delay-${i + 1}`}>
                                <div className="region-card-image">
                                    <img src={r.image} alt={r.name} />
                                </div>
                                <div className="region-card-body">
                                    <h3>{r.name}</h3>
                                    <p className="text-muted">{r.focus}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="network-stats">
                        <div className="network-stat reveal delay-1">
                            <span className="network-stat-num">150+</span>
                            <span className="network-stat-label">Specialized Experts</span>
                        </div>
                        <div className="network-stat reveal delay-2">
                            <span className="network-stat-num">15+</span>
                            <span className="network-stat-label">Countries Covered</span>
                        </div>
                        <div className="network-stat reveal delay-3">
                            <span className="network-stat-num">48h</span>
                            <span className="network-stat-label">Mobilization Lead Time</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Network;
