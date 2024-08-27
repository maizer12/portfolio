'use client';
import React from 'react';

const BurgerButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button
      className="absolute right-4 top-4 flex flex-col items-center justify-center w-12 h-12 z-10 md:hidden"
      name="Burger button"
      title="Burger button"
      onClick={onClick}
    >
      <span
        className={`absolute block w-8 h-0.5 transition-transform duration-300 ease-in-out ${
          isOpen ? 'bg-black transform rotate-45' : 'bg-white -translate-y-2.5'
        }`}
      ></span>
      <span
        className={`absolute block w-8 h-0.5 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'bg-black opacity-0' : 'bg-white opacity-100'
        }`}
      ></span>
      <span
        className={`absolute block w-8 h-0.5 transition-transform duration-300 ease-in-out ${
          isOpen ? 'bg-black transform -rotate-45' : 'bg-white translate-y-2.5'
        }`}
      ></span>
    </button>
  );
};

export default BurgerButton;
