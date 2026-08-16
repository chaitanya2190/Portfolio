import React from 'react';
import { Mail, Phone, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <Code2 className="logo-icon" size={24} />
            <span className="text-gradient">CG.</span>
          </a>
          <p className="footer-tagline">AI/ML Engineer & Full-Stack Developer</p>
        </div>
        
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="footer-socials">
          <a 
            href="https://github.com/chaitanya2190" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            aria-label="GitHub Profile"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/chaitanyageddanapalli" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="mailto:chaitanyageddanapalli@gmail.com" 
            className="social-icon"
            aria-label="Email Me"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Chaitanya Geddanapalli. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
