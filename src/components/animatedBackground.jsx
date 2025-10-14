export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-20 left-10 w-96 h-96 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0) 80%)',
            filter: 'blur(10px)',
            animationDuration: '4s'
          }}
        ></div>
        <div 
          className="absolute top-40 right-10 w-96 h-96 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0) 80%)',
            filter: 'blur(10px)',
            animationDuration: '5s',
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0) 80%)',
            filter: 'blur(10px)',
            animationDuration: '6s',
            animationDelay: '2s'
          }}
        ></div>
      </div>
   )
}