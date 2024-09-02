'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../common/Icon';
import { SelectItemType } from '@/shared/models/SelectItem.type';
import useUpdateQueryParams from '@/shared/lib/updateQueryParams';

interface IProps {
  chose: string;
  onChange: (a: string) => void;
  items: SelectItemType[];
}

const defaultSelect = { value: '', label: 'All', icon: 'cibCodeClimate' };

function Dropdown({ chose, items, onChange }: IProps) {
  const [selectedItem, setSelectedItem] = useState(items.find((e) => e.value === chose) || defaultSelect);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const updateQueryParams = useUpdateQueryParams();

  const handleSelect = (option: SelectItemType) => {
    setSelectedItem(option);
    setIsOpen(false);
    onChange(option.value);
  };

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
  }, []);

  return (
    <div ref={dropdownRef}>
      <button
        className="text-light-900 p-2.5 text-[16px] bg-dark-700 min-w-[144px] border-primary-200 border flex items-center gap-3 justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem.label} <Icon icon={selectedItem.icon} className="w-6 fill-primary-200" />
      </button>
      {isOpen && (
        <ul className="absolute bg-dark-700 border border-primary-200 mt-2 min-w-[180px] gap-10 max-h-[220px] overflow-auto">
          {items.map((option, index) => (
            <li
              key={index}
              className={`hover:bg-dark-500 cursor-pointer flex text-light-900 justify-between p-4 py-2 fill-primary-200 
              ${option.value === selectedItem.value ? ' bg-primary-700 fill-light-900' : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
              {!!option.icon && <Icon icon={option.icon} className={`w-6 ${option.fill}`} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
