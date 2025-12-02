import React from 'react';
import { Instagram, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-brand-100/60 py-16 border-t border-brand-900 relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
            <h3 className="font-serif text-3xl text-white font-bold mb-2">Thais Bertocco</h3>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 font-bold">Nutrição & Saúde</p>
        </div>
        
        <p className="mb-10 max-w-md mx-auto leading-relaxed text-sm">
          Transformando vidas através de uma nutrição consciente, prática e sem sofrimento.
        </p>

        <div className="flex justify-center gap-6 mb-12">
            <a href="https://www.instagram.com/thaisbertocco" target="_blank" rel="noreferrer" className="p-3 bg-brand-900 rounded-full hover:bg-gold-500 hover:text-white transition duration-300 shadow-lg shadow-black/20"><Instagram className="w-5 h-5" /></a>
            <a href="https://www.google.com/search?q=Thais+Bertocco+Nutricionista" target="_blank" rel="noreferrer" className="p-3 bg-brand-900 rounded-full hover:bg-gold-500 hover:text-white transition duration-300 shadow-lg shadow-black/20"><MapPin className="w-5 h-5" /></a>
        </div>
        
        <div className="border-t border-brand-900 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-light">
          <p>Copyright © {new Date().getFullYear()}. Thais Bertocco. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};