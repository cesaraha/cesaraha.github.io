import React from 'react';

const About = ({ name, title, paragraph1, paragraph2, profileImage }) => {
  return (
    <section className="about-section margin-section" id="About">
      <div className="container">
        <div className="main-content">
          <div className="profile-image-container">
            <img src={profileImage} alt={name} className="profile-image" />
          </div>
          <div className="content">
            <h1 className="name">{name}</h1>
            <h3 className="title">{title}</h3>
            <div className="description">
              <p className="first-paragraph">{paragraph1}</p>
              <p className="second-paragraph">{paragraph2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;