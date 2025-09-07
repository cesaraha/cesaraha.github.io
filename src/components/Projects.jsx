import React, { useState, useEffect } from 'react';

const Projects = ({
  titleSection,
  heading1, details1, fullDescription1, img1, ref1, display1, isDisabled1,
  heading2, details2, fullDescription2, img2, ref2, display2, isDisabled2,
  heading3, details3, fullDescription3, img3, ref3, display3, isDisabled3,
  heading4, details4, fullDescription4, img4, ref4, display4, isDisabled4,
  heading5, details5, fullDescription5, img5, ref5, display5, isDisabled5,
  heading6, details6, fullDescription6, img6, ref6, display6, isDisabled6,
  heading7, details7, fullDescription7, img7, ref7, display7, isDisabled7,
  readMore,
  viewOnGithub
}) => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentProject(null);
    document.body.style.overflow = ''; // Restore scrolling
  };

  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (event) => handleKeydown(event);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      // Cleanup: restore scrolling if component unmounts while modal is open
      document.body.style.overflow = '';
    };
  }, []);

  const projects = [
    { heading: heading1, details: details1, fullDescription: fullDescription1, img: img1, ref: ref1, display: display1, isDisabled: isDisabled1 },
    { heading: heading2, details: details2, fullDescription: fullDescription2, img: img2, ref: ref2, display: display2, isDisabled: isDisabled2 },
    { heading: heading3, details: details3, fullDescription: fullDescription3, img: img3, ref: ref3, display: display3, isDisabled: isDisabled3 },
    { heading: heading4, details: details4, fullDescription: fullDescription4, img: img4, ref: ref4, display: display4, isDisabled: isDisabled4 },
    { heading: heading5, details: details5, fullDescription: fullDescription5, img: img5, ref: ref5, display: display5, isDisabled: isDisabled5 },
    { heading: heading6, details: details6, fullDescription: fullDescription6, img: img6, ref: ref6, display: display6, isDisabled: isDisabled6 },
    { heading: heading7, details: details7, fullDescription: fullDescription7, img: img7, ref: ref7, display: display7, isDisabled: isDisabled7 }
  ];

  const visibleProjects = projects.filter(project => project.display !== 'display-not');

  const ProjectCard = ({ project, index }) => (
    <div className={`card-link-wrapper ${project.display || ''}`}>
      <div className="card">
        <div className="image-content">
          <span className="overlay"></span>
          <div className="card-image">
            <img src={project.img} className="card-img" alt={`Project ${index + 1}`} />
          </div>
        </div>
        <div className="card-content">
          <h5 className="card-title">{project.heading}</h5>
          <p className="card-text">{project.details}</p>
          <div className="button-group">
            <button
              className="blue-btn"
              onClick={() =>
                openModal({
                  title: project.heading,
                  description: project.fullDescription,
                  image: project.img
                })
              }
            >
              <span className="link-blue-btn">{readMore}</span>
            </button>
            <a
              href={project.isDisabled ? '#' : project.ref}
              className={`accent-btn ${project.isDisabled ? 'accent-btn-disabled' : ''}`}
              onClick={project.isDisabled ? (e) => e.preventDefault() : null}
              aria-disabled={project.isDisabled}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="link-accent-btn">{viewOnGithub}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="card-section margin-section" id="Projects">
        <h1 className="section-title">{titleSection}</h1>
        <div className="card-group">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      {showModal && currentProject && (
        <div
          className="modal-overlay"
          onClick={handleOverlayClick}
          onKeyDown={handleKeydown}
          role="dialog"
          aria-modal="true"
          tabIndex="-1"
        >
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="modal-header">
              <img src={currentProject.image} alt={currentProject.title} className="modal-image" />
              <h2 className="modal-title">{currentProject.title}</h2>
            </div>

            <div className="modal-body">
              <p
                className="modal-description"
                dangerouslySetInnerHTML={{ __html: currentProject.description }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;