import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none"
    >
      <div className="font-mono text-sm tracking-wider uppercase pointer-events-auto">
        {PROFILE.name}
      </div>
      
      <div className="flex items-center gap-2 font-mono text-xs md:text-sm pointer-events-auto">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        <span className="opacity-80">STATUS: {PROFILE.status}</span>
      </div>
    </motion.header>
  );
};

export default Header;