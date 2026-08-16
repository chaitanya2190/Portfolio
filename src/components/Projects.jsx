import React, { useState } from 'react';
import { ExternalLink, Code, Layers, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    category: 'AI & Machine Learning',
    title: 'Deep-Guard',
    subtitle: 'AI-based Deepfake Detection Framework',
    description: 'A hybrid deepfake detection system utilizing spatio-temporal analysis and frequency-aware learning techniques to identify manipulated video media with high precision.',
    tags: ['Python', 'PyTorch', 'OpenCV', 'Deep Learning', 'Spatio-Temporal'],
    github: 'https://github.com/chaitanya2190',
    demo: 'https://github.com/chaitanya2190',
    gradient: 'linear-gradient(135deg, rgba(124, 58, 237, 0.4), rgba(6, 182, 212, 0.2))'
  },
  {
    id: 2,
    category: 'AI & Machine Learning',
    title: 'Lung Cancer Detection AI',
    subtitle: 'Deep Learning Medical Imaging Pipeline',
    description: 'An AI-powered lung cancer detection system trained on CT scan datasets. Implemented YOLOv11 for real-time localization of potentially cancerous regions with custom preprocessing.',
    tags: ['Python', 'YOLOv11', 'OpenCV', 'Roboflow', 'NumPy', 'Pandas'],
    github: 'https://github.com/chaitanya2190',
    demo: 'https://github.com/chaitanya2190',
    gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(16, 185, 129, 0.2))'
  },
  {
    id: 3,
    category: 'Full-Stack Web',
    title: 'Task Management System',
    subtitle: 'Full-Stack Enterprise Application',
    description: 'A full-stack task management platform built with React and Spring Boot REST API. Features JWT role-based security, PostgreSQL schema with JPA relationships, and interactive dashboards.',
    tags: ['React', 'Spring Boot', 'Java', 'PostgreSQL', 'JWT', 'REST API'],
    github: 'https://github.com/chaitanya2190',
    demo: 'https://github.com/chaitanya2190',
    gradient: 'linear-gradient(135deg, rgba(37, 99, 235, 0.4), rgba(124, 58, 237, 0.2))'
  }
];

const categories = ['All', 'AI & Machine Learning', 'Full-Stack Web'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="projects section container">
      <h2 className="section-title">Case Studies & Projects</h2>
      <p className="section-subtitle">
        Featured engineering projects highlighting AI/ML research and full-stack software development.
      </p>

      {/* Filter Tabs */}
      <div className="projects-filter">
        {categories.map((tab, idx) => (
          <button
            key={idx}
            className={`filter-btn ${activeTab === tab ? 'active-filter' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div className="projects-grid" layout>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="project-card glass glass-hover"
            >
              <div 
                className="project-banner" 
                style={{ background: project.gradient }}
              >
                <div className="banner-badge">
                  <Sparkles size={14} />
                  <span>{project.category}</span>
                </div>
                <div className="banner-icon-bg">
                  <Code size={48} />
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <h4 className="project-subtitle">{project.subtitle}</h4>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag-pill">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline btn-sm"
                    aria-label={`View ${project.title} Source Code`}
                  >
                    <FaGithub size={16} />
                    <span>View Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary btn-sm"
                    aria-label={`View ${project.title} Live Details`}
                  >
                    <ExternalLink size={16} />
                    <span>Details</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
