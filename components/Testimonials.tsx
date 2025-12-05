import React, { useRef, useEffect, useState } from 'react';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
    const whatsappLink = "https://api.whatsapp.com/send?phone=5511930212525&text=Ol%C3%A1%20Thais,%20vi%20um%20an%C3%BAncio%20seu%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20acompanhamento";

    // Using only Depoimento 01, 02, and 03
    const testimonialImages = [
        '/Depoimentos/Depoimento 01.jpeg',
        '/Depoimentos/Depoimento 02.jpeg',
        '/Depoimentos/Depoimento 03.jpeg',
    ];

    // Duplicate images enough times to ensure seamless scrolling on large screens
    // 4 sets ensures we have enough buffer for almost any screen size
    const allImages = [...testimonialImages, ...testimonialImages, ...testimonialImages, ...testimonialImages];

    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;

        // Speed of auto-scroll
        const speed = 0.5;

        const scroll = () => {
            if (!isPaused) {
                // If we've scrolled past the first set (approx 1/4 of total width), reset
                // We calculate the width of one set of items
                const totalWidth = scrollContainer.scrollWidth;
                const oneSetWidth = totalWidth / 4;

                if (scrollContainer.scrollLeft >= oneSetWidth) {
                    scrollContainer.scrollLeft -= oneSetWidth;
                } else {
                    scrollContainer.scrollLeft += speed;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    const handleManualScroll = (direction: 'left' | 'right') => {
        setIsPaused(true);
        if (scrollRef.current) {
            // Scroll by one card width + gap approx
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-24 bg-brand-50 overflow-hidden relative">
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

                {/* Carousel Container */}
                <div className="relative w-full mb-16 group">
                    {/* Gradient masks for smooth fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 z-10 bg-gradient-to-r from-brand-50 to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 z-10 bg-gradient-to-l from-brand-50 to-transparent pointer-events-none"></div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => handleManualScroll('left')}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-brand-700 p-2 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-500"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </button>

                    <button
                        onClick={() => handleManualScroll('right')}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-brand-700 p-2 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-500"
                        aria-label="Próximo"
                    >
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-hidden gap-6 py-4 select-none"
                    >
                        {allImages.map((src, index) => (
                            <div
                                key={`testimonial-${index}`}
                                className="flex-shrink-0 w-[280px] md:w-[350px] bg-white p-2 rounded-2xl shadow-lg border border-brand-100 transition-transform duration-300"
                            >
                                <img
                                    src={src}
                                    alt={`Depoimento`}
                                    className="w-full h-auto rounded-xl object-contain bg-slate-100 pointer-events-none"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://placehold.co/350x500/e0ecf6/1F5A92?text=Depoimento+Carregando...';
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <Reveal delay={0.3} width="100%">
                    <div className="flex justify-center w-full">
                        <Button
                            variant="secondary"
                            href={whatsappLink}
                            target="_blank"
                            onClick={() => {
                                window.dataLayer = window.dataLayer || [];
                                window.dataLayer.push({ 'event': 'clique_whatsapp', 'local': 'testimonials_section' });
                            }}
                        >
                            Quero ter resultados assim <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};