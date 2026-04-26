import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import React from 'react';
import type { Language } from '@/context/LanguageContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            {t('header.title')}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {t('header.nav.inicio')}
            </button>
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {t('header.nav.sobreMi')}
            </button>
            <button
              onClick={() => scrollToSection('experiencia')}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {t('header.nav.experiencia')}
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {t('header.nav.proyectos')}
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {t('header.nav.contacto')}
            </button>
          </nav>

          {/* Language Selector + Social Links */}
          <div className="hidden md:flex items-center gap-3">
            <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/tonyrmz1" target="_blank" rel="noopener noreferrer">
                <Github className="size-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/antonio-marín-belmonte-9a8462120" target="_blank" rel="noopener noreferrer">
                <Linkedin className="size-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:antonio.marin.belmonte@gmail.com">
                <Mail className="size-5" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-emerald-600 transition-colors text-left"
            >
              {t('header.nav.inicio')}
            </button>
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="text-gray-700 hover:text-emerald-600 transition-colors text-left"
            >
              {t('header.nav.sobreMi')}
            </button>
            <button
              onClick={() => scrollToSection('experiencia')}
              className="text-gray-700 hover:text-emerald-600 transition-colors text-left"
            >
              {t('header.nav.experiencia')}
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="text-gray-700 hover:text-emerald-600 transition-colors text-left"
            >
              {t('header.nav.proyectos')}
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-emerald-600 transition-colors text-left"
            >
              {t('header.nav.contacto')}
            </button>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
                <SelectTrigger className="w-full mb-4">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/tonyrmz1" target="_blank" rel="noopener noreferrer">
                  <Github className="size-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/antonio-marín-belmonte-9a8462120" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="size-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:antonio.marin.belmonte@gmail.com">
                  <Mail className="size-5" />
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}