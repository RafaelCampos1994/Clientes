import React from 'react';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { ChevronDown, Anchor } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center overflow-hidden bg-brand-950">

      {/* 1. Background Texture (Subtle pattern) */}
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
          alt="Texture"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* 2. Main Photo - Positioned Absolute with Blending/Opacity */}
      {/* This ensures it doesn't push content down (keeping buttons visible) */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full h-full">
          <img
            src="https://i.postimg.cc/7ZCX7K6b/foto-de-thais-empatica-01.jpg"
            alt="Nutricionista Thais Bertocco"
            // Ajuste Desktop: 
            // 1. md:object-[12%_20%] -> Move a imagem visualmente para a direita (ao alinhar a esquerda da imagem com a esquerda da tela em crop).
            // 2. md:opacity-100 -> Remove transparência para tirar o aspecto "apagado".
            className="w-full h-full object-cover object-[center_20%] md:object-[12%_20%] opacity-90 md:opacity-100"
          />

          {/* Gradient Masks */}

          {/* Desktop: Gradiente ajustado para terminar antes (via-40%) e ser mais suave (70%), limpando o rosto na direita */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-brand-950 from-10% via-brand-950/70 via-40% to-transparent"></div>

          {/* Mobile: Mantido original */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent opacity-80"></div>
        </div>
      </div>

      {/* 3. Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-6 relative z-10 pt-20 pb-12">
        <div className="max-w-3xl">
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
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 drop-shadow-lg bg-brand-950/60 md:bg-transparent p-4 -ml-4 md:ml-0 md:p-0 rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
              Emagreça comendo bem com um plano feito <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white italic drop-shadow-lg">sob medida</span> pra sua realidade!
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg text-brand-100/90 mb-10 font-light leading-relaxed border-l-4 border-gold-500 pl-6 max-w-xl drop-shadow-md bg-brand-950/40 md:bg-transparent rounded-r-lg py-2 md:py-0 backdrop-blur-sm md:backdrop-blur-none">
              Com o <strong>Método ÂNCORA</strong>, você reduz medidas sem passar fome e melhora seus exames, seguindo um plano que funciona até nos dias mais corridos.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button
                variant="secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conversar sobre meu plano
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
                onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Entender o Método
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-12 flex items-center gap-4 text-brand-200/60 text-sm font-medium tracking-wide">
              <span className="uppercase">Nutricionista em Granja Viana e Cotia</span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-brand-300/50 cursor-pointer z-20" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};