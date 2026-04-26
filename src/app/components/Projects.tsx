import { ExternalLink, Github, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useTranslation } from '../../hooks/useTranslation';
import data from '../../data';
import React from 'react';

export function Projects() {
  const { language, t } = useTranslation();
  const projects = data[language].projects;

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4">
            {t('projects.title1')}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {t('projects.title2')}
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            {t('projects.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="p-6 hover:shadow-xl transition-all border-2 hover:border-emerald-200 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="size-12 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                    <Github className="size-6 text-emerald-600" />
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="size-3 fill-yellow-400 text-yellow-400" />
                    {project.stars}
                  </Badge>
                </div>

                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs border border-emerald-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="size-4" />
                      {t('projects.buttons.code')}
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="size-4" />
                      {t('projects.buttons.demo')}
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/tonyrmz1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="size-5" />
                {t('projects.viewAll')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}