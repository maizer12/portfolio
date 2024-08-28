import { ProjectWithRelations } from '@/@types/prisma';
import { cn } from '@/shared/lib/utils';
import { getProjects } from '@/shared/services/projects';
import React from 'react';
import { ProjectCard } from './project-card';
import AnimatedOnScroll from '@/shared/common/AnimatedOnScroll';
import { PTag, Skeleton } from '@/shared/common';
import { useTranslations } from 'next-intl';

interface Props {
  className?: string;
}

export const ProjectList: React.FC<Props> = ({ className }) => {
  const t = useTranslations('projects');
  const [loading, setLoading] = React.useState(false);
  const [projects, setProjects] = React.useState<ProjectWithRelations[]>([]);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await getProjects();
        setProjects(res);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <ul
        className={cn(
          'flex-wrap gap-6 max-w-[1224px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 w-fit justify-center',
          className,
        )}
      >
        {[...new Array(6)].map((e, i) => (
          <Skeleton
            className="w-[395px] h-[263px] !bg-slate-100 animate-pulse rounded-lg border border-slate-200"
            key={i}
          />
        ))}
      </ul>
    );
  }

  if (!loading && projects.length === 0) {
    return (
      !projects.length && (
        <AnimatedOnScroll>
          <PTag className="text-center min-h-[240px] flex items-center justify-center fadeInSlow">{t('notFound')}</PTag>
        </AnimatedOnScroll>
      )
    );
  }

  return (
    <ul
      className={cn(
        'flex-wrap gap-6 max-w-[1224px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 w-fit justify-center',
        className,
      )}
    >
      {projects.length > 0 && projects.map((e, key) => <ProjectCard item={e} key={e.id} />)}
    </ul>
  );
};
