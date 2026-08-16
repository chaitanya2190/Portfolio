import React from 'react';
import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience section container">
      <h2 className="section-title">Experience & Education</h2>
      <p className="section-subtitle">
        My professional internship background, academic journey at SRM University, and professional certifications.
      </p>

      <div className="experience-grid">
        {/* Experience Column */}
        <motion.div 
          className="experience-column"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="column-header">
            <Briefcase className="section-icon" size={24} />
            <h3 className="column-title">Work Experience</h3>
          </div>

          <div className="timeline">
            <div className="timeline-item glass glass-hover">
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <h4 className="timeline-title">Machine Learning Intern</h4>
                <span className="timeline-date"><Calendar size={14} /> Sept 2024 - Oct 2024</span>
              </div>
              <h5 className="timeline-org">Prodigy InfoTech • Remote</h5>
              <ul className="timeline-details">
                <li>Developed and evaluated ML models for classification and clustering using Scikit-learn.</li>
                <li>Performed data preprocessing, feature engineering, and visualization with Pandas & Matplotlib.</li>
                <li>Built modular computer vision & data science pipelines in Python.</li>
              </ul>
            </div>

            <div className="timeline-item glass glass-hover">
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <h4 className="timeline-title">Python Fullstack Developer Virtual Intern</h4>
                <span className="timeline-date"><Calendar size={14} /> July 2025 - Sept 2025</span>
              </div>
              <h5 className="timeline-org">EDUSKILLS • Remote</h5>
              <ul className="timeline-details">
                <li>Hands-on virtual internship focusing on Python full-stack web development and REST API architectures.</li>
                <li>Implemented backend logic and data model relationships.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Education & Certifications Column */}
        <motion.div 
          className="experience-column"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="column-header">
            <GraduationCap className="section-icon" size={24} />
            <h3 className="column-title">Education & Credentials</h3>
          </div>

          <div className="timeline">
            <div className="timeline-item glass glass-hover">
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <h4 className="timeline-title">B.Tech in Computing</h4>
                <span className="timeline-date"><Calendar size={14} /> 2023 - 2027</span>
              </div>
              <h5 className="timeline-org">SRM University of Science & Technology • Trichy, TN</h5>
              <div className="timeline-badge-row">
                <span className="timeline-cgpa-badge">CGPA: 9.11 / 10.0</span>
              </div>
            </div>

            <div className="timeline-item glass glass-hover cert-item">
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <h4 className="timeline-title">Key Industry Certifications</h4>
                <Award className="cert-icon" size={20} />
              </div>
              <ul className="timeline-details certs-list">
                <li><strong>IBM:</strong> Getting Started with Artificial Intelligence</li>
                <li><strong>Oracle:</strong> Cloud Infrastructure 2025 Certified Generative AI Professional</li>
                <li><strong>MongoDB:</strong> Connecting to MongoDB Database</li>
                <li><strong>HackerRank:</strong> Problem Solving (Intermediate)</li>
                <li><strong>Coursera:</strong> Database Structures & Management with MySQL</li>
                <li><strong>EF SET:</strong> English Certificate</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
