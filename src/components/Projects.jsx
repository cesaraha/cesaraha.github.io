import React, { useState, useEffect } from 'react';
import Button from './Button';
import Modal from './Modal';
import styles from '../styles/Projects.module.css';

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
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentProject(null);
  };

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
    <div className={`${styles.cardLinkWrapper} ${project.display || ''}`}>
      <div className={styles.card}>
        <div className={styles.imageContent}>
          <span className={styles.overlay}></span>
          <div className={styles.cardImage}>
            <img src={project.img} className={styles.cardImg} alt={`Project ${index + 1}`} />
          </div>
        </div>
        <div className={styles.cardContent}>
          <h5 className={styles.cardTitle}>{project.heading}</h5>
          <p className={styles.cardText}>{project.details}</p>
          <div className={styles.buttonGroup}>
            <Button
              variant="blue"
              onClick={() =>
                openModal({
                  title: project.heading,
                  description: project.fullDescription,
                  image: project.img
                })
              }
            >
              {readMore}
            </Button>
            <Button
              variant="accent"
              href={project.ref}
              disabled={project.isDisabled}
              target="_blank"
              rel="noopener noreferrer"
            >
              {viewOnGithub}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className={`${styles.cardSection} margin-section`} id="Projects">
        <h1 className="section-title">{titleSection}</h1>
        <div className={styles.cardGroup}>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={closeModal}
        title={currentProject?.title}
        image={currentProject?.image}
        imageAlt={currentProject?.title}
      >
        <p
          className="modal-description"
          dangerouslySetInnerHTML={{ __html: currentProject?.description }}
        />
      </Modal>
    </>
  );
};

export default Projects;