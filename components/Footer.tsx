import React from 'react';
import { motion } from 'framer-motion';
import { SOCIALS, PROFILE } from '../constants';

const Footer = () => {
  return (
    <footer className="relative py-20 px-6 md:px-12 bg-black border-t border-white/10 z-10">
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[50vh]">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div>
            <h3 className="text-2xl font-mono text-accent mb-2">Let's Connect</h3>
            <p className="text-secondary max-w-md">
              Always open to discussing new projects, opportunities in cybersecurity, or just geeking out over web tech.
            </p>
          </div>
          
          <div className="flex gap-8">
            {SOCIALS.map((social) => (
              <a 
                key={social.label} 
                href={social.url}
                className="font-mono text-sm text-white hover:text-accent transition-colors uppercase tracking-widest relative group"
              >
                {social.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-20">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10vw] font-bold leading-none tracking-tighter text-white/10 select-none"
          >
            KALMADI
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-between items-end mt-4 border-t border-white/10 pt-4 text-xs font-mono text-white/40">
            <p>© {new Date().getFullYear()} Saisiddi Kalmadi. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Engineered with React & Three.js</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;