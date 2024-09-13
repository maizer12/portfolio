import { Eye } from 'lucide-react';
import { prisma } from '@/prisma/prisma-client';
import { cn } from '../lib/utils';
import React from 'react';

export const Views = async ({ className }: { className?: string }) => {
  const views = await prisma.views.upsert({
    where: { id: 1 },
    update: {
      viewCount: { increment: 1 },
    },
    create: {
      viewCount: 1,
    },
  });

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 flex items-center p-4 gap-2 border-primary-200 text-white bg-dark-700 border rounded-lg shadow-lg',
        className,
      )}
    >
      <Eye />
      {views.viewCount}
    </div>
  );
};
