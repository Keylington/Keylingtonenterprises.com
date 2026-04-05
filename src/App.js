import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Portfolio />
            <Team />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;