'use client';
import React from 'react';
import MainButton from './MainButton';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '../lib/utils';

interface Props {
  className?: string;
}

export const BackButton: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <MainButton className={cn('md:mb-6', className)} onClick={goBack}>
      <ArrowLeft /> Go Back
    </MainButton>
  );
};
