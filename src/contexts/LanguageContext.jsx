import React, { createContext, useContext, useState } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    try {
      return localStorage.getItem('language') || 'fr';
    } catch {
      return 'fr';
    }
  });

  const setLanguage = (lang) => {
    setCurrentLanguage(lang);
    try {
      localStorage.setItem('language', lang);
    } catch {
      console.warn('Could not save language preference');
    }
  };

  const getTranslation = (lang) => {
    return translations[lang] || translations.fr;
  };

  const t = getTranslation(currentLanguage);

  return (
    <LanguageContext.Provider 
      value={{
        currentLanguage,
        setLanguage,
        t,
        getTranslation
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};