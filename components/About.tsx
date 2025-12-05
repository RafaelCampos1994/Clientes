import React from 'react';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { MapPin, Instagram } from 'lucide-react';

export const About: React.FC = () => {
    const whatsappLink = "https://api.whatsapp.com/send?phone=5511930212525&text=Ol%C3%A1%20Thais,%20vi%20um%20an%C3%BAncio%20seu%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20acompanhamento";

    return (
        <section className="py-24 bg-gradient-to-br from-white to-brand-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">

                    {/* Photo Section */}
                    <div className="md:w-5/12 relative">
                        <Reveal>
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/20 border-8 border-white">
                                {/* PHOTO: Sitting pose */}
                                <img
                                    src="https://i.postimg.cc/MpctR9Tn/foto-de-thais-empatica-02.jpg"
                                    alt="Nutricionista Thais Bertocco"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Decorative Background Elements */}
                            <div className="absolute top-10 -right-10 w-full h-full bg-brand-200 rounded-3xl -z-10 transform rotate-6"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-400 rounded-full blur-3xl opacity-30"></div>
                        </Reveal>
                    </div>

                    <div className="md:w-7/12">
                        <Reveal>
                            <span className="text-gold-600 font-bold tracking-widest uppercase text-xs mb-3 block flex items-center gap-2">
                                <span className="w-8 h-px bg-gold-600"></span> Prazer, Thais Bertocco
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-950 mb-8 leading-tight">
                                Recupere o controle do seu corpo sem perder o controle da sua vida
                            </h2>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
                                <p>
                                    Sou nutricionista especializada em ajudar pessoas a <strong className="text-brand-700 font-semibold">emagrecer, ganhar mais energia e melhorar exames</strong>.
                                </p>
                                <p>
                                    Acredito que se alimentar bem não precisa ser um sacrifício. O plano certo deve respeitar sua rotina, seus gostos e seu momento de vida sem terrorismo nutricional nem dietas que você não consegue sustentar.
                                </p>
                                <p>
                                    Minha abordagem é prática, acolhedora e totalmente personalizada, pensada pra reorganizar sua alimentação de forma leve, possível e sem abrir mão do que você gosta de comer.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="mt-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                <Button
                                    variant="secondary"
                                    href={whatsappLink}
                                    target="_blank"
                                    onClick={() => {
                                        window.dataLayer = window.dataLayer || [];
                                        window.dataLayer.push({ 'event': 'clique_whatsapp', 'local': 'about_section' });
                                    }}
                                >
                                    Agendar minha consulta
                                </Button>

                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                                        <MapPin className="w-4 h-4 text-brand-500" />
                                        <span>Atendimento em Granja Viana e São Roque</span>
                                    </div>
                                    <a href="https://www.instagram.com/thaisbertocco" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-brand-700 font-semibold hover:text-gold-600 transition text-sm">
                                        <Instagram className="w-4 h-4" />
                                        @thaisbertocco
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};