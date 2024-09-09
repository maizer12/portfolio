'use client';
import React, { useEffect, useRef } from 'react';
import { Icon } from '../common/Icon';
import { ChevronDown } from 'lucide-react';

interface IProps {
  label: string;
  text?: string;
  children: React.ReactNode;
  icon: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

function Dropdown({ children, label, text, icon, isOpen, setIsOpen }: IProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        className="text-light-900 p-2.5 text-[16px] bg-dark-700 min-w-[144px] border-primary-200 border flex items-center gap-3 justify-center w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon && <Icon icon={icon} className="w-6 fill-primary-200" />}
        <p className="font-normal text-[14px]">{text}</p>
        {label}
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>
      <div
        className={`absolute left-0 mt-2 w-full bg-dark-700 border border-primary-200 rounded transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
        }`}
        style={{ overflow: isOpen ? 'visible' : 'hidden' }}
      >
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
