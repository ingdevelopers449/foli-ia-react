import React from 'react';

const Header = () => {
  return (
    <nav className="w-full glass-panel fixed top-0 z-50 px-8 py-3 flex justify-between items-center border-b border-white/20 shadow-sm backdrop-blur-md">
      <a href="#hero" className="text-2xl font-extrabold text-brand-orange flex items-center gap-2 hover:opacity-80 transition">
        <span className="text-3xl drop-shadow-sm">🦊</span> FOLI AI
      </a>
      
      <div className="flex items-center gap-4 md:gap-6">
        {/* Contenedor tipo píldora para los enlaces */}
        <div className="hidden md:flex items-center gap-1 bg-white/40 p-1.5 rounded-full shadow-inner border border-white/50">
          <a href="#about" className="text-brand-dark/90 font-bold px-5 py-2 rounded-full hover:bg-white hover:shadow-sm hover:text-brand-blue transition-all text-sm">
            ¿Por qué FOLI?
          </a>
          <a href="#features" className="text-brand-dark/90 font-bold px-5 py-2 rounded-full hover:bg-white hover:shadow-sm hover:text-brand-green transition-all text-sm">
            Misiones
          </a>
        </div>

        <button className="bg-gradient-to-r from-brand-blue to-[#29b6f6] text-white px-7 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg hover:shadow-brand-blue/30 transition transform hover:-translate-y-0.5 active:translate-y-0">
          Ingresar
        </button>
      </div>
    </nav>
  );
};

export default Header;
