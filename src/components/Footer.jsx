import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h2 className="footer-name text-gradient">Chaitanya Geddanapalli</h2>
          <p className="footer-role">AI/ML Engineer & Full-Stack Developer</p>
        </div>
        
        <div className="footer-contact">
          <a href="mailto:chaitanyageddanapalli@gmail.com" className="contact-link">
            <Mail size={18} />
            chaitanyageddanapalli@gmail.com
          </a>
          <a href="tel:+919014241916" className="contact-link">
            <Phone size={18} />
            +91 9014241916
          </a>
        </div>
        
        <div className="footer-socials">
          <a href="https://github.com/chaitanya2190" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/chaitanyageddanapalli" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={20} />
          </a>
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="social-icon-text">
            LeetCode
          </a>
          <a href="https://hackerrank.com" target="_blank" rel="noopener noreferrer" className="social-icon-text">
            HackerRank
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
