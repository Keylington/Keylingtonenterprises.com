import React from 'react';
import './Hero.css'; // Assuming a separate CSS file to handle styles

const Hero = () => {
    return (
        <div className="hero" style={{ backgroundImage: 'url(/path/to/background-image.jpg)' }}>
            <div className="hero-content">
                <h1 className="hero-title">Welcome to Keylington Enterprises</h1>
                <p className="hero-description">Your success starts here!</p>
                <a href="#contact" className="hero-button">Get Started</a>
            </div>
        </div>
    );
};

export default Hero;