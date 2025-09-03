import React from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

// Importing SVG icons
import PythonIcon from './assets/icons/PythonIcon';
import JupyterIcon from './assets/icons/JupyterIcon';
import AnacondaIcon from './assets/icons/AnacondaIcon';
import NumpyIcon from './assets/icons/NumpyIcon';
import ScipyIcon from './assets/icons/ScipyIcon';
import SympyIcon from './assets/icons/SympyIcon';
import TensorflowIcon from './assets/icons/TensorflowIcon';
import KerasIcon from './assets/icons/KerasIcon';
import ScikitLearnIcon from './assets/icons/ScikitlearnIcon';
import OpenCvIcon from './assets/icons/OpencvIcon';
import PandasIcon from './assets/icons/PandasIcon';
import HtmlIcon from './assets/icons/HtmlIcon';
import CssIcon from './assets/icons/CssIcon';
import JavascriptIcon from './assets/icons/JavascriptIcon';
import MySqlIcon from './assets/icons/MysqlIcon';
import GitHubIcon from './assets/icons/GithubIcon';
import NetlifyIcon from './assets/icons/NetlifyIcon';
import DjangoIcon from './assets/icons/DjangoIcon';
import ReactIcon from './assets/icons/ReactIcon';
import SvelteIcon from './assets/icons/SvelteIcon';
import FastApiIcon from './assets/icons/FastapiIcon';
import AxiosIcon from './assets/icons/AxiosIcon';

import './App.css';

const AppContent = () => {
  const { t } = useLanguage();

  const section1Cards = [
    { icon: PythonIcon, title: 'Python' },
    { icon: JupyterIcon, title: 'Jupyter' },
    { icon: AnacondaIcon, title: 'Anaconda' }
  ];
  const section2Cards = [
    { icon: NumpyIcon, title: 'NumPy' },
    { icon: ScipyIcon, title: 'SciPy' },
    { icon: SympyIcon, title: 'SymPy' },
    { icon: TensorflowIcon, title: 'TensorFlow' },
    { icon: KerasIcon, title: 'Keras' },
    { icon: ScikitLearnIcon, title: 'Scikit-learn' },
    { icon: OpenCvIcon, title: 'OpenCV' },
    { icon: PandasIcon, title: 'Pandas' }
  ];
  const section3Cards = [
    { icon: HtmlIcon, title: 'HTML' },
    { icon: CssIcon, title: 'CSS' },
    { icon: JavascriptIcon, title: 'JavaScript' },
    { icon: MySqlIcon, title: 'MySQL' }
  ];
  const section4Cards = [
    { icon: DjangoIcon, title: 'Django' },
    { icon: FastApiIcon, title: 'FastAPI' },
    { icon: ReactIcon, title: 'React' },
    { icon: SvelteIcon, title: 'Svelte' },
    { icon: AxiosIcon, title: 'Axios' },
    { icon: GitHubIcon, title: 'GitHub' },
    { icon: NetlifyIcon, title: 'Netlify' }
  ];

  return (
    <>
      <Header
        about={t.navigation.about}
        projects={t.navigation.projects}
        skills={t.navigation.skills}
      />
      <About
        name={t.about.name}
        title={t.about.title}
        paragraph1={t.about.paragraph1}
        paragraph2={t.about.paragraph2}
        profileImage="/images/fotocv.jpg"
      />
      <Projects
        titleSection={t.projects.title}
        readMore={t.readMore}
        viewOnGithub={t.viewOnGithub}
        heading1={t.projects.project1.heading}
        details1={t.projects.project1.details}
        fullDescription1={t.projects.project1.description}
        img1="/images/numbers-mnist.png"
        ref1="https://github.com/CesarHernandezAlvarez/optical-imaging-scattering-media"
        display1=''
        isDisabled1={false}
        heading2={t.projects.project2.heading}
        details2={t.projects.project2.details}
        fullDescription2={t.projects.project2.description}
        img2="/images/caha-logo-blue.png"
        ref2="https://github.com/CesarHdezAlvz/my-portfolio-website"
        display2=''
        isDisabled2={false}
        heading3={t.projects.project3.heading}
        details3={t.projects.project3.details}
        fullDescription3={t.projects.project3.description}
        img3="/images/arithmetics.png"
        ref3="https://github.com/CesarHdezAlvz/math-generator-ai"
        display3=''
        isDisabled3={false}
        heading4={t.projects.project4.heading}
        details4={t.projects.project4.details}
        fullDescription4={t.projects.project4.description}
        img4="/images/document-glass.jpg"
        ref4="#"
        display4="display-not"
        isDisabled4={true}
        heading5={t.projects.project5.heading}
        details5={t.projects.project5.details}
        fullDescription5={t.projects.project5.description}
        img5="/images/microscope.jpg"
        ref5="#"
        display5="display-not"
        isDisabled5={true}
        heading6={t.projects.project6.heading}
        details6={t.projects.project6.details}
        fullDescription6={t.projects.project6.description}
        img6="/images/parking.jpg"
        ref6="#"
        display6="display-not"
        isDisabled6={true}
        heading7={t.projects.project7.heading}
        details7={t.projects.project7.details}
        fullDescription7={t.projects.project7.description}
        img7="/images/medical-imaging-segmentation.png"
        ref7="#"
        display7="display-not"
        isDisabled7={true}
      />
      <Skills
        titleSection={t.skills.title}
        nameSection1={t.skills.nameSection1}
        nameSection2={t.skills.nameSection2}
        nameSection3={t.skills.nameSection3}
        nameSection4={t.skills.nameSection4}
        section1Cards={section1Cards}
        section2Cards={section2Cards}
        section3Cards={section3Cards}
        section4Cards={section4Cards}
      />
      <Footer
        contactTitle={t.footer.contactTitle} // e.g., "Contact"
        connectTitle={t.footer.connectTitle} // e.g., "Connect"
        rightsText={t.footer.rightsText} // e.g., "César Aha. All rights reserved."
        emailLabel={t.footer.emailLabel} // e.g., "Email"
        email="c.hdez.alvz@gmail.com"
        phoneLabel={t.footer.phoneLabel} // e.g., "Phone"
        phone="+33 677 51 42 90"
        linkedinUrl="https://linkedin.com/in/cesaraha"
        githubUrl="https://github.com/cesaraha"
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
