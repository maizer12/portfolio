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
  const check = (lan: string) => pathname.search(lan) >= 0;

  return (
    <div className={style.language}>
      {languages.map((lang) => (
        <Link key={lang.href} href={lang.href} className={check(lang.href) ? style.language__active : ''}>
          {lang.label}
        </Link>
      ))}
    </div>
  );
};
