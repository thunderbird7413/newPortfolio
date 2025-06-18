import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
