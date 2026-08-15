import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'SQL', 'JavaScript']
  },
  {
    title: 'Frameworks & ML',
    skills: ['PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'OpenCV', 'YOLOv11', 'Seaborn']
  },
  {
    title: 'Backend & Systems',
    skills: ['Spring Boot', 'Django', 'REST APIs', 'PostgreSQL', 'MongoDB', 'MySQL']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git / GitHub', 'Jupyter Notebooks', 'VS Code', 'Kaggle', 'Google Colab']
  }
];

const Skills = () => {
  return (
    <section className="skills container">
      <h2 className="section-title">Technical Skills Matrix</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card glass" key={index}>
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
