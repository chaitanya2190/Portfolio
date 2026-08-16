import React from 'react';
import { Download, Mail, ArrowDown, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Hero.css';

import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero section container">
      <div className="hero-grid">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="status-badge">
            <span className="pulse-dot"></span>
            Available for work & collaborations
          </div>

          <h2 className="hero-greeting">
            Hello, I'm <Sparkles className="sparkle-icon" size={20} />
          </h2>
          <h1 className="hero-name text-gradient">Chaitanya Geddanapalli</h1>
          <h3 className="hero-title">AI/ML Engineer & Full-Stack Developer</h3>

          <p className="hero-description">
            Specializing in Computer Vision, Deep Learning, and Scalable Web Applications. 
            Building robust end-to-end ML pipelines and enterprise software systems.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              Explore Work
            </a>
            <a 
              href="https://drive.google.com/drive/folders/1V22u8cbbQSwHeQaHYMXPWtxlOzNtGTqG?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              <Download size={18} />
              Certificates & Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              <Mail size={18} />
              Contact
            </a>
          </div>

          <div className="hero-socials">
            <a 
              href="https://github.com/chaitanya2190" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="GitHub Profile"
            >
              <FaGithub size={22} />
            </a>
            <a 
              href="https://www.linkedin.com/in/chaitanyageddanapalli" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={22} />
            </a>
            <a 
              href="mailto:chaitanyageddanapalli@gmail.com" 
              className="social-link"
              aria-label="Email Me"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        {/* Profile Card Accent Visual */}
        <motion.div 
          className="hero-profile-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="hero-profile-card glass">
            <div className="profile-img-box">
              <img 
                src={profileImg} 
                alt="Chaitanya Geddanapalli" 
                className="profile-avatar-img" 
              />
            </div>
            <div className="profile-info-badge">
              <span className="info-title">SRM University</span>
              <span className="info-sub">B.Tech Computing • 9.11 CGPA</span>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-down-btn" aria-label="Scroll to About section">
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
