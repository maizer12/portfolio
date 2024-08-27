import React from 'react';
import style from './header.module.scss';
import { Link, usePathname } from '../../../navigation';
import { useMenu } from '../../hooks';

export const Menu = () => {
  const path = usePathname();
  const menu = useMenu();

  return (
    <ul className="md:flex mt-8 md:gap-5 md:mt-0">
      {menu.map((e) => (
        <li className={e.url === path ? style.active : ''} key={e.id}>
          <Link href={e.url} className={style.menu__link + ' text-dark-900 mb-2 block text-xl md:mb-0 '}>
            {e.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
