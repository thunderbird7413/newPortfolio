import React, { useState } from 'react';
import './Navbar.css';
import { IoMdHome } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Placeholder for logo */}
        <span className="navbar-logo-end">Portfolio.</span>
      </div>
      <button className="hamburger-icon" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon character */}
      </button>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item home-icon"><a href="#"><IoMdHome /></a></li>
        <li className="navbar-item"><a href="#services">SERVICES</a></li>
        <li className="navbar-item"><a href="#works">WORKS</a></li>
        <li className="navbar-item"><a href="#about">ABOUT</a></li>
        <li className="navbar-item"><a href="#experience">EXPERIENCE</a></li>
        <li className="navbar-item"><a href="#contact">CONTACT</a></li>
      </ul>
      <div className="navbar-logo-end">
        Explore
      </div>
    </nav>
  );
};

export default Navbar; 