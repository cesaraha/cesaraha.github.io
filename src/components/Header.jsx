import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const Header = ({ about, skills, projects }) => {
  const [hamOpen, setHamOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const hamRef = useRef(null);
  const langRef = useRef(null);
  
  const { currentLanguage, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'fr', flag: 'src/assets/images/fra-lang.png', name: 'Français' },
    { code: 'en', flag: 'src/assets/images/eng-lang.png', name: 'English' },
    { code: 'sp', flag: 'src/assets/images/spa-lang.png', name: 'Español' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];
  const otherLanguages = languages.filter(lang => lang.code !== currentLanguage);

  const toggleMenu = () => {
    setHamOpen(!hamOpen);
  };

  const toggleLangDropdown = () => {
    setLangDropdownOpen(!langDropdownOpen);
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
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeydown);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [hamOpen, langDropdownOpen]);

  return (
    <header className="header">
      <a href="/" className="logo-link">
        <img className="logo" src="src/assets/images/caha-logo-blue.png" alt="Caha logo" />
      </a>

      <div className="center-content">
        <button
          className="ham"
          onClick={toggleMenu}
          ref={hamRef}
          aria-label="Toggle navigation"
          aria-expanded={hamOpen}
        >
          <img 
            src={hamOpen ? 'img/xmark-solid.svg' : 'img/bars-solid.svg'} 
            alt="" 
          />
        </button>
        <nav className={hamOpen ? 'show' : ''} ref={navRef}>
          <a href="/#About">{about}</a>
          <a href="/#Skills">{skills}</a>
          <a href="/#Projects">{projects}</a>
        </nav>
      </div>

      <div className="language-selection" ref={langRef}>
        <button
          type="button"
          className="lang-dropdown-trigger"
          onClick={toggleLangDropdown}
          onKeyDown={handleDropdownToggleKeydown}
          aria-label="Language selection"
          aria-expanded={langDropdownOpen}
          aria-haspopup="true"
        >
          <img src={currentLang.flag} className="flag" alt={currentLang.name} />
          <svg
            className={`dropdown-arrow ${langDropdownOpen ? 'rotated' : ''}`}
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
          <div className="lang-dropdown">
            {otherLanguages.map(lang => (
              <button
                key={lang.code}
                type="button"
                className="lang-option"
                onClick={() => handleLanguageSelect(lang.code)}
                onKeyDown={(e) => handleLangKeydown(e, lang.code)}
                aria-label={`Switch to ${lang.name}`}
              >
                <img src={lang.flag} className="flag" alt={lang.name} />
                <span className="lang-name">{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;