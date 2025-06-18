import React, { useState } from 'react';
import './Services.css';
import { IoCubeSharp } from "react-icons/io5";
import { GiStoneSphere } from "react-icons/gi";
import { IoDiamondSharp } from "react-icons/io5";
import { TbHexagon3D } from "react-icons/tb";
import { FaCloud } from "react-icons/fa";

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to track the open item index

  const servicesList = [
    { icon: <IoCubeSharp style={{ fontSize: '2rem' }}/>,
      name: 'Full Stack Development', 
      description: 'Building robust web apps with modern frameworks, seamless APIs, and scalable architectures.',
      subItems: [
        "End-to-end web app architecture",
        "RESTful API & database integration",
        "Performance optimization & deployment",
        "Authentication and role-based access",
        "Scalable codebase using modern frameworks"
      ]
    },
    { icon: <GiStoneSphere style={{ fontSize: '2rem' }}/>,
      name: 'Frontend Development', 
      description: 'Crafting responsive, pixel-perfect interfaces using React, Next.js, Tailwind CSS, and more.',
      subItems: [
        "Modern UI with React or Next.js",
        "Mobile-first responsive layouts",
        "State management (Redux, Context API)",
        "SEO-friendly and accessible design",
        "Interactive animations and transitions"
      ]
    },
    { icon: <IoDiamondSharp style={{ fontSize: '2rem' }}/>,
      name: 'Backend Development', 
      description: 'Designing efficient backend systems using Node.js, Express, MongoDB, and RESTful APIs.',
      subItems: [
        "Node.js, Express, and database systems",
        "REST & GraphQL API development",
        "Real-time communication (Socket.IO)",
        "Authentication (JWT, OAuth)",
        "Serverless functions & cloud hosting"
      ]
    },
    { icon: <TbHexagon3D style={{ fontSize: '2rem' }}/>,
      name: ' Custom Software Solutions', 
      description: 'End-to-end development of tailored applications, dashboards, automation tools, and SaaS platforms.',
      subItems: [
        "Business dashboards & admin panels",
        "SaaS platforms & automation tools",
        "Third-party API integration",
        "Microservice architecture",
        "Cloud-based scalable apps"
      ]
    },
    { icon: <IoCubeSharp style={{ fontSize: '2rem' }}/>,
      name: 'UI/UX Design', 
      description: 'Wireframing, prototyping, and designing intuitive user experiences with a focus on us',
      subItems: [
        "Wireframing and prototyping",
        "Interactive Figma-based design",
        "Design systems and components",
        "Usability testing & user feedback",
        "Consistency across devices"
      ]
    },
    ,
    {
      icon: <FaCloud style={{ fontSize: '2rem' }} />,
      name: 'Cloud Services',
      description: 'Scalable and secure cloud infrastructure solutions to power modern applications and workflows',
      subItems: [
        "Cloud architecture and deployment (AWS, Azure, GCP)",
        "DevOps and CI/CD pipeline setup",
        "Serverless and microservices infrastructure",
        "Cloud migration and optimization",
        "Monitoring, security, and compliance"
      ]
    }
  ];

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-left">
          <div className="section-label">
            <span className="section-number">01</span>
            <span className="section-title">SERVICES</span>
          </div>
          <h2>Empowering You with Smart Solutions.</h2>
          <button className="learn-more-button">
            GO AHEAD 
          </button>
        </div>
        <div className="services-right">
          <ul className="services-list">
            {servicesList.map((service, index) => (
              <li 
                key={index} 
                className={`service-item ${openIndex === index ? 'open' : ''}`}
                onClick={() => handleItemClick(index)} // Add click handler
              >
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <span className="service-name">{service.name}</span>
                  <div className="service-plus">{openIndex === index ? '-' : '+'}</div> {/* Change icon */}
                </div>
                {openIndex === index && (
                  <div className="service-details">
                    <p>{service.description}</p>
                    {service.subItems && service.subItems.length > 0 && (
                      <ul className="service-sub-items">
                        {service.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>{subItem}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services; 