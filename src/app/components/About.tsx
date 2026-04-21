import { Code, Palette, Zap, Smartphone, Server } from 'lucide-react';
import { Card } from './ui/card';
import React from 'react';

export function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4">
            Sobre <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Mí</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Desarrollador con más de 5 años de experiencia trabajando en proyectos con el objetivo de crear soluciones seguras, de alto rendimiento y escalables para empresas de diversos sectores.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-teal-200">
              <div className="size-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <Server className="size-6 text-teal-600" />
              </div>
              <h3 className="text-xl mb-2">Desarrollo Backend</h3>
              <p className="text-gray-600">
                Experto en Java y ecosistema Spring Boot (Data, Security, etc). Cierta experiencia en Node.js
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-emerald-200">
              <div className="size-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <Code className="size-6 text-emerald-600" />
              </div>
              <h3 className="text-xl mb-2">Arquitectura</h3>
              <p className="text-gray-600">
                Experiencia en diseño monolitos modulares con transición a microservicios, arquitectura hexagonal y clean architecture. Conocimientos en arquitecturas basadas en eventos.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-cyan-200">
              <div className="size-12 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                <Palette className="size-6 text-cyan-600" />
              </div>
              <h3 className="text-xl mb-2">Desarrollo Frontend</h3>
              <p className="text-gray-600">
                +3 años de experiencia colaborando con equipos frontend utilizando herramientas como Angular y React.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-cyan-200">
              <div className="size-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <Smartphone className="size-6 text-teal-600" />
              </div>
              <h3 className="text-xl mb-2">Desarrollo Android</h3>
              <p className="text-gray-600">
                3 años de experiencia en desarrollo de aplicaciones Android con Java y Android Studio
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-cyan-200">
              <div className="size-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <Zap className="size-6 text-emerald-600" />
              </div>
              <h3 className="text-xl mb-2">Optimización</h3>
              <p className="text-gray-600">
                Enfoque en rendimiento, accesibilidad y mejores prácticas para garantizar
                aplicaciones rápidas y accesibles.
              </p>
            </Card>

          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl mb-4">Habilidades Técnicas</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Java',
                  'Spring Boot',
                  'Spring Security',
                  'Redux',
                  'Node.js',
                  'Kakfa',
                  'Angular',
                  'React',
                  'TypeScript',
                  'SQL',
                  'MongoDB',
                  'GitHub Actions',
                  'Figma',
                  'IA',
                  'Cursor',
                  'REST APIs',
                  'Microservicios',
                  'SOLID',
                  'Arquitectura Hexagonal',
          
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-4">Idiomas</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Español</span>
                    <span className="text-gray-600">Nativo</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Inglés</span>
                    <span className="text-gray-600">Avanzado</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full w-[90%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}