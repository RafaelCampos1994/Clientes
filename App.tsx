import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Methodology } from './components/Methodology';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-50 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Methodology />
        <Testimonials />
        <About />
        <FAQ />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;