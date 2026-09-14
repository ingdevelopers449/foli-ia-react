import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white relative">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-brand-dark">
          ¿Por qué FOLI es diferente?
        </h2>
        <div className="w-24 h-1 bg-brand-orange mx-auto mb-10 rounded-full"></div>
        
        <p className="text-lg md:text-xl text-brand-dark/80 max-w-3xl mx-auto mb-16">
          Sabemos que para niños con TDAH, sentarse a hacer la tarea puede ser un desafío monumental. FOLI actúa como un compañero empático y paciente que descompone tareas complejas en micro-pasos alcanzables, usando mecánicas de juego para mantener la atención y la motivación al máximo.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-brand-light hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Enfoque Corto</h3>
            <p className="text-gray-600">Misiones de tiempo ajustado (Técnica Pomodoro adaptada) para evitar la frustración y el cansancio mental.</p>
          </div>
          <div className="p-8 rounded-3xl bg-brand-light hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-3">Refuerzo Positivo</h3>
            <p className="text-gray-600">Sistema de recompensas instantáneas y medallas que celebran cada pequeño logro del día.</p>
          </div>
          <div className="p-8 rounded-3xl bg-brand-light hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-3">Guía Empática</h3>
            <p className="text-gray-600">Foli (la IA) detecta momentos de distracción y redirige la atención con amabilidad, nunca con regaños.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
