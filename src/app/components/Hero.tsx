import { ArrowDown, Download } from 'lucide-react';
import { Button } from './ui/button';
import React from 'react';

export function Hero() {
  const scrollToNextSection = () => {
    const element = document.getElementById('sobre-mi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"></div>
      
      {/* Animated Circles */}
      <div className="absolute top-20 left-10 size-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 size-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8 inline-block">
            <div className="size-32 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 p-1">
              <div className="size-full rounded-full bg-white flex items-center justify-center text-4xl">
                👨‍💻
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6">
            Hola, soy{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Antonio
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Desarrollador Backend
          </p>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Cuento con 5+ años de experiencia en sistemas distribuidos de alta disponibilidad. Especializado en Java y Spring Boot, con foco en rendimiento, escalabilidad y calidad de código.
Experiencia en diseño arquitectónico aplicando arquitectura hexagonal y event-driven architecture, utilizando Kafka para construir sistemas desacoplados y resilientes.
Cuento con visión end-to-end gracias a mi experiencia en frontend con TypeScript, facilitando decisiones técnicas alineadas con producto.
Actualmente enfocado en evolucionar hacia roles de Software Architect, con especial interés en la integración de inteligencia artificial en sistemas distribuidos.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => scrollToSection('contacto')} className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
              <a href="#contacto" className="flex items-center gap-2">
                Contáctame
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <Download className="size-4 mr-2" />
              Descargar CV
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNextSection}
            className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ArrowDown className="size-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
}