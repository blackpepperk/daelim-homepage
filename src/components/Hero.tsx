import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/nexbotrobotcharacterconcept-OlWcV65AKMw9QDpTz0q4Ad5j/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="h-full w-full"
          title="Spline 3D Animation"
        ></iframe>
      </div>

      {/* Overlay Gradient for Text Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              Next Gen Robotics Platform
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6 font-sans">
              The Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Autonomous Labor
              </span>
            </h1>
            
            <p className="mt-4 text-xl text-zinc-300 max-w-lg mb-8 leading-relaxed">
              DAELIM R-Bot engineers advanced humanoid robotics for industrial automation, 
              redefining efficiency with precision AI and adaptive mobility.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-cyan-600 px-8 py-3 font-medium text-white shadow-lg transition-all hover:bg-cyan-500 hover:shadow-cyan-500/25">
                <span className="mr-2">Explore Models</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10">
                View Specs
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-zinc-400"
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.div>
    </div>
  );
}
