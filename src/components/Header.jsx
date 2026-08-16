import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY + 120;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop;
        const sectionId = current.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <motion.header 
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="nav container" aria-label="Main Navigation">
        <a href="#home" className="nav-logo">
          <Code2 className="logo-icon" size={24} />
          <span className="logo-text text-gradient">CG.</span>
        </a>

        <div 
          className={`nav-menu ${isMenuOpen ? 'show-menu' : ''}`}
          id="nav-menu"
        >
          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <a 
                  href={link.href} 
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active-link' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <button 
            className="nav-close" 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <button 
          className="nav-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
        >
          <Menu size={24} />
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;
