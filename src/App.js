import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Properties from './components/Properties';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { t } = useTranslation();
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'properties':
        return <Properties />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar onSectionChange={setCurrentSection} currentSection={currentSection} />
      <main className="main-content">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
