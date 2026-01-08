import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative w-full"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-accent/30">
        
        {/* Card Content */}
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10">
          
          {/* Text Info */}
          <div className="flex-1 flex flex-col justify-between order-2 md:order-1">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-accent text-xs px-2 py-1 rounded border border-accent/20 bg-accent/5">
                  0{index + 1}
                </span>
                <h3 className="text-3xl font-bold tracking-tight text-white">{project.title}</h3>
              </div>
              
              <p className="text-secondary text-sm md:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-white/60 bg-white/5 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href={project.links.demo} 
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors"
              >
                Live Demo <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href={project.links.github} 
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors"
              >
                GitHub <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Image/Thumbnail */}
          <div className="w-full md:w-[45%] aspect-video order-1 md:order-2 rounded-lg overflow-hidden relative">
             <div className="absolute inset-0 bg-accent/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
             <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
             />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="work" className="relative py-32 px-6 md:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">Selected Work</h2>
          <div className="h-1 w-20 bg-accent" />
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-20">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;