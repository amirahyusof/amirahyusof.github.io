import { ArrowRight, Download } from 'lucide-react';

export default function About({ navigateTo }) {
    return(
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
                            <span className="text-white text-md md:text-xl">Download Resume</span>
                        </a>
                        </button>
                        <button
                        onClick={() => navigateTo('projects')}
                        className="flex items-center gap-2"
                        >
                        <span className='text-md md:text-xl text-purple-400 hover:text-purple-300 transition-colors' >
                            Explore My Projects
                        </span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}