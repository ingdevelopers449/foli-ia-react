import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-brand-light overflow-hidden">
      <Header />
      
      <main className="pt-20">
        <Hero />
        <About />
        <Features />
      </main>

      <footer className="bg-brand-dark text-white py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">¿Listo para la aventura?</h3>
        <p className="mb-6 max-w-xl mx-auto opacity-80">Únete a FOLI AI y transforma las tareas en misiones divertidas y adaptadas para tu pequeño héroe.</p>
        <button className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-500 transition transform hover:scale-105">
          Comenzar Prueba Gratis
        </button>
        <div className="mt-8 text-sm opacity-50">© 2026 FOLI AI. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}

export default App;
