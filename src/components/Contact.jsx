import { 
  Github, 
  Linkedin, 
  Mail, 
} from 'lucide-react';

export default function Contact(){
  return(
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
  )
}