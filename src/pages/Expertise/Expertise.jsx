import React, { useEffect } from 'react';
import './Expertise.css';

const Expertise = () => {
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

    const areas = [
        {
            id: "01",
            title: "Strategic Intelligence & Research",
            desc: "We provide high-level sectoral studies and diagnostics to help our partners navigate complex African markets and institutional landscapes.",
            items: ["Sectoral studies and diagnostics", "Institutional technical assistance", "Competitive intelligence"],
            image: "/images/hero2.png"
        },
        {
            id: "02",
            title: "Digital Governance, Data & MEL",
            desc: "Modernizing governance through robust data architecture and impact-driven Monitoring, Evaluation, and Learning systems.",
            items: ["Monitoring, Evaluation & Learning systems", "Data architecture and analytics", "Automated donor reporting"],
            image: "/images/hero3.png"
        },
        {
            id: "03",
            title: "Social Marketing & Communication",
            desc: "Driving social change and project acceptability through evidence-based communication and community engagement strategies.",
            items: ["Behaviour change communication", "Community mobilization", "Advocacy & Social acceptability"],
            image: "/images/hero1.png"
        },
        {
            id: "04",
            title: "Climate, Environment & Infrastructure",
            desc: "Integrating environmental sustainability and climate resilience into infrastructure and territorial planning.",
            items: ["E&S impact assessments", "Climate adaptation strategies", "Green finance advisory"],
            image: "/images/hero2.png"
        },
        {
            id: "05",
            title: "Human Development & Social Capital",
            desc: "Investing in people and communities to ensure project sustainability and long-term social impact.",
            items: ["Community development", "Capacity building & Training", "Skills transfer & Local ownership"],
            image: "/images/hero3.png"
        }
    ];

    return (
        <div className="expertise-page">
            <section className="page-header">
                <img src="/images/hero2.png" alt="" className="header-bg-image" />
                <div className="container header-content">
                    <span className="section-subtitle">Core Pillars</span>
                    <h1 className="reveal">Our Areas of Expertise</h1>
                    <p className="header-desc reveal delay-1">Integrated expertise designed to transform complex challenges into measurable developmental impact.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="expertise-flow">
                        {areas.map((area, i) => (
                            <div key={i} className={`exp-row reveal delay-1 ${i % 2 !== 0 ? 'exp-row-reverse' : ''}`}>
                                <div className="exp-image">
                                    <img src={area.image} alt={area.title} loading="lazy" />
                                </div>
                                <div className="exp-content">
                                    <span className="exp-number">{area.id}</span>
                                    <h2>{area.title}</h2>
                                    <p className="text-muted">{area.desc}</p>
                                    <ul className="exp-list">
                                        {area.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Expertise;
