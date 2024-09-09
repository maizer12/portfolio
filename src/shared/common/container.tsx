import React from 'react';
import { cn } from '../lib/utils';

interface Props {
  className?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md';
}

export const Container: React.FC<Props> = React.memo(({ className, children, size = 'md' }) => {
  const sizeClasses = {
    sm: 'max-w-[1120px]',
    md: 'max-w-[1200px]',
  };

  return <div className={cn('mx-auto w-full px-2.5', sizeClasses[size], className)}>{children}</div>;
});
