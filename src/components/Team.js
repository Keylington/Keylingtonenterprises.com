import React from 'react';

const Team = () => {
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'CEO',
            photo: 'path/to/photo1.jpg',
            socialLinks: {
                linkedin: 'https://linkedin.com/in/johndoe',
                twitter: 'https://twitter.com/johndoe'
            }
        },
        {
            name: 'Jane Smith',
            role: 'CTO',
            photo: 'path/to/photo2.jpg',
            socialLinks: {
                linkedin: 'https://linkedin.com/in/janesmith',
                twitter: 'https://twitter.com/janesmith'
            }
        }
        // Add more team members here
    ];

    return (
        <div>
            <h1>Meet Our Team</h1>
            <div className="team">
                {teamMembers.map(member => (
                    <div key={member.name} className="team-member">
                        <img src={member.photo} alt={member.name} />
                        <h2>{member.name}</h2>
                        <p>{member.role}</p>
                        <div className="social-links">
                            <a href={member.socialLinks.linkedin}>LinkedIn</a>
                            <a href={member.socialLinks.twitter}>Twitter</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;