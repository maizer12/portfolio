import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className?: string;
}

export const Warning = ({ className = '', children }: IProps) => {
  return <div className={'bg-dark-900 p-4 text-light-900 border border-primary-700 ' + className}>{children}</div>;
};
