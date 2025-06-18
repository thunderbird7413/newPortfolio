import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const experienceEntries = [
    {
      year: '2025 - Present',
      title: 'Backend Developer',
      company: 'Anugat AI',
      description: 'Developed backend architecture of 2 useful products.',
    },
    {
      year: '2024',
      title: 'Full Stack Developer',
      company: 'UBA IIT Roorkee',
      description: 'Built responsive user interfaces with modern JavaScript frameworks.',
    },
    {
      year: '2023-MID',
      title: 'Backend Developer',
      company: 'Thomso IIT Roorkee',
      description: 'Created and maintained the backend of the Thomso Website.',
    },
    {
      year: '2023-START',
      title: 'Mentor',
      company: 'Physics Wallah',
      description: 'Mentored a batch of students for their JEE preparation.',
    },
  ];

  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the item is visible
      }
    );

    const items = timelineRef.current.querySelectorAll('.timeline-item');
    items.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="section-label">
          <span className="section-number">06</span> {/* Updated section number */}
          <span className="section-title">EXPERIENCE</span>
        </div>
        <h2>My Journey</h2>
        <div className="timeline" ref={timelineRef}>
          {experienceEntries.map((entry, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{entry.year}</div>
              <div className="timeline-content">
                <h3>{entry.title}</h3>
                <p className="company">{entry.company}</p>
                <p className="description">{entry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 