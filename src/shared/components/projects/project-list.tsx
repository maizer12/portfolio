import { ProjectWithRelations } from '@/@types/prisma';
import { cn } from '@/shared/lib/utils';
import React from 'react';
import { ProjectCard } from './project-card';
import { motion, AnimatePresence } from 'framer-motion';
import { PTag, Skeleton } from '@/shared/common';
import { useTranslations } from 'next-intl';

interface Props {
  className?: string;
  isLoading: boolean;
  projects: ProjectWithRelations[];
}

export const ProjectList: React.FC<Props> = ({ className, isLoading, projects }) => {
  const t = useTranslations('projects');

  const skeletonVariants = {
    hidden: { opacity: 0, transition: { duration: 0.5 } },
    visible: { opacity: 1 },
  };

  return (
    <ul
      className={cn(
        'flex-wrap gap-6 max-w-[1224px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 w-fit justify-center grid-cols-1 min-w-full justify-items-center',
        className,
      )}
    >
      <AnimatePresence>
        {isLoading && (
          <>
            {[...new Array(6)].map((e, i) => (
              <motion.li
                key={i}
                initial="visible"
                animate="visible"
                exit="hidden"
                variants={skeletonVariants}
                className="max-w-[375px] flex-1 w-full"
              >
                <Skeleton className="w-full h-[263px] !bg-slate-100 animate-pulse rounded-lg border border-slate-200" />
              </motion.li>
            ))}
          </>
        )}
      </AnimatePresence>

      {!isLoading && projects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="full-grid"
        >
          <PTag className="text-center min-h-[240px] flex items-center justify-center">{t('notFound')}</PTag>
        </motion.div>
      )}

      {!isLoading && projects.length > 0 && projects.map((e) => <ProjectCard item={e} key={e.id} />)}
    </ul>
  );
};
