import React from 'react';
import './Services.css';

const servicesData = [
    {
        icon: '🔍',
        title: 'Market Research',
        description: 'In-depth analysis of market trends and consumer behavior.'
    },
    {
        icon: '📈',
        title: 'Business Strategy',
        description: 'Expert guidance on your business strategy to drive growth.'
    },
    {
        icon: '💼',
        title: 'Consulting Services',
        description: 'Professional consulting to streamline your operations.'
    },
    {
        icon: '🌐',
        title: 'Digital Marketing',
        description: 'Enhancing your online presence through effective marketing strategies.'
    }
];

const Services = () => {
    return (
        <div className='services'>
            <h1>Our Services</h1>
            <div className='services-container'>
                {servicesData.map((service, index) => (
                    <div className='service' key={index}>
                        <div className='service-icon'>{service.icon}</div>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;