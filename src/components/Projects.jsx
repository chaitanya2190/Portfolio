import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Deep-Guard',
    subtitle: 'AI-based Deepfake Detection Framework',
    description: 'A hybrid deepfake detection system utilizing spatio-temporal analysis and frequency-aware learning techniques. Designed to identify manipulated videos with improved detection accuracy, enhancing robustness against advanced AI-generated synthetic media.',
    tags: ['Python', 'PyTorch', 'OpenCV', 'Deep Learning'],
    github: 'https://github.com/chaitanya2190'
  },
  {
    title: 'Lung Cancer Detection with AI',
    subtitle: 'Deep Learning Medical Imaging Pipeline',
    description: 'Built an AI-powered lung cancer detection system using CT scan datasets. Implemented YOLOv11 for real-time detection of potentially cancerous regions. Processed medical imaging datasets using OpenCV and Roboflow annotation pipelines.',
    tags: ['Python', 'YOLOv11', 'OpenCV', 'Roboflow', 'NumPy', 'Pandas'],
    github: 'https://github.com/chaitanya2190'
  },
  {
    title: 'Task Management System',
    subtitle: 'Full-Stack Enterprise Application',
    description: 'Built a full-stack task management app with a React frontend and Spring Boot REST API backend. Implemented JWT-based authentication and role-based access control. Designed PostgreSQL schema with JPA relationships and built paginated, filterable REST APIs.',
    tags: ['React', 'Spring Boot', 'Java', 'PostgreSQL', 'JWT', 'REST API'],
    github: 'https://github.com/chaitanya2190'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects container">
      <h2 className="section-title">Case Studies</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card glass" key={index}>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <h4 className="project-subtitle">{project.subtitle}</h4>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub size={20} />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
