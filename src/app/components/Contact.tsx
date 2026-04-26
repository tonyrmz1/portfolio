import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useTranslation } from '@/hooks/useTranslation';
import React from 'react';

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4">
            {t('contact.title')}{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Juntos
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            {t('contact.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Mail className="size-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">{t('contact.email')}</h3>
                  <a
                    href="mailto:antonio.marinbelmonte@gmail.com"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    antonio.marinbelmonte@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                  <Phone className="size-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">{t('contact.phone')}</h3>
                  <a
                    href="tel:+34687178842"
                    className="text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    +34 687178842
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                  <MapPin className="size-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">{t('contact.location')}</h3>
                  <p className="text-gray-600">{t('contact.location_value')}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Linkedin className="size-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">{t('contact.linkedin')}</h3>
                  <a
                    href="https://www.linkedin.com/in/antonio-marín-belmonte-9a8462120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    www.linkedin.com/in/antonio-marín-belmonte
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              {t('contact.findMe')}
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/tonyrmz1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="size-5" />
                  {t('contact.github')}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/antonio-marín-belmonte-9a8462120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="size-5" />
                  {t('contact.linkedin')}
                </a>
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700" asChild>
                <a href="mailto:antonio.marinbelmonte@gmail.com" className="flex items-center gap-2">
                  <Mail className="size-5" />
                  {t('contact.buttons.sendEmail')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}