import { Heart } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import React from 'react';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-gray-400">
            {t('footer.madeWith')} <Heart className="size-4 fill-red-500 text-red-500" /> {t('footer.by')} © {currentYear}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {t('footer.tech')}
          </p>
        </div>
      </div>
    </footer>
  );
}
