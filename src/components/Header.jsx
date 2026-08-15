import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
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
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' }
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="nav container">
        <a href="#" className="nav-logo text-gradient">CG</a>

        <div className={`nav-menu ${isMenuOpen ? 'show-menu' : ''}`}>
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
          
          <div className="nav-close" onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </div>
        </div>

        <div className="nav-toggle" onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
