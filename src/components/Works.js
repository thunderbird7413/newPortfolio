import React from 'react';
import './Works.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import icons
import CareerPathFinder from '../images/career-path-finder.png';
import Astriverse from '../images/Astriverse.png';
import Apple from "../images/Apple.png"
import Cinequest from "../images/Cinequest.png"
import UBA from "../images/UBA.png"
const Works = () => {
  // Updated placeholder data for featured projects
  const featuredProjects = [
    {
      label: 'Featured Project',
      title: 'Career Path Finder',
      description: 'A smart web platform that helps users discover ideal career paths based on their skills and interests. Integrates real-time job market trends, AI-based skill matching, and personalized roadmaps using React.js, Node.js, and MongoDB..',
      technologies: ['MERN Stack', 'AI', 'MongoDB', 'React.js', 'Node.js'],
      imageUrl: CareerPathFinder, // Placeholder image URL
      githubLink: '#',
      liveLink: '#',
    },
    {
      label: 'Featured Project',
      title: 'Astriverse',
      description: ' We were tasked to build a platform (or extend one) that enables decision-makers to derive insights quickly, collaborate effectively, and communicate findings visually through an interactive 3D interface — turning complex datasets into simple, powerful visualizations.',
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Three.js",
        "Threebox",
        "Mapbox GL JS",
        "Node.js",
        "Express.js",
        "WebSocket (Socket.IO)",
        "MongoDB (Mongoose ODM)",
        "JWT-based (extendable)"
      ],
      imageUrl: Astriverse, // Placeholder image URL
      githubLink: '#',
      liveLink: '#',
    },
        {
        label: 'Featured Project',
        title: 'Apple 2.0',
        description: 'Redesigned Apple’s official website with a fresh UI/UX approach focused on interactivity, accessibility, and seamless navigation. Built using HTML, CSS, and JavaScript, with modern design elements and animations to enhance user engagement and visual appeal.',
        technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
        imageUrl: Apple, // Placeholder image URL
        githubLink: '#',
        liveLink: '#',
        },
        {
        label: 'Featured Project',
        title: 'Cinequest',
        description: "Welcome to Cinequest, your ultimate destination for movie enthusiasts! Discover an extensive collection of films from all genres, curated just for you. Whether you're looking for the latest blockbuster or a hidden gem, our app makes finding your next favorite movie effortless. Dive in and start your cinematic journey with us today!",
        technologies: ['React.js', 'Web APIs'],
        imageUrl: Cinequest, // Placeholder image URL
        githubLink: '#',
        liveLink: '#',
        },
        {
        label: 'Featured Project',
        title: 'UBA IITR',
        description: "Developing and automating key modules of the UBA website, including secure authentication, database integration, and RESTful APIs using Node.js, Express.js, and MongoDB. Improved data management and accessibility for a rural development initiative.",
        technologies: ['React.js', 'Mongodb', 'Node.js', 'Express.js'],
        imageUrl: UBA, // Placeholder image URL
        githubLink: '#',
        liveLink: '#',
        },

    // Add more featured projects as needed
  ];

  return (
    <section className="works-section" id="works">
      <div className="works-container">
        <div className="section-label">
          <span className="section-number">02</span>
          <span className="section-title">WORKS</span>
        </div>
        {featuredProjects.map((project, index) => (
          <div key={index} className={`featured-project ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="project-details">
              <div className="project-label">{project.label}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="technology-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
                {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works; 