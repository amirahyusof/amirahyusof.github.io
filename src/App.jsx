import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Sparkles, 
  Heart, 
  Calendar, 
  Plane, 
  Flower2, 
  ArrowRight, 
  Download, 
  Menu, 
  X, 
  Coffee
} from 'lucide-react';
import AnimatedBackground from './components/animatedBackground';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Project';
import TechStack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (page) => {
    if (page === currentPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
      setIsMenuOpen(false);
    }, 300);
  };

  const NavButton = ({ page, label }) => (
    <button
      onClick={() => navigateTo(page)}
      className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
        currentPage === page
          ? 'text-purple-400 bg-purple-400/10'
          : 'text-gray-300 hover:text-purple-400'
      }`}
    >
      {label}
      {currentPage === page && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button 
              onClick={() => navigateTo('home')}
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              <span className="text-2xl font-bold text-purple-400">A.<span className='text-pink-400'>Y</span></span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-2">
              <NavButton page="about" label="About" />
              <NavButton page="projects" label="Projects" />
              <NavButton page="tech" label="Tech Stack" />
              <NavButton page="contact" label="Contact" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-purple-400"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-2 pb-4">
              <NavButton page="about" label="About" />
              <NavButton page="projects" label="Projects" />
              <NavButton page="tech" label="Tech Stack" />
              <NavButton page="contact" label="Contact" />
            </div>
          )}
        </div>
      </nav>

      {/* Page Content with Transition */}
      <div className={`relative z-10 transition-all w-full duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {/* HOME PAGE */}
        {currentPage === 'home' && (
          <Home  navigateTo={navigateTo} />
        )}

        {/* ABOUT PAGE */}
        {currentPage === 'about' && (
          <About navigateTo={navigateTo} />
        )}

        {/* PROJECTS PAGE */}
        {currentPage === 'projects' && (
          <Projects navigateTo={navigateTo} />
        )}

        {/* TECH STACK PAGE */}
        {currentPage === 'tech' && (
          <TechStack navigateTo={navigateTo} />
        )}

        {/* CONTACT PAGE */}
        {currentPage === 'contact' && (
          <Contact />
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
