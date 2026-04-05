import React, { useState } from 'react';
import Modal from 'react-modal';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of Project 1', image: 'image1.jpg' },
  { id: 2, title: 'Project 2', description: 'Description of Project 2', image: 'image2.jpg' },
  // Add more projects as needed
];

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filterProjects = (criteria) => {
    const filtered = projects.filter(project => project.title.includes(criteria));
    setFilteredProjects(filtered);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <h1>Portfolio</h1>
      <input type="text" placeholder="Filter projects..." onChange={(e) => filterProjects(e.target.value)} />
      <div className="project-gallery">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-item" onClick={() => openModal(project)}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
          </div>
        ))}
      </div>

      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>{selectedProject?.title}</h2>
        <p>{selectedProject?.description}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Portfolio;
