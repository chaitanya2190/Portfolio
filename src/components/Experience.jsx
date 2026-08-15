import React from 'react';
import './Experience.css';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section className="experience container">
      <div className="experience-grid">
        <div className="experience-column">
          <h2 className="section-title">
            <Briefcase className="section-icon" /> Experience
          </h2>
          <div className="timeline">
            <div className="timeline-item glass">
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Machine Learning Intern</h3>
              <h4 className="timeline-org">Prodigy InfoTech | Remote</h4>
              <p className="timeline-date">Sept 2024</p>
              <ul className="timeline-details">
                <li>Developed and evaluated ML models for classification and clustering using Scikit-learn.</li>
                <li>Performed data preprocessing, visualization, and model evaluation with Pandas and Matplotlib.</li>
                <li>Built projects in Jupyter Notebooks using Python-based ML workflows.</li>
              </ul>
            </div>

            <div className="timeline-item glass">
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Python Fullstack Developer Virtual Internship</h3>
              <h4 className="timeline-org">EDUSKILLS | Remote</h4>
              <p className="timeline-date">July 2025 - Sept 2025</p>
              <ul className="timeline-details">
                <li>Hands-on virtual internship focusing on Python fullstack development.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experience-column">
          <h2 className="section-title">
            <GraduationCap className="section-icon" /> Education & Certifications
          </h2>
          <div className="timeline">
            <div className="timeline-item glass">
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">B.Tech in Computing</h3>
              <h4 className="timeline-org">SRM University of Science | Trichy, TN</h4>
              <p className="timeline-date">June 2023 - May 2027</p>
              <p className="timeline-cgpa">CGPA: 9.11</p>
            </div>

            <div className="timeline-item glass cert-item">
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Key Certifications</h3>
              <ul className="timeline-details certs-list">
                <li><strong>IBM:</strong> Getting Started with Artificial Intelligence</li>
                <li><strong>Oracle:</strong> Cloud Infrastructure 2025 Certified Generative AI Professional</li>
                <li><strong>MongoDB:</strong> Connecting to MongoDB Database</li>
                <li><strong>HackerRank:</strong> Problem Solving (Intermediate)</li>
                <li><strong>Coursera:</strong> Database Structures and Management with MySQL</li>
                <li><strong>EF SET:</strong> English Certificate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
