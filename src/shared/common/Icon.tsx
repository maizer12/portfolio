'use client';
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { FaExclamationTriangle } from 'react-icons/fa'; // Иконка по умолчанию

interface IProps {
  icon: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon = ({ icon, className = '', style = {} }: IProps) => {
  const IconComponent = (FaIcons as any)[icon] || (SiIcons as any)[icon] || FaExclamationTriangle;

  return <IconComponent className={className} style={style} />;
};
