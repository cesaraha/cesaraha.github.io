import React from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Header from './components/Header';
import About from './components/About';
import './App.css';

const AppContent = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header
        about={t.navigation.about}
        skills={t.navigation.skills}
        projects={t.navigation.projects}
      />
      <About
        name={t.about.name}
        title={t.about.title}
        paragraph1={t.about.paragraph1}
        paragraph2={t.about.paragraph2}
        profileImage="src/assets/images/fotocv.jpg"
      />
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App
