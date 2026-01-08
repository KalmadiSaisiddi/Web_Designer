import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';
import { PROFILE } from '../constants';

const Hero = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    workSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 pb-10 overflow-hidden">
      
      <div className="max-w-7xl w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-12"
        >
          <p className="font-mono text-accent text-sm md:text-base tracking-widest uppercase">
            // {PROFILE.role}
          </p>
          <div className="h-[1px] bg-white/20 flex-grow hidden md:block mb-2" />
        </motion.div>

        <h1 className="text-[12vw] md:text-[11vw] leading-[0.85] font-bold tracking-tighter mix-blend-normal">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              DIGITAL
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              className="text-white/40" // Giving it a ghost look
            >
              REALITY.
            </motion.div>
          </div>
        </h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 md:mt-20 max-w-xl"
        >
          <p className="text-lg md:text-xl text-secondary leading-relaxed mb-10">
            {PROFILE.bio}
          </p>
          
          <div className="flex items-center gap-8">
            <MagneticButton onClick={scrollToWork}>
              <div className="h-32 w-32 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm hover:bg-accent hover:text-black hover:border-transparent transition-all duration-300 group">
                <span className="font-mono text-sm group-hover:hidden">View Work</span>
                <ArrowDown className="hidden group-hover:block w-6 h-6 animate-bounce" />
              </div>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-6 md:right-12 font-mono text-xs text-white/30 hidden md:block">
        SCROLL TO EXPLORE
      </div>
    </section>
  );
};

export default Hero;