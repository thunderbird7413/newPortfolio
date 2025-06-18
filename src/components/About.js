import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-left">
          <div className="about-image-placeholder"></div>
        </div>
        <div className="about-right">
          <div className="section-label">
            <span className="section-number">03</span>
            <span className="section-title">ABOUT ME</span>
          </div>
          <h2>Crafting Scalable Digital Products That Empower Users</h2>
          <p style={{textAlign: "left"}}>&rarr; I am a results-driven full stack developer with extensive experience in designing, developing, and deploying scalable web applications. With a comprehensive understanding of both frontend and backend development, I consistently deliver robust and efficient software solutions that meet complex business requirements.
            <br></br>
            <br></br>
            &rarr; My work is characterized by a commitment to best practices, clean code, and thoughtful system architecture, ensuring reliability, maintainability, and optimal performance. I am dedicated to continuous professional growth and adept at adapting to evolving technologies and project demands.
            <br></br>
            <br></br>
            &rarr; I approach challenges with analytical rigor and a strategic mindset, striving to produce solutions that not only fulfill immediate objectives but also support long-term organizational goals.</p>
          <button className="contact-button">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  );
};

export default About; 