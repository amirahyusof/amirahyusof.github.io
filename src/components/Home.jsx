import { Code2, ArrowRight } from 'lucide-react';

export default function Home({navigateTo}) {  
  return (
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
  );
}