import React from 'react';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { Clock, Ban, Coffee, Heart, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export const PainPoints: React.FC = () => {
    const whatsappLink = "https://api.whatsapp.com/send?phone=5511930212525&text=Ol%C3%A1%20Thais,%20vi%20um%20an%C3%BAncio%20seu%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20acompanhamento";

    return (
        <section className="py-24 bg-brand-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-200/40 via-transparent to-transparent opacity-60"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* --- PART 1: RESTORED "ROUTINE" SECTION (FULLY CENTRALIZED) --- */}
                <Reveal width="100%">
                    <div className="max-w-4xl w-full mx-auto text-center mb-16 flex flex-col items-center">
                        <h2 className="font-serif text-4xl md:text-5xl text-brand-950 font-bold mb-6 leading-tight text-center">
                            Chega de dietas que não respeitam <span className="text-brand-600 italic">sua rotina.</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8 text-center">
                            Enquanto boa parte dos nutricionistas ainda entrega um cardápio pronto e espera
                            que você se adapte, <strong className="text-brand-700">eu faço o caminho inverso.</strong>
                        </p>

                        <div className="bg-white rounded-r-3xl rounded-bl-3xl border-l-4 border-brand-500 p-8 shadow-md max-w-2xl mx-auto mb-12 relative text-center">
                            <p className="text-xl font-serif italic text-brand-800">
                                "Não é você que tem que se encaixar na dieta..."
                            </p>
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-100 rounded-full blur-2xl opacity-50 -z-10"></div>
                        </div>

                        <p className="text-slate-600 mb-8 text-center">
                            Antes de pensar no que entra no seu prato, eu penso no que existe na sua rotina:
                        </p>

                        {/* Grid Items Centered: flex-col and text-center inside items */}
                        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 w-full">
                            <div className="flex flex-col items-center text-center gap-3 bg-white p-6 rounded-xl border border-brand-100 shadow-sm hover:shadow-md transition-shadow">
                                <Clock className="w-8 h-8 text-brand-500 mb-1" />
                                <span className="font-semibold text-brand-800">Seus horários</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-3 bg-white p-6 rounded-xl border border-brand-100 shadow-sm hover:shadow-md transition-shadow">
                                <Ban className="w-8 h-8 text-brand-500 mb-1" />
                                <span className="font-semibold text-brand-800">Seus desafios</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-3 bg-white p-6 rounded-xl border border-brand-100 shadow-sm hover:shadow-md transition-shadow">
                                <Coffee className="w-8 h-8 text-brand-500 mb-1" />
                                <span className="font-semibold text-brand-800">Seus hábitos</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-3 bg-white p-6 rounded-xl border border-brand-100 shadow-sm hover:shadow-md transition-shadow">
                                <Heart className="w-8 h-8 text-brand-500 mb-1" />
                                <span className="font-semibold text-brand-800">Seus gostos</span>
                            </div>
                        </div>

                        <Button
                            variant="secondary"
                            href={whatsappLink}
                            target="_blank"
                            onClick={() => {
                                window.dataLayer = window.dataLayer || [];
                                window.dataLayer.push({ 'event': 'clique_whatsapp', 'local': 'pain_points_section' });
                            }}
                        >
                            Falar com a Nutri Agora
                        </Button>
                    </div>
                </Reveal>

                {/* --- PART 2: NEW COMPARISON SECTION --- */}
                <div id="comparison" className="mt-24 md:mt-32">
                    <Reveal width="100%">
                        <div className="text-center mb-8 flex flex-col items-center">
                            <h2 className="font-serif text-3xl md:text-5xl text-brand-950 font-bold mb-4">
                                Por que o Método Âncora é diferente?
                            </h2>
                            <div className="w-24 h-1 bg-gold-400 rounded-full"></div>
                        </div>
                    </Reveal>

                    {/* Added padding wrapper to prevent shadows from being clipped by Reveal or container */}
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-stretch p-4">

                        {/* Card: Tradicional / Convênio */}
                        <div className="h-full">
                            <Reveal width="100%" direction="left">
                                <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-lg h-full relative opacity-90 hover:opacity-100 transition-opacity overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-3 bg-slate-300"></div>
                                    <h3 className="text-2xl lg:text-3xl font-serif font-medium text-slate-500 mb-8 text-center border-b border-slate-200 pb-4">
                                        O que você encontra por aí
                                    </h3>

                                    <ul className="space-y-5 mb-8">
                                        <li className="flex items-start gap-3 text-slate-500">
                                            <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                                            <p className="text-sm leading-relaxed">Consulta rápida e padronizada (15 a 20min);</p>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-500">
                                            <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                                            <p className="text-sm leading-relaxed">Dieta de gaveta (genérica e restritiva);</p>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-500">
                                            <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                                            <p className="text-sm leading-relaxed">Sem suporte para dúvidas após a consulta;</p>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-500">
                                            <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                                            <p className="text-sm leading-relaxed">Foco apenas em calorias e peso na balança;</p>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-500">
                                            <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                                            <p className="text-sm leading-relaxed">Você sai com dúvidas e desmotivado.</p>
                                        </li>
                                    </ul>
                                </div>
                            </Reveal>
                        </div>

                        {/* Card: Método Ancora */}
                        <div className="h-full relative z-10">
                            <Reveal width="100%" direction="right" delay={0.2}>
                                <div className="relative h-full transform md:-translate-y-6">
                                    <div className="absolute -top-5 right-1/2 transform translate-x-1/2 bg-gold-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg border-2 border-white whitespace-nowrap z-20">
                                        Recomendado
                                    </div>
                                    <div className="bg-white rounded-3xl p-8 lg:p-10 border-2 border-brand-500 shadow-2xl shadow-brand-900/10 h-full relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-brand-500 to-gold-500"></div>

                                        <h3 className="text-3xl font-serif font-medium text-brand-700 mb-8 text-center border-b border-brand-100 pb-4">
                                            Método Âncora
                                        </h3>

                                        <ul className="space-y-4 mb-8">
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                                                <p className="text-brand-900 text-sm leading-relaxed"><strong>Avaliação completa: física, nutricional e bioquímica</strong>; para investigar seu metabolismo a fundo e não tratar apenas o peso.</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                                                <p className="text-brand-900 text-sm leading-relaxed"><strong>Cardápio individualizado</strong>; planejado para a sua rotina e preferências, para que você tenha resultados comendo o que gosta.</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                                                <p className="text-brand-900 text-sm leading-relaxed"><strong>Suplementação e pedido de exames (quando necessário)</strong>; para corrigir deficiências de vitaminas e devolver sua energia.</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                                                <p className="text-brand-900 text-sm leading-relaxed"><strong>De 1 a 3 consultas por mês, conforme necessidade</strong>; para garantir que o ritmo do acompanhamento se ajuste à sua evolução, sem te deixar desamparada.</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                                                <p className="text-brand-900 text-sm leading-relaxed"><strong>Jornada em 4 fases: Ancoragem, Rota, Navegação, Porto Seguro</strong>; uma estrutura passo a passo para você conquistar autonomia.</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                                                <p className="text-brand-900 text-sm leading-relaxed"><strong>Suporte diário e acompanhamento próximo</strong>; para tirar dúvidas na hora e evitar que um deslize vire desistência.</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                                                <p className="text-brand-900 text-sm leading-relaxed"><strong>Acesso à plataforma de exercícios físicos e de meditação</strong>; para cuidar também da sua ansiedade e fortalecer sua mente durante o processo.</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                                                <p className="text-brand-900 text-sm leading-relaxed"><strong>Acesso à plataforma com conteúdos exclusivos para acelerar seus resultados</strong>.</p>
                                            </li>
                                        </ul>

                                        <div className="mt-8 text-center">
                                            <Button
                                                fullWidth
                                                variant="secondary"
                                                href={whatsappLink}
                                                target="_blank"
                                                onClick={() => {
                                                    window.dataLayer = window.dataLayer || [];
                                                    window.dataLayer.push({ 'event': 'clique_whatsapp', 'local': 'pain_points_section_bottom' });
                                                }}
                                            >
                                                Quero viver essa experiência
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};