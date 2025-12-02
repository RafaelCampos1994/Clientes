import React from 'react';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
    const whatsappLink = "https://api.whatsapp.com/send?phone=5511930212525&text=Ol%C3%A1%20Thais,%20vi%20um%20an%C3%BAncio%20seu%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20acompanhamento";

    // Using only Depoimento 01, 02, and 03
    const testimonialImages = [
        '/Depoimentos/Depoimento 01.jpeg',
        '/Depoimentos/Depoimento 02.jpeg',
        '/Depoimentos/Depoimento 03.jpeg',
    ];

    return (
        <section className="py-24 bg-brand-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 flex flex-col items-center">
                    <Reveal width="100%">
                        <h2 className="font-serif text-3xl md:text-5xl text-brand-950 font-bold mb-6 text-center">
                            Resultados <span className="text-brand-500">Reais</span>
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto text-center">
                            Não são apenas números na balança, são vidas transformadas e autoestima recuperada.
                        </p>
                    </Reveal>
                </div>

                {/* Marquee Carousel */}
                <div className="relative w-full mb-16">
                    {/* Gradient masks for smooth fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 z-10 bg-gradient-to-r from-brand-50 to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 z-10 bg-gradient-to-l from-brand-50 to-transparent pointer-events-none"></div>

                    <div className="flex overflow-hidden group">
                        {/* Inner container that scrolls */}
                        <div className="flex animate-scroll pause-on-hover gap-6 py-4">
                            {/* First set of images */}
                            {testimonialImages.map((src, index) => (
                                <div
                                    key={`t1-${index}`}
                                    className="flex-shrink-0 w-[280px] md:w-[350px] bg-white p-2 rounded-2xl shadow-lg border border-brand-100 hover:scale-[1.02] transition-transform duration-300"
                                >
                                    <img
                                        src={src}
                                        alt={`Depoimento ${index + 1}`}
                                        className="w-full h-auto rounded-xl object-contain bg-slate-100"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://placehold.co/350x500/e0ecf6/1F5A92?text=Depoimento+Carregando...';
                                        }}
                                    />
                                </div>
                            ))}

                            {/* Duplicate set for infinite loop effect */}
                            {testimonialImages.map((src, index) => (
                                <div
                                    key={`t2-${index}`}
                                    className="flex-shrink-0 w-[280px] md:w-[350px] bg-white p-2 rounded-2xl shadow-lg border border-brand-100 hover:scale-[1.02] transition-transform duration-300"
                                >
                                    <img
                                        src={src}
                                        alt={`Depoimento ${index + 1}`}
                                        className="w-full h-auto rounded-xl object-contain bg-slate-100"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://placehold.co/350x500/e0ecf6/1F5A92?text=Depoimento+Carregando...';
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-center text-xs text-brand-300 mt-4 italic">
                        (Passe o mouse ou toque para pausar e ler)
                    </p>
                </div>

                <Reveal delay={0.3} width="100%">
                    <div className="flex justify-center w-full">
                        <Button variant="secondary" onClick={() => window.open(whatsappLink, '_blank')}>
                            Quero ter resultados assim <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};