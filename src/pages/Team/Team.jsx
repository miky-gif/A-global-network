import React, { useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Team.css';

const Team = () => {
    const { t } = useLanguage();
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

    const founders = [
        {
            name: "Leonel FOTSO",
            role: t('teamPage.members.leonel.role'),
            desc: t('teamPage.members.leonel.desc'),
            image: "/images/eqp1.jpeg",
            socials: {
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                email: "mailto:leonel@impacthorizon.africa"
            }
        },
        {
            name: "Fiacre WANJI",
            role: t('teamPage.members.fiacre.role'),
            desc: t('teamPage.members.fiacre.desc'),
            image: "/images/eqp2.jpeg",
            socials: {
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                email: "mailto:fiacre@impacthorizon.africa"
            }
        },
        {
            name: "Jaurès TCHAPDA",
            role: t('teamPage.members.jaures.role'),
            desc: t('teamPage.members.jaures.desc'),
            image: "/images/eqp3.jpeg",
            socials: {
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                email: "mailto:jaures@impacthorizon.africa"
            }
        }
    ];

    return (
        <div className="team-page">
            <section className="page-header">
                <img src="/images/hero2.png" alt="" className="header-bg-image" />
                <div className="container header-content">
                    <span className="section-subtitle">{t('teamPage.header.subtitle')}</span>
                    <h1 className="reveal">{t('teamPage.header.title')}</h1>
                    <p className="header-desc reveal delay-1">{t('teamPage.header.desc')}</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="team-grid">
                        {founders.map((member, index) => (
                            <div key={index} className={`team-card reveal delay-${index + 1}`}>
                                <div className="team-card-image">
                                    <img src={member.image} alt={member.name} loading="lazy" />
                                </div>
                                <div className="team-card-info">
                                    <h3>{member.name}</h3>
                                    <span className="member-role">{member.role}</span>
                                    <p className="text-muted">{member.desc}</p>
                                    
                                    <div className="member-socials">
                                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                                            <FaLinkedin />
                                        </a>
                                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                                            <FaTwitter />
                                        </a>
                                        <a href={member.socials.email} className="social-link" aria-label="Email">
                                            <FaEnvelope />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
