import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => { setIsLoaded(true); }, []);

    return (
        <section className="hero">
            <div 
                className="hero-bg"
                style={{ backgroundImage: `url("/images/page d'accueil.jpg")` }}
            >
                <div className="hero-overlay" />
            </div>

            <div className="container hero-content">
                <div className={`hero-text-box ${isLoaded ? 'loaded' : ''}`}>
                    <span className="hero-tagline">Impact Horizon Africa</span>
                    <h1 className="hero-title">
                        A Global Network, <br />
                        Built for Impact.
                    </h1>
                    <p className="hero-subtitle">
                        We operate at the intersection of global standards and local realities, 
                        ensuring development projects are effectively delivered and socially anchored.
                    </p>
                    <div className="hero-btns">
                        <Link to="/expertise" className="btn btn-primary">
                            Discover Our Impact <FaArrowRight />
                        </Link>
                        <Link to="/contact" className="btn hero-btn-outline">
                            Explore Partnership
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
