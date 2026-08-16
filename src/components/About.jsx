import React from 'react';
import { GraduationCap, Award, FolderGit2, UserCheck, Brain, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap size={28} className="highlight-icon" />,
      title: "Education",
      desc: "B.Tech in Computing",
      sub: "SRM University • 9.11 CGPA"
    },
    {
      icon: <FolderGit2 size={28} className="highlight-icon" />,
      title: "Completed Work",
      desc: "Deepfake Detection, Medical AI & REST APIs",
      sub: "Computer Vision & Full-Stack"
    },
    {
      icon: <Award size={28} className="highlight-icon" />,
      title: "Certifications",
      desc: "IBM AI, Oracle GenAI & MongoDB",
      sub: "HackerRank Intermediate"
    }
  ];

  return (
    <section id="about" className="about section container">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        Bridging the gap between cutting-edge Artificial Intelligence models and production-ready full-stack applications.
      </p>

      <div className="about-grid">
        <motion.div 
          className="about-highlights"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card glass glass-hover">
              <div className="icon-wrapper">{item.icon}</div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-desc">{item.desc}</p>
              <span className="highlight-sub">{item.sub}</span>
            </div>
          ))}
        </motion.div>

        <motion.div 
          className="about-bio glass"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="bio-title">
            <UserCheck size={22} className="bio-icon" />
            AI/ML Engineer & Full-Stack Developer
          </h3>
          
          <p className="bio-text">
            I am a passionate computer science student pursuing my <strong>B.Tech in Computing at SRM University</strong> (9.11 CGPA). 
            My primary domain of expertise spans <strong>Computer Vision, Deep Learning, PyTorch, and YOLOv11</strong> architecture.
          </p>

          <p className="bio-text">
            Alongside machine learning, I possess strong software engineering foundations in <strong>React, Java, Spring Boot, and PostgreSQL</strong>. 
            I enjoy building end-to-end applications—from training specialized detection neural networks to deploying scalable RESTful microservices.
          </p>

          <div className="bio-pills">
            <span className="bio-pill"><Brain size={14} /> Computer Vision</span>
            <span className="bio-pill"><Terminal size={14} /> PyTorch & ML</span>
            <span className="bio-pill"><FolderGit2 size={14} /> Spring Boot & React</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
