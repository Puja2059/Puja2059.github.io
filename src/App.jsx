import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { SecurityLabs } from './components/SecurityLabs';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Training } from './components/Training';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <SecurityLabs />
        <Experience />
        <Skills />
        <Training />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
