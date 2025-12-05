import React from 'react';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { Anchor, Map, Compass, Home } from 'lucide-react';

export const Methodology: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5511930212525&text=Ol%C3%A1%20Thais,%20vi%20um%20an%C3%BAncio%20seu%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20acompanhamento";

  const steps = [
    {
      id: 1,
      title: "Ancoragem",
      subtitle: "Entendimento",
      description: "O primeiro passo é entender de onde você parte: seus hábitos, rotina, desafios e preferências.",
      icon: Anchor,
      color: "from-brand-500 to-brand-700"
    },
    {
      id: 2,
      title: "Rota",
      subtitle: "Planejamento",
      description: "Com base nisso, criamos um plano realista, dividido em etapas, que cabe na sua rotina.",
      icon: Map,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      title: "Navegação",
      subtitle: "Execução e Ajustes",
      description: "Aqui você ganha consistência, aprende ajustes simples e segue com clareza sem peso na consciência.",
      icon: Compass,
      color: "from-gold-500 to-amber-500"
    },
    {
      id: 4,
      title: "Porto Seguro",
      subtitle: "Liberdade",
      description: "A fase em que você se sente livre, mantendo os resultados sem depender de regras rígidas.",
      icon: Home,
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="methodology" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">

        {/* Header Section - Centered */}
        <div className="text-center mb-20 flex flex-col items-center">
          <Reveal width="100%">
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-800 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-brand-100">
                O Processo
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-950 mb-6 text-center">
                4 Fases do <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Método ÂNCORA</span>
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-16">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-brand-100 via-brand-200 to-brand-100 -z-0 transform translate-y-4"></div>

          {steps.map((step, idx) => (
            <Reveal key={step.id} delay={idx * 0.15} width="100%">
              <div className="relative z-10 group h-full flex flex-col">
                {/* Number Badge */}
                <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${step.color} rounded-2xl rotate-3 shadow-xl shadow-gray-200 flex items-center justify-center mb-8 transform transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110`}>
                  <step.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-brand-900 shadow-sm border border-brand-50">
                    {step.id}
                  </div>
                </div>

                <div className="text-center px-4 flex-grow">
                  <h3 className="font-serif text-2xl font-bold text-brand-950 mb-1">{step.title}</h3>
                  <span className="text-xs font-bold tracking-widest text-gold-600 uppercase mb-4 block">{step.subtitle}</span>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footer Quote and Button - Centered */}
        <Reveal delay={0.6} width="100%">
          <div className="flex flex-col items-center gap-8 text-center">
            <p className="text-lg text-brand-800 font-serif italic max-w-2xl mx-auto bg-brand-50 p-8 rounded-xl border border-brand-100">
              "O plano deve respeitar sua rotina, seus gostos e seu momento de vida sem terrorismo nutricional."
            </p>
            <Button
              variant="secondary"
              href={whatsappLink}
              target="_blank"
              onClick={() => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ 'event': 'clique_whatsapp', 'local': 'methodology_section' });
              }}
            >
              Quero começar minha jornada
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};