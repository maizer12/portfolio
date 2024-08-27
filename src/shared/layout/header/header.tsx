'use client';
import { useState } from 'react';
import style from './header.module.scss';
import { Link } from '../../../navigation';
import Image from 'next/image';
import BurgerButton from './burger-button';
import { Menu } from './menu';
import { Language } from './language';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-2 bg-dark-900 fixed top-0 w-full z-40">
      <div className="flex items-center justify-between container">
        <h2 className={style.logo}>
          <Link href="/">
            <Image src="/logo.png" width={60} height={60} alt="logo" />
          </Link>
        </h2>
        <BurgerButton onClick={toggleMenu} isOpen={isMenuOpen} />

        <nav
          className={`fixed inset-0 bg-black/60 w-screen h-screen md:h-auto transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:static md:bg-transparent md:translate-x-0`}
          onClick={toggleMenu}
        >
          <div className="bg-light-900 p-10 w-[75%] h-full ml-auto md:w-fit md:h-auto md:bg-transparent md:p-0 md:flex md:items-center md:gap-8">
            <Menu />
            <div className="mt-8 md:mt-0 md:ml-4">
              <Language />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
