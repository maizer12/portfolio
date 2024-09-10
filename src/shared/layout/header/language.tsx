'use client';
import React from 'react';
import style from './header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const languages = [
  { href: 'ua', label: 'UA' },
  { href: 'en', label: 'EN' },
];

export const Language = () => {
  const pathname = usePathname();

  const getNewPath = (newLang: string) => {
    const segments = pathname.split('/').filter(Boolean);
    if (languages.some((lang) => lang.href === segments[0])) {
      segments[0] = newLang;
    } else {
      segments.unshift(newLang);
    }
    return `/${segments.join('/')}`;
  };

  return (
    <div className={style.language}>
      {languages.map((lang) => (
        <Link
          key={lang.href}
          href={getNewPath(lang.href)}
          className={pathname.startsWith(`/${lang.href}`) ? style.language__active : ''}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
};
