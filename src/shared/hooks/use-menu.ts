import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

export const useMenu = () => {
  const t = useTranslations('menu');

  const menu = useMemo(
    () => [
      {
        id: 1,
        title: t('home'),
        url: '/',
      },
      {
        id: 2,
        title: t('experience'),
        url: '#experience',
      },
      {
        id: 3,
        title: t('projects'),
        url: '#projects',
      },
      {
        id: 4,
        title: t('aboutMe'),
        url: '#banner',
      },
    ],
    [t],
  );

  return menu;
};
