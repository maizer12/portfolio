'use client';
import React from 'react';
import * as icon from '@coreui/icons';
import CIcon from '@coreui/icons-react';

export const Block = () => {
  return (
    <div className="right-0 absolute flex gap-2">
      <CIcon icon={icon.cibReact} size="xxl" className="fill-primary-200  w-8 animate-[spin_3s_linear_infinite]" />
      <CIcon icon={icon.cibVueJs} size="xxl" className="fill-primary-200  w-8 animate-pulse" />
      <CIcon icon={icon.cibJs} size="xxl" className="fill-primary-200  w-8 animate-pulse" />
    </div>
  );
};
