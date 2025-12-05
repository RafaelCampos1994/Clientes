import React from 'react';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { MessageCircle, Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-600/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-800/80 to-brand-950/90 backdrop-blur-md rounded-[3rem] p-10 md:p-16 border border-brand-700 shadow-2xl text-center">

            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
              Qual o melhor plano pra mim?
            </h2>

            <p className="text-brand-100/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Se você quer emagrecer de um jeito possível, com apoio de verdade, toque no botão abaixo para ser acompanhada diretamente por mim. Vamos encontrar a melhor estratégia para sua rotina.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-brand-50 text-sm font-medium">
              <div className="flex items-center gap-2 bg-brand-800/50 px-4 py-2 rounded-full border border-brand-700">
                <Check className="w-4 h-4 text-gold-400" /> <span>Análise de Rotina</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-800/50 px-4 py-2 rounded-full border border-brand-700">
                <Check className="w-4 h-4 text-gold-400" /> <span>Cardápio Personalizado</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-800/50 px-4 py-2 rounded-full border border-brand-700">
                <Check className="w-4 h-4 text-gold-400" /> <span>Acompanhamento Próximo</span>
              </div>
            </div>

            <Button
              variant="secondary"
              className="text-lg px-12 py-5 shadow-xl shadow-gold-500/20"
              href="https://api.whatsapp.com/send?phone=5511930212525&text=Ol%C3%A1%20Thais,%20vi%20um%20an%C3%BAncio%20seu%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20acompanhamento"
              target="_blank"
              onClick={() => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ 'event': 'clique_whatsapp', 'local': 'pricing_section' });
              }}
            >
              <MessageCircle className="w-6 h-6" />
              Conversar no WhatsApp
            </Button>

            <p className="mt-8 text-sm text-brand-400/60 uppercase tracking-widest text-xs">
              Atendimento particular • Não aceitamos convênio
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};