import React, { useState } from 'react';
import { Mail, MapPin, Send, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setStatusMsg('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // Direct mailto fallback if access key is not set
      const mailtoUrl = `mailto:chaitanyageddanapalli@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Chaitanya,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
      window.location.href = mailtoUrl;
      setStatus('success');
      setStatusMsg('Opening your email client to send the message...');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact Form Submission',
          message: formData.message
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setStatusMsg('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to submit form');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      // Fallback trigger to mailto
      const mailtoUrl = `mailto:chaitanyageddanapalli@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Chaitanya,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
      window.location.href = mailtoUrl;
      setStatus('error');
      setStatusMsg('Could not submit form directly. Opened email client as a fallback.');
    }
  };

  return (
    <section id="contact" className="contact section container">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Have a project idea, question, or opportunity? Feel free to reach out directly or send a message.
      </p>

      <div className="contact-grid">
        {/* Left Side: Contact Information Cards */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="contact-info-title">Let's Connect</h3>
          <p className="contact-info-text">
            I am always open to discussing computer vision research, machine learning projects, or full-stack engineering opportunities.
          </p>

          <div className="contact-cards">
            <a href="mailto:chaitanyageddanapalli@gmail.com" className="contact-card glass glass-hover">
              <div className="contact-card-icon">
                <Mail size={22} />
              </div>
              <div>
                <span className="contact-card-label">Email</span>
                <span className="contact-card-value">chaitanyageddanapalli@gmail.com</span>
              </div>
            </a>

            <div className="contact-card glass">
              <div className="contact-card-icon">
                <MapPin size={22} />
              </div>
              <div>
                <span className="contact-card-label">Location</span>
                <span className="contact-card-value">Trichy, TN, India (Remote Available)</span>
              </div>
            </div>

            <a 
              href="https://drive.google.com/drive/folders/1V22u8cbbQSwHeQaHYMXPWtxlOzNtGTqG?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card glass glass-hover"
            >
              <div className="contact-card-icon">
                <FileText size={22} />
              </div>
              <div>
                <span className="contact-card-label">Certificates & Resume</span>
                <span className="contact-card-value">Google Drive Credentials Folder</span>
              </div>
            </a>
          </div>

          <div className="contact-social-row">
            <a 
              href="https://github.com/chaitanya2190" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="GitHub Profile"
            >
              <FaGithub size={22} />
            </a>
            <a 
              href="https://www.linkedin.com/in/chaitanyageddanapalli" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Interactive Form */}
        <motion.div 
          className="contact-form-wrapper glass"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="John Doe" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="john@example.com" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                placeholder="Project Inquiry / Job Opportunity" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Hello Chaitanya, I would like to discuss..." 
                required 
              ></textarea>
            </div>

            {statusMsg && (
              <div className={`status-message ${status}`}>
                {status === 'success' && <CheckCircle2 size={18} />}
                {status === 'error' && <AlertCircle size={18} />}
                <span>{statusMsg}</span>
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary form-submit-btn"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
