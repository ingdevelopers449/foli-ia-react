import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-brand-blue/5 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-dark">Explora las Misiones</h2>
          <p className="text-xl text-gray-600">Herramientas diseñadas pensando en cómo funciona su cerebro.</p>
        </div>

        <div className="space-y-12">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-40 h-40 bg-brand-orange/20 rounded-full flex items-center justify-center text-6xl shadow-inner">
                🎮
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-brand-orange mb-3">Gamificación del Estudio</h3>
              <p className="text-gray-700 text-lg">
                Las matemáticas y la lectura se transforman en niveles por superar. Ganar puntos de experiencia (XP) y desbloquear accesorios para Foli hace que completar las tareas sea irresistible.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-40 h-40 bg-brand-blue/20 rounded-full flex items-center justify-center text-6xl shadow-inner">
                🧘‍♂️
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-brand-blue mb-3">Pausas Activas Inteligentes</h3>
              <p className="text-gray-700 text-lg">
                Foli sabe cuándo es momento de parar. A través de IA, detecta fatiga y propone pausas activas: ejercicios de respiración cortos o estiramientos divertidos antes de continuar.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-40 h-40 bg-brand-green/20 rounded-full flex items-center justify-center text-6xl shadow-inner">
                📊
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-brand-green mb-3">Reportes para Padres</h3>
              <p className="text-gray-700 text-lg">
                Mientras ellos juegan y aprenden, tú recibes información valiosa. Monitorea su progreso, áreas de mejora y los mejores horarios de enfoque sin tener que estar encima de ellos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
