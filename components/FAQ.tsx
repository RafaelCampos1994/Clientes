import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import type { FaqItem } from '../types';

export const FAQ: React.FC = () => {
  const questions: FaqItem[] = [
    {
      question: "Aceita convênio médico?",
      answer: "Não atendemos diretamente por plano de saúde, mas emitimos recibo para que você possa solicitar reembolso caso seu convênio ofereça essa opção."
    },
    {
      question: "Qual a diferença entre sua consulta e a de um plano de saúde?",
      answer: "As consultas de plano de saúde são muito genéricas com uma dieta pronta de gaveta que não leva em consideração suas dificuldades, rotina e objetivos, por isso não trabalhamos com consultas de convênio.\nJá comigo você terá um atendimento premium e individualizado, onde vou primeiro te ouvir: para criar um plano 100% personalizado pra você, sua rotina, dificuldades e encaixar seus alimentos favoritos na sua dieta."
    },
    {
      question: "Onde fica o consultório?",
      answer: "Você pode ser atendido(a) presencialmente por mim em Cotia no Open Mall The Square ou em São Roque na Avenida Bandeirantes.\nOu se preferir: você pode ser acompanhado por mim de onde estiver! Atendo online para todo o Brasil, com a mesma qualidade e atenção que você teria no consultório. Ou seja, não importa onde você esteja, sua transformação está a apenas uma mensagem de distância!"
    },
    {
      question: "Quais são as formas de pagamento disponíveis?",
      answer: "Aceitamos pagamentos via PIX, cartão de crédito e débito. Consulte as condições de parcelamento para os planos de acompanhamento."
    },
    {
      question: "Qual o melhor plano pra mim?",
      answer: "Isso depende do seu objetivo e nível de suporte necessário. Por isso, recomendo clicar no botão de contato para conversarmos e eu te indicar a melhor opção."
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-950 font-bold mb-4">
              Dúvidas Frequentes
            </h2>
            <div className="w-20 h-1 bg-gold-400 mx-auto rounded-full"></div>
          </div>
        </Reveal>

        <div className="space-y-4 mb-16">
          {questions.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} width="100%">
              <FaqAccordion item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} width="100%">
          <div className="flex flex-col items-center gap-4">
            <p className="text-slate-500 text-sm">Ainda com dúvida? Me chame no WhatsApp.</p>
            <Button
              variant="secondary"
              href="https://api.whatsapp.com/send?phone=5511930212525&text=Ol%C3%A1%20Thais,%20vi%20um%20an%C3%BAncio%20seu%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20acompanhamento"
              target="_blank"
              onClick={() => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ 'event': 'clique_whatsapp', 'local': 'faq_section' });
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Falar com a equipe
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const FaqAccordion: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? 'bg-brand-50 border-brand-200 shadow-md' : 'bg-white border-slate-100 hover:border-brand-100'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className={`font-serif font-bold text-lg pr-4 ${isOpen ? 'text-brand-800' : 'text-slate-700'}`}>{item.question}</span>
        <div className={`p-1 rounded-full transition-transform duration-300 flex-shrink-0 ${isOpen ? 'bg-brand-200 text-brand-800 rotate-180' : 'bg-slate-50 text-slate-400'}`}>
          <Minus className={`w-5 h-5 ${isOpen ? '' : 'hidden'}`} />
          <Plus className={`w-5 h-5 ${isOpen ? 'hidden' : ''}`} />
        </div>
      </button>
      <div
        className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed border-t border-brand-200/50 pt-4">{item.answer}</p>
      </div>
    </div>
  );
};