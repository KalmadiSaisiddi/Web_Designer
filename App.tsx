import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Scene from './components/Scene';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechMarquee from './components/TechMarquee';
import Footer from './components/Footer';

const App: React.FC = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="w-full bg-background text-primary selection:bg-accent selection:text-black">
      {/* 3D Background */}
      <Scene />
      
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <TechMarquee />
        <Projects />
        <Footer />
      </div>
    </main>
  );
};

export default App;