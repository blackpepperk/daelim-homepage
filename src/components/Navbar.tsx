import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-cyan-500/20 flex items-center justify-center border border-cyan-500/50">
                <span className="font-mono font-bold text-cyan-400">R</span>
              </div>
              <span className="font-sans text-xl font-bold tracking-tight text-white">
                DAELIM <span className="text-cyan-400">R-Bot</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Technology', 'Solutions', 'Research', 'About'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-full bg-cyan-500/10 border border-cyan-500/50 px-4 py-2 text-sm font-medium text-cyan-400 hover:bg-cyan-500/20 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-white/10 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-zinc-900 border-b border-white/10"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {['Technology', 'Solutions', 'Research', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block rounded-md px-3 py-2 text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-cyan-400 hover:bg-cyan-500/10"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
