import React from 'react';
import { Code2, Cpu, Server, Wrench, Terminal } from 'lucide-react';
import { 
  FaPython, FaJava, FaReact, FaGitAlt, FaDatabase 
} from 'react-icons/fa';
import { 
  SiPytorch, SiScikitlearn, SiNumpy, SiPandas, SiOpencv, 
  SiSpring, SiDjango, SiPostgresql, SiMongodb, SiMysql, SiJupyter, SiKaggle 
} from 'react-icons/si';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 className="category-icon" size={24} />,
    skills: [
      { name: 'Python', icon: <FaPython style={{ color: '#3776AB' }} /> },
      { name: 'Java', icon: <FaJava style={{ color: '#007396' }} /> },
      { name: 'SQL', icon: <FaDatabase style={{ color: '#336791' }} /> },
      { name: 'JavaScript', icon: <Code2 style={{ color: '#F7DF1E' }} /> }
    ]
  },
  {
    title: 'Frameworks & ML',
    icon: <Cpu className="category-icon" size={24} />,
    skills: [
      { name: 'PyTorch', icon: <SiPytorch style={{ color: '#EE4C2C' }} /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn style={{ color: '#F7931E' }} /> },
      { name: 'YOLOv11', icon: <Cpu style={{ color: '#06B6D4' }} /> },
      { name: 'OpenCV', icon: <SiOpencv style={{ color: '#5C3EE8' }} /> },
      { name: 'NumPy', icon: <SiNumpy style={{ color: '#013243' }} /> },
      { name: 'Pandas', icon: <SiPandas style={{ color: '#150458' }} /> }
    ]
  },
  {
    title: 'Backend & Systems',
    icon: <Server className="category-icon" size={24} />,
    skills: [
      { name: 'Spring Boot', icon: <SiSpring style={{ color: '#6DB33F' }} /> },
      { name: 'Django', icon: <SiDjango style={{ color: '#092E20' }} /> },
      { name: 'REST APIs', icon: <Server style={{ color: '#38BDF8' }} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql style={{ color: '#4169E1' }} /> },
      { name: 'MongoDB', icon: <SiMongodb style={{ color: '#47A248' }} /> },
      { name: 'MySQL', icon: <SiMysql style={{ color: '#4479A1' }} /> }
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench className="category-icon" size={24} />,
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt style={{ color: '#F05032' }} /> },
      { name: 'Jupyter', icon: <SiJupyter style={{ color: '#F37626' }} /> },
      { name: 'VS Code', icon: <Terminal style={{ color: '#007ACC' }} /> },
      { name: 'Kaggle', icon: <SiKaggle style={{ color: '#20BEFF' }} /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills section container">
      <h2 className="section-title">Technical Skills Matrix</h2>
      <p className="section-subtitle">
        Core technologies, machine learning frameworks, databases, and developer tools in my tech stack.
      </p>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div 
            className="skill-card glass glass-hover" 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="category-header">
              {category.icon}
              <h3 className="skill-category-title">{category.title}</h3>
            </div>

            <div className="skill-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
