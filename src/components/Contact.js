import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-label">
          <span className="section-number">05</span>
          <span className="section-title">CONTACT</span>
        </div>
        <div className="contact-layout">
          <div className="contact-info-block">
            <h2>How can I help you about your project?</h2>
            <p>IIT Roorkee<br />Roorkee, Uttarakhand, India</p>
            <p>vinayakjat.ps11@gmail.com</p>
            <p>+91 7413882214</p>
          </div>
          <div className="contact-form-block">
            <p>Need assistance more about the services or discuss about the project? Or just drop a hii to connect!!</p>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">What is your name *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">You email address *</label>
                <input type="email" id="email" name="email" required />
              </div>
              {/* <div className="form-group">
                <label htmlFor="subject">Select one...</label>
                <select id="subject" name="subject">
                  <option value="">Select one...</option>
                  <option value="services">Services Inquiry</option>
                  <option value="project">Project Proposal</option>
                  <option value="other">Other</option>
                </select>
              </div> */}
              <div className="form-group">
                <label htmlFor="message">Tell us about your project *</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-button">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;