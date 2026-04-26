import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { useTranslation } from '../../hooks/useTranslation';
import data from '../../data';
import React from 'react';

export function Experience() {
  const { language, t } = useTranslation();
  const experiences = data[language].experiences;

  return (
    <section id="experiencia" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4">
            {t('experience.title1')}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {t('experience.title2')}
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            {t('experience.subtitle')}
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

                    <p className="text-gray-600 mb-4 whitespace-pre-line">{exp.description}</p>

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