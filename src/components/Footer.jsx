import React from 'react';
import GithubIcon from '../assets/icons/GithubIcon';
import LinkedinIcon from '../assets/icons/LinkedinIcon';

const Footer = ({
    contactTitle,
    connectTitle,
    rightsText,
    emailLabel,
    email,
    linkedinUrl,
    githubUrl,
    phoneLabel,
    phone
}) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Contact Info Section */}
                <div className="footer-section">
                    <h3 className="footer-title">{contactTitle}</h3>
                    <div className="contact-info">
                        {email && (
                            <div className="contact-item">
                                <span className="contact-label">{emailLabel}:</span>
                                <a href={`mailto:${email}`} className="contact-link">
                                    {email}
                                </a>
                            </div>
                        )}
                        {phone && (
                            <div className="contact-item">
                                <span className="contact-label">{phoneLabel}:</span>
                                <a href={`tel:${phone}`} className="contact-link">
                                    {phone}
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Social Links Section */}
                <div className="footer-section">
                    <h3 className="footer-title">{connectTitle}</h3>
                    <div className="social-links">
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                            >
                                <GithubIcon />
                            </a>
                        )}
                        {linkedinUrl && (
                            <a
                                href={linkedinUrl}
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                            >
                                <LinkedinIcon />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p className="copyright">
                    © {currentYear} {rightsText}
                </p>
            </div>
        </footer>
    );
};

export default Footer;