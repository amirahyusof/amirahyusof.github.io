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

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const projects = [
    {
      title: "Kinder Tracker",
      description: "A lightweight app to help parents or educators track children’s activities and milestones.",
      tech: ["Next.js", "TypeScript", "React"],
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/amirahyusof/kinder-tracker",
      live: "https://kindertrack.vercel.app/"
    },
    {
      title: "Demon Slayer Quotes",
      description: "An anime-inspired quote app showcasing modern UI design and micro-interactions — a playful, personality-led project.",
      tech: ["React", "Tailwind", "Firebase"],
      icon: Heart,
      gradient: "from-green-400 to-blue-500",
      github: "https://github.com/amirahyusof/demon-slayer-quote",
      live: "https://demonslayerquote.vercel.app/"
    },
    {
      title: "Blossom & Bloom",
      description: "Elegant landing page showcasing aesthetic design and modern UI principles",
      tech: ["React", "Tailwind CSS"],
      icon: Flower2,
      gradient: "from-pink-400 to-rose-500",
      github: "https://github.com/amirahyusof/LandingPage-Blossom-And-Bloom",
      live: "https://blossombloom.vercel.app/"
    },
    {
      title: "CoffitMe",
      description: "An interactive coffee recommendation web app that matches your mood and personality to the perfect brew.",
      tech: ["PWA", "TypeScript", "Service Workers"],
      icon: Coffee,
      gradient: "from-blue-400 to-cyan-500",
      github: "https://github.com/amirahyusof/coffitme",
      live: "https://coffitme.vercel.app/"
    },
    {
      title: "Ramadan Checklist 2025",
      description: "Beautiful spiritual companion app designed with purpose and cultural sensitivity",
      tech: ["Next.js", "React", "Tailwind"],
      icon: Calendar,
      gradient: "from-indigo-400 to-purple-500",
      github: "https://github.com/amirahyusof/ramadan-checklist-2025",
      live: "https://ramadan-checklist-2025.vercel.app/"
    },
    {
      title: "Travel Kota Kinabalu",
      description: "Location-based travel planner with interactive itineraries and local insights",
      tech: ["React", "TypeScript", "Maps API"],
      icon: Plane,
      gradient: "from-yellow-400 to-orange-500",
      github: "https://github.com/amirahyusof/travel-kota-kinabalu",
      live: "https://travel-kota-kinabalu.netlify.app/"
    }
  ];

  const techStack = [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#FFFFFF" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Tailwind", color: "#06B6D4" },
    { name: "Firebase", color: "#FFCA28" },
    { name: "Supabase", color: "#3ECF8E" },
    { name: "Astro", color: "#FF5D01" }
  ];

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
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              A.Y
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-2">
              <NavButton page="home" label="Home" />
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
              <NavButton page="home" label="Home" />
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
          <div className="min-h-screen  flex items-center justify-center px-6 pt-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 inline-block">
                <div className="flex items-center gap-2 text-purple-400 mb-4 justify-center">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
                  <Code2 className="w-5 h-5 animate-pulse" />
                  <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
                </div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  Amirah Yusof
                </span>
              </h1>
              
              <p className="text-2xl md:text-4xl mb-8 text-gray-300 font-light">
                Frontend Developer crafting meaningful, modern web experiences
              </p>
              
              <div className="max-w-2xl mx-auto mb-12 text-lg text-gray-400 leading-relaxed">
                <p>I'm Amirah, a frontend developer passionate about turning creative ideas into intuitive digital experiences. I specialize in React, Next.js, and TypeScript — blending design and function to create value-driven projects.</p>
              </div>
              
              <div className="flex gap-4 justify-center flex-wrap">
                <button 
                  onClick={() => navigateTo('projects')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:white/50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-6 transition-transform" />
                  </span>
                </button>
                <button 
                  onClick={() => navigateTo('contact')}
                  className="px-8 py-4 border-2 border-purple-400/50 rounded-full font-semibold hover:bg-purple-400/10 transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT PAGE */}
        {currentPage === 'about' && (
          <div className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mb-12"></div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                  I design and build web experiences that make everyday tasks simpler and more joyful. From travel planners to productivity tools, I focus on creating applications that truly serve their users.
                </p>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                  My approach combines technical precision with creative vision — building functional, beautiful web apps that solve real problems with clarity and care.
                </p>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
                  I build functional and beautiful web apps — from travel planners to productivity tools — focusing on user experience and clarity. Every project is an opportunity to create something meaningful.
                </p>

                <div className='flex gap-4 text-center'>
                  <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all duration-300 flex items-center gap-2 hover:scale-105">
                    <Download className="w-4 h-4" />
                    <a 
                      href="https://drive.google.com/file/d/182vBl9a1Lvqg0u1n72BXbsFdU4zXuGt8/view?usp=sharing"
                      target='_blank'
                    >
                      <span className="text-white">Download Resume</span>
                    </a>
                  </button>
                  <button
                    onClick={() => navigateTo('projects')}
                    className="text-purple-400 hover:text-purple-300 transition-colors  flex items-center gap-2"
                  >
                    Explore My Projects
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PROJECTS PAGE */}
        {currentPage === 'projects' && (
          <div className="min-h-screen px-6 py-32">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
                Featured Projects
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mb-4 mx-auto"></div>
              <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
                A collection of projects showcasing my passion for creating meaningful digital experiences
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => {
                  const Icon = project.icon;
                  return (
                    <div 
                      key={idx}
                      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-white/10 rounded-full text-purple-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <a 
                          href={project.github}
                          target='_blank'
                          className="flex items-center gap-1 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                        <a 
                          href={project.live}
                          target='_blank'
                          className="flex items-center gap-1 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TECH STACK PAGE */}
        {currentPage === 'tech' && (
          <div className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tech Stack
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mb-4 mx-auto"></div>
              <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
                Technologies I use to bring ideas to life
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {techStack.map((tech, idx) => (
                  <div 
                    key={idx}
                    className="group flex flex-col items-center gap-4 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110"
                  >
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold transition-all duration-300 group-hover:rotate-12"
                      style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
                    >
                      {tech.name[0]}
                    </div>
                    <span className="text-base font-medium text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <button
                  onClick={() => navigateTo('contact')}
                  className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2 mx-auto group"
                >
                  Let's Work Together
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT PAGE */}
        {currentPage === 'contact' && (
          <div className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Build Something Meaningful Together
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mb-12 mx-auto"></div>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
                Have a project in mind or just want to chat? I'd love to hear from you and explore how we can create something amazing together.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <a 
                  href="mailto:amirahezzamieyusof@gmail.com"
                  className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <Mail className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2 text-lg">Email</h3>
                  <p className="text-sm text-gray-400">amirahezzamieyusof@gmail.com</p>
                </a>
                <a 
                  href="https://www.linkedin.com/in/amirahezzamie"
                  target='_blank'
                  className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <Linkedin className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2 text-lg">LinkedIn</h3>
                  <p className="text-sm text-gray-400">Connect with me</p>
                </a>
                <a 
                  href="https://github.com/amirahyusof"
                  target='_blank'
                  className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <Github className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2 text-lg">GitHub</h3>
                  <p className="text-sm text-gray-400">View my code</p>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full py-4 px-6 backdrop-blur-lg bg-black/50 border-t border-white/5 z-40">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2025 Amirah Yusof. Crafted with passion and purpose.</p>
        </div>
      </footer>
    </div>
  );
}
