import React from 'react';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { ChevronDown, Anchor } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-brand-950">
      {/* Background & Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
          alt="Background Texture" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-950 via-brand-900 to-brand-900/80"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent"></div>
      
      {/* Accent Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Text Content */}
            <div className="lg:w-1/2 order-2 lg:order-1">
                <Reveal>
                <div className="flex flex-wrap gap-3 mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-400/30 bg-red-500/10 backdrop-blur-md">
                        <span className="text-red-300 font-medium text-xs tracking-wider uppercase">Não atendemos convênio</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-500/10 backdrop-blur-md">
                        <Anchor className="w-3 h-3 text-gold-400" />
                        <span className="text-gold-300 font-semibold tracking-wider text-xs uppercase">Método ÂNCORA</span>
                    </div>
                </div>
                </Reveal>
                
                <Reveal delay={0.1}>
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
                    Emagreça comendo bem com um plano <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white italic">sob medida.</span>
                </h1>
                </Reveal>
                
                <Reveal delay={0.2}>
                <p className="text-lg text-brand-100/90 mb-10 font-light leading-relaxed border-l-4 border-gold-500 pl-6">
                    Com o <strong>Método ÂNCORA</strong>, você reduz medidas sem passar fome e melhora seus exames, seguindo um plano que funciona até nos dias mais corridos.
                </p>
                </Reveal>
                
                <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-5">
                    <Button 
                        variant="secondary" 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                    >
                        Conversar sobre meu plano
                    </Button>
                    <Button 
                        variant="outline" 
                        className="border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                        onClick={() => document.getElementById('methodology')?.scrollIntoView({behavior: 'smooth'})}
                    >
                        Entender o Método
                    </Button>
                </div>
                </Reveal>
                
                <Reveal delay={0.5}>
                <div className="mt-12 flex items-center gap-4 text-brand-200/60 text-sm font-medium tracking-wide">
                    <span className="uppercase">Nutricionista em Cotia e Região</span>
                </div>
                </Reveal>
            </div>

            {/* Hero Image / Photo */}
            <div className="hidden lg:flex lg:w-1/2 relative h-[500px] lg:h-[650px] order-1 lg:order-2 w-full justify-center">
                 <Reveal delay={0.4}>
                    <div className="relative w-full h-full flex justify-center items-end">
                        {/* Abstract Background Shape - Backlight */}
                        <div className="absolute top-20 right-10 lg:right-20 w-[300px] h-[300px] bg-gradient-to-tr from-brand-400 to-brand-600 rounded-full blur-[80px] opacity-40 animate-pulse-slow"></div>
                        
                        {/* PHOTO: Standing with crossed arms */}
                        <img 
                            src="https://drive.google.com/uc?export=view&id=1-QZBxABAFWrks3HT_ACoQXzmN0N5zM2K" 
                            alt="Nutricionista Thais Bertocco"
                            className="relative z-10 w-auto h-[450px] lg:h-[650px] object-cover drop-shadow-2xl"
                            style={{ 
                                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                            }}
                        />
                    </div>
                 </Reveal>
            </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-brand-300/50 cursor-pointer" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};