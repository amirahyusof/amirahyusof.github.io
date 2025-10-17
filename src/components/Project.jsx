import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  Heart, 
  Calendar, 
  Plane, 
  Flower2, 
  Coffee
} from 'lucide-react';

export default function Projects({ navigateTo }) {
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


  return (
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
  );
}