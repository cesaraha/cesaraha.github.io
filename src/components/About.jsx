import React from 'react';
import styles from '../styles/About.module.css';

const About = ({ name, title, paragraph1, paragraph2, profileImage }) => {
  return (
    <section className={`${styles.aboutSection} margin-section`} id="About">
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.profileImageContainer}>
            <img src={profileImage} alt={name} className={styles.profileImage} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.name}>{name}</h1>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.description}>
              <p className={styles.firstParagraph}>{paragraph1}</p>
              <a className="second-paragraph" href="https://cesarhernandezalvarez.com">{paragraph2}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;