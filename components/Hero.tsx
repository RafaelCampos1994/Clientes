import React from 'react';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { ChevronDown, Anchor } from 'lucide-react';

export const Hero: React.FC = () => {
    const whatsappLink = "https://api.whatsapp.com/send?phone=5511930212525&text=Ol%C3%A1%20Thais,%20vi%20um%20an%C3%BAncio%20seu%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20acompanhamento";

    return (
        <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center overflow-hidden bg-brand-950">

            {/* 1. Main Photo - Full Width */}
            <div className="absolute inset-0 z-0 flex justify-end">
                <div className="relative w-full h-full">
                    <img
                        src="https://i.postimg.cc/7ZCX7K6b/foto-de-thais-empatica-01.jpg"
                        alt="Nutricionista Thais Bertocco"
                        // Ajuste: 
                        // Mobile: posicionada à esquerda (20%) para mostrar o rosto da Thais
                        // Desktop: posicionada levemente a direita para dar espaço ao texto
                        className="w-full h-full object-cover object-[20%_20%] md:object-[12%_20%] opacity-100"
                    />

                    {/* Gradient Masks - Refined for "Shadow Effect" instead of "Dark Overlay" */}

                    {/* Desktop: Gradiente linear apenas na esquerda para garantir leitura do texto, suavizando rapidamente */}
                    <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/60 to-transparent w-[70%]"></div>

                    {/* Mobile: Gradiente mais forte para garantir contraste em telas pequenas */}
                    <div className="md:hidden absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/90 to-transparent"></div>
                </div>
            </div>

            {/* 2. Decorative Glows - Subtle */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

            <div className="container mx-auto px-6 relative z-10 pt-20 pb-12">
                <div className="max-w-3xl">
                    <Reveal>
                        <div className="flex flex-wrap gap-3 mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-400/30 bg-red-500/10 backdrop-blur-md shadow-lg">
                                <span className="text-red-300 font-medium text-xs tracking-wider uppercase drop-shadow-md">Não atendemos convênio</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-500/10 backdrop-blur-md shadow-lg">
                                <Anchor className="w-3 h-3 text-gold-400" />
                                <span className="text-gold-300 font-semibold tracking-wider text-xs uppercase drop-shadow-md">Método ÂNCORA</span>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8 drop-shadow-xl shadow-black/50 uppercase">
                            EMAGREÇA COMENDO BEM COM UM PLANO <span className="font-serif text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white italic">FEITO SOB MEDIDA PRA SUA REALIDADE!</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="text-lg text-brand-100 mb-8 font-light leading-relaxed border-l-4 border-gold-500 pl-6 max-w-[85%] md:max-w-xl drop-shadow-lg text-shadow-sm">
                            Com o <strong>Método ÂNCORA</strong>, você reduz medidas sem passar fome e melhora seus exames, seguindo um plano que funciona até nos dias mais corridos.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="mb-8">
                            <span className="text-brand-200 text-sm font-semibold tracking-wide uppercase drop-shadow-md flex items-center gap-2">
                                <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
                                Nutricionista em Granja Viana <br className="md:hidden" />e São Roque
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    window.dataLayer = window.dataLayer || [];
                                    window.dataLayer.push({ 'event': 'clique_whatsapp', 'local': 'hero_section' });
                                    window.open(whatsappLink, '_blank');
                                }}
                            >
                                Falar com a Nutri Agora!
                            </Button>
                            <Button
                                variant="outline"
                                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm shadow-lg"
                                onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Conheça o Método
                            </Button>
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