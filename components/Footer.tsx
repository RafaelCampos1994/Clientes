import React from 'react';
import { Instagram, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-brand-100/60 py-8 border-t border-brand-900 relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-3 flex justify-center">
          <img src="/Logo/LOGO 04.png" alt="Thais Bertocco" className="h-40 md:h-48 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
        </div>

        <p className="mb-4 max-w-md mx-auto leading-relaxed text-sm">
          Transformando vidas através de uma nutrição consciente, prática e sem sofrimento.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a href="https://www.instagram.com/thaisbertocco" target="_blank" rel="noreferrer" className="p-3 bg-brand-900 rounded-full hover:bg-gold-500 hover:text-white transition duration-300 shadow-lg shadow-black/20"><Instagram className="w-5 h-5" /></a>
          <a href="https://maps.app.goo.gl/vroU99odSrmWp9Ps6" target="_blank" rel="noreferrer" className="p-3 bg-brand-900 rounded-full hover:bg-gold-500 hover:text-white transition duration-300 shadow-lg shadow-black/20"><MapPin className="w-5 h-5" /></a>
        </div>

        <div className="border-t border-brand-900 pt-4 flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-light">
          <p>Copyright © {new Date().getFullYear()}. Thais Bertocco. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};