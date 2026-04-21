import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import React from 'react';

const experiences = [
  {
    id: 1,
    company: 'Accenture',
    position: 'Senior Backend Developer',
    period: 'Marzo 2023 - Presente',
    description:
      'Modernización de sistemas legacy mediante migración a Spring Boot, reduciendo deuda técnica y mejorando la mantenibilidad. Implementé autenticación basada en JWT con Spring Security y reforcé la observabilidad mediante mejoras en logging y trazabilidad, facilitando la detección de incidencias y reduciendo tiempos de diagnóstico.\n '+
      'Evoluciné módulos de un monolito modular hacia microservicios, mejorando la escalabilidad del sistema y permitiendo despliegues independientes, mayor resiliencia y desacoplamiento entre dominios.\n'+
      ' Participé en tareas de front elaborando interfaces de usuario pixel-perfect',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'Spring Security', 'logging', 'JWT', 'GitHub', 'Angular', 'TypeScript'],
  },
  {
    id: 2,
    company: 'CompuGroup Medical',
    position: 'Full Stack Developer',
    period: 'Marzo 2021 - Marzo 2023',
    description:
      'Participé en la migración de una aplicación legacy a Spring Boot reduciendo deuda técnica y mejorando la mantenibilidad. Reforcé la observabilidad mediante mejoras en logging y trazabilidad, facilitando la detección de incidencias y reduciendo tiempos de diagnóstico.',
    technologies: ['Java', 'Spring Boot', 'GIT', 'REST APIs', 'React', 'Javascript'],
  },
  {
    id: 3,
    company: 'AireNetworks',
    position: 'Android Developer',
    period: 'Febrero 2018 - Febrero 2021',
    description:
      'Desarrollo del frontend de una aplicación Android multiplataforma (smartphone y tablet), optimizando la experiencia de usuario mediante interfaces adaptativas y asegurando rendimiento y estabilidad en distintos dispositivos.',
    technologies: ['Java', 'Android Studio', 'React Native'],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4">
            Experiencia{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Profesional
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Mi trayectoria profesional en el desarrollo web
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-600 to-teal-600 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative ${
                    index % 2 === 0 ? 'md:pr-1/2 md:pr-8' : 'md:pl-1/2 md:pl-8'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 size-4 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full -translate-x-1/2 hidden md:block"></div>

                  <Card className="p-6 hover:shadow-xl transition-all border-2 hover:border-emerald-200">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="size-10 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center shrink-0">
                        <Briefcase className="size-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl mb-1">{exp.position}</h3>
                        <p className="text-emerald-600">{exp.company}</p>
                        <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                          <Calendar className="size-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm border border-emerald-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}