import React from 'react';
import { Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content animate-fade-in">
        <h2 className="hero-greeting">Hi, I'm</h2>
        <h1 className="hero-name text-gradient">Chaitanya Geddanapalli</h1>
        <h3 className="hero-title">AI/ML Engineer & Full-Stack Developer</h3>
        <p className="hero-description">
          Specializing in Computer Vision, Deep Learning, and Scalable Systems. 
          I build robust pipelines and applications that solve complex real-world problems.
        </p>
        
        <div className="hero-cta delay-200">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="https://drive.google.com/drive/folders/1V22u8cbbQSwHeQaHYMXPWtxlOzNtGTqG?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <Download size={18} />
            Certificates & Resume
          </a>
        </div>

        <div className="hero-socials delay-300">
          <a href="https://github.com/chaitanya2190" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/chaitanyageddanapalli" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:chaitanyageddanapalli@gmail.com" className="social-link">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
