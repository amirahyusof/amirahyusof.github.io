import { ArrowRight } from 'lucide-react';

const techStack = [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#FFFFFF" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Tailwind", color: "#06B6D4" },
    { name: "Firebase", color: "#FFCA28" },
    { name: "Supabase", color: "#3ECF8E" },
    { name: "Astro", color: "#FF5D01" }
  ];

export default function TechStack({ navigateTo }) {
  return(
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
  )
}