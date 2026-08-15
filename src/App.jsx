import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
