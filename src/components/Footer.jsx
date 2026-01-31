import React from 'react';
import GithubIcon from '../assets/icons/GithubIcon';
import LinkedinIcon from '../assets/icons/LinkedinIcon';
import styles from '../styles/Footer.module.css';

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
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                {/* Contact Info Section */}
                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>{contactTitle}</h3>
                    <div className={styles.contactInfo}>
                        {email && (
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>{emailLabel}:</span>
                                <a href={`mailto:${email}`} className={styles.contactLink}>
                                    {email}
                                </a>
                            </div>
                        )}
                        {phone && (
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>{phoneLabel}:</span>
                                <a href={`tel:${phone}`} className={styles.contactLink}>
                                    {phone}
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Social Links Section */}
                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>{connectTitle}</h3>
                    <div className={styles.socialLinks}>
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                className={styles.socialLink}
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
                                className={styles.socialLink}
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
            <div className={styles.footerBottom}>
                <p className={styles.copyright}>
                    © {currentYear} {rightsText}
                </p>
            </div>
        </footer>
    );
};

export default Footer;