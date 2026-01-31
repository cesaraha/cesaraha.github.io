import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from '../styles/Header.module.css';

const Header = ({ about, projects, skills }) => {
  const [hamOpen, setHamOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);
  const hamRef = useRef(null);
  const langRef = useRef(null);
  
  const { currentLanguage, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'fr', flag: '/images/fra-lang.png', name: 'Français' },
    { code: 'en', flag: '/images/eng-lang.png', name: 'English' },
    { code: 'sp', flag: '/images/spa-lang.png', name: 'Español' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];
  const otherLanguages = languages.filter(lang => lang.code !== currentLanguage);

// Scroll handler
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // Show header when scrolling up, hide when scrolling down
    if (currentScrollY < lastScrollY || currentScrollY < 10) {
      setIsHeaderVisible(true);
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsHeaderVisible(false);
      // Close any open dropdowns when hiding
      setHamOpen(false);
      setLangDropdownOpen(false);
    }
    
    setLastScrollY(currentScrollY);
  };

  const toggleMenu = () => {
    setHamOpen(!hamOpen);
  };

  const toggleLangDropdown = () => {
    setLangDropdownOpen(!langDropdownOpen);
  };

// Handle navigation link clicks
  const handleNavLinkClick = () => {
    setHamOpen(false);
    setIsHeaderVisible(false);
    
    // Show header again after navigation animation completes
    setTimeout(() => {
      setIsHeaderVisible(true);
    }, 800); // Adjust timing based on your scroll animation duration
  };

  const handleClickOutside = (event) => {
    if (
      hamOpen &&
      navRef.current &&
      hamRef.current &&
      !navRef.current.contains(event.target) &&
      !hamRef.current.contains(event.target)
    ) {
      setHamOpen(false);
    }

    if (langDropdownOpen && langRef.current && !langRef.current.contains(event.target)) {
      setLangDropdownOpen(false);
    }
  };

  const handleKeydown = (event) => {
    if (event.key === 'Escape' && hamOpen) {
      setHamOpen(false);
    }
    if (event.key === 'Escape' && langDropdownOpen) {
      setLangDropdownOpen(false);
    }
  };

  const handleLanguageSelect = (langCode) => {
    setLanguage(langCode);
    setLangDropdownOpen(false);
  };

  const handleLangKeydown = (event, langCode) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleLanguageSelect(langCode);
    }
  };

  const handleDropdownToggleKeydown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleLangDropdown();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeydown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [lastScrollY, hamOpen, langDropdownOpen]);

  return (
    <header className={`${styles.header} ${isHeaderVisible ? styles.headerVisible : styles.headerHidden}`}>
      <a href="/" className={styles.logoLink}>
        <img className={styles.logo} src="/images/cesaraha-blue.png" alt="cesaraha logo" />
      </a>
      {/* 
      <div className={styles.centerContent}>
        <button
          className={styles.ham}
          onClick={toggleMenu}
          ref={hamRef}
          aria-label="Toggle navigation"
          aria-expanded={hamOpen}
        >
          <img 
            src={hamOpen ? '/images/xmark-solid.svg' : '/images/bars-solid.svg'} 
            alt="" 
          />
        </button>
        <nav className={`${styles.nav} ${hamOpen ? styles.show : ''}`} ref={navRef}>
          <a href="#About">{about}</a>
          <a href="#Projects">{projects}</a>
          <a href="#Skills">{skills}</a>
        </nav>
      </div>
      */}

      <div className={styles.languageSelection} ref={langRef}>
        <button
          type="button"
          className={styles.langDropdownTrigger}
          onClick={toggleLangDropdown}
          onKeyDown={handleDropdownToggleKeydown}
          aria-label="Language selection"
          aria-expanded={langDropdownOpen}
          aria-haspopup="true"
        >
          <img src={currentLang.flag} className={styles.flag} alt={currentLang.name} />
          <svg
            className={`${styles.dropdownArrow} ${langDropdownOpen ? styles.dropdownArrowRotated : ''}`}
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </button>
        {langDropdownOpen && (
          <div className={styles.langDropdown}>
            {otherLanguages.map(lang => (
              <button
                key={lang.code}
                type="button"
                className={styles.langOption}
                onClick={() => handleLanguageSelect(lang.code)}
                onKeyDown={(e) => handleLangKeydown(e, lang.code)}
                aria-label={`Switch to ${lang.name}`}
              >
                <img src={lang.flag} className={styles.flag} alt={lang.name} />
                <span className={styles.langName}>{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;