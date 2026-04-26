import { Code, Palette, Zap, Smartphone, Server } from 'lucide-react';
import { Card } from './ui/card';
import { useTranslation } from '../../hooks/useTranslation';
import React from 'react';

const aboutCards = [
  { icon: Server, colorBg: 'bg-teal-100', colorIcon: 'text-teal-600', key: 'backend' },
  { icon: Code, colorBg: 'bg-emerald-100', colorIcon: 'text-emerald-600', key: 'architecture' },
  { icon: Palette, colorBg: 'bg-cyan-100', colorIcon: 'text-cyan-600', key: 'frontend' },
  { icon: Smartphone, colorBg: 'bg-teal-100', colorIcon: 'text-teal-600', key: 'android' },
  { icon: Zap, colorBg: 'bg-emerald-100', colorIcon: 'text-emerald-600', key: 'optimization' },
];

export function About() {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4">
            {t('about.title1')}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
             {t('about.title2')}
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('about.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {aboutCards.map((card) => {
              const Icon = card.icon;
              const borderColor = card.colorBg.replace('100', '200').replace('bg-', 'border-');
              return (
                <Card key={card.key} className={`p-6 hover:shadow-lg transition-shadow border-2 hover:${borderColor}`}>
                  <div className={`size-12 rounded-full ${card.colorBg} flex items-center justify-center mb-4`}>
                    <Icon className={`size-6 ${card.colorIcon}`} />
                  </div>
                  <h3 className="text-xl mb-2">{t(`about.sections.${card.key}.title`)}</h3>
                  <p className="text-gray-600">
                    {t(`about.sections.${card.key}.description`)}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl mb-4">{t('about.skills.technicalSkills')}</h3>
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
              <h3 className="text-2xl mb-4">{t('about.skills.languages')}</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>{t('about.languages.spanish')}</span>
                    <span className="text-gray-600">{t('about.languages.spanishLevel')}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>{t('about.languages.english')}</span>
                    <span className="text-gray-600">{t('about.languages.englishLevel')}</span>
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