'use client';
import React from 'react';
import CIcon from '@coreui/icons-react';
import * as icons from '@coreui/icons';
import { cilWarning } from '@coreui/icons';

interface IProps {
  icon: string;
  className?: string;
  style?: any;
}

export const Icon = ({ icon, className = '', style = {} }: IProps) => {
  const IconComponent = (icons as any)[icon] || cilWarning;

  return <CIcon icon={IconComponent} size="xxl" className={className} style={style} />;
};
