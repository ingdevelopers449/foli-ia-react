import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
      {/* Decorative background shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-orange rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-blue rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12 z-10">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full font-bold mb-6 animate-float" style={{ animationDelay: '0.5s' }}>
            Para pequeños héroes de 7 a 13 años 🚀
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Descubre el Poder de Aprender <span className="gradient-text">Jugando</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-dark/80 mb-8 max-w-2xl">
            FOLI AI es la plataforma donde el estudio se vuelve aventura. Diseñado por especialistas para niños con TDAH, transformando los deberes en misiones épicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:shadow-lg transition transform hover:-translate-y-1">
              ¡Comienza tu Aventura!
            </button>
            <button className="bg-white text-brand-dark border-2 border-brand-dark/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition">
              Información para Padres
            </button>
          </div>
        </div>

        {/* Image/Character Area */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 glass-panel rounded-full flex items-center justify-center">
            {/* Pulsing rings */}
            <div className="absolute inset-0 border-4 border-brand-orange/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute inset-4 border-4 border-brand-blue/30 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
            
            {/* The character placeholder */}
            <div className="text-[150px] animate-wiggle select-none drop-shadow-2xl">
              🦊
            </div>
            
            {/* Floating badges */}
            <div className="absolute -right-4 top-10 bg-white p-3 rounded-2xl shadow-xl animate-float">
              ⭐ Nivel +1
            </div>
            <div className="absolute -left-8 bottom-20 bg-white p-3 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              🧠 ¡Genial!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
