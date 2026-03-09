import React, { useEffect } from 'react';
import './HowWeWork.css';

const HowWeWork = () => {
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

    const steps = [
        {
            num: "01",
            title: "Diagnostic & Design",
            desc: "Stakeholder mapping, institutional diagnostics, and baseline assessments to define the intervention logic."
        },
        {
            num: "02",
            title: "Strategic Structuring",
            desc: "Aligning project design with donor priorities and local institutional frameworks."
        },
        {
            num: "03",
            title: "Tactical Deployment",
            desc: "Rapid mobilization of expert networks and operational coordination in the field."
        },
        {
            num: "04",
            title: "Monitoring & MEL",
            desc: "Continuous performance tracking via digital MEL systems and evidence-based adaptive management."
        },
        {
            num: "05",
            title: "Impact Proof & Reporting",
            desc: "Formal impact measurement, donor-compliant reporting, and capitalisation of results."
        }
    ];

    const assurances = [
        {
            title: "Zero-Gap Implementation",
            desc: "Our phased approach ensures no strategic detail is lost between design and field deployment."
        },
        {
            title: "Donor-Grade Compliance",
            desc: "Integrated reporting tools that meet the highest international standards of accountability."
        },
        {
            title: "Adaptive Precision",
            desc: "Real-time data loops that allow us to pivot and optimize project tactics based on field realities."
        },
        {
            title: "Sustainable Ownership",
            desc: "Methodologies designed to transfer skills and ensure projects remain viable beyond our intervention."
        }
    ];

    return (
        <div className="how-we-work-page">
            <section className="page-header">
                <img src="/images/hero1.png" alt="" className="header-bg-image" />
                <div className="container header-content">
                    <span className="section-subtitle">Methodology</span>
                    <h1 className="reveal">Our Impact Delivery Approach</h1>
                    <p className="header-desc reveal delay-1">A structured, auditable, and results-driven methodology designed for complex development environments.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="steps-grid">
                        {steps.map((step, i) => (
                            <div key={i} className={`step-card reveal delay-${(i % 5) + 1}`}>
                                <span className="step-num">{step.num}</span>
                                <h3>{step.title}</h3>
                                <p className="text-muted">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="hww-image-band">
                <img src="/images/hero2.png" alt="Our process in action" />
                <div className="fullwidth-overlay">
                    <h2 className="reveal">Precision in execution.</h2>
                </div>
            </section>

            <section className="section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-4 reveal">
                        <span className="section-subtitle">Assurance</span>
                        <h2>What our methodology ensures</h2>
                    </div>
                    <div className="assurance-grid">
                        {assurances.map((item, i) => (
                            <div key={i} className={`assurance-card reveal delay-${(i % 2) + 1}`}>
                                <div className="assurance-bullet"></div>
                                <div className="assurance-text">
                                    <h4>{item.title}</h4>
                                    <p className="text-muted">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowWeWork;
