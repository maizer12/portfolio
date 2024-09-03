'use client';
import React, { useEffect } from 'react';
import { HTag, PTag } from '@/shared/common';
import MainButton from '@/shared/common/MainButton';
import { Warning } from '@/shared/common/Warning';
import { OctagonAlert } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ProjectDropdown from './ProjectDropdown';
import AnimatedOnScroll from '../../common/AnimatedOnScroll';
import { ProjectCategories } from './project-categories';
import { getProjects } from '@/shared/services/projects';
import { ProjectCard } from './project-card';
import { ProjectWithRelations } from '@/@types/prisma';
import { ProjectList } from './project-list';

interface IProps {
  filter?: string;
  type?: string;
}

const Projects = ({ filter, type }: IProps) => {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const t = useTranslations('projects');
  const [visibleProjects, setVisibleProjects] = React.useState(6);

  const [loading, setLoading] = React.useState(false);
  const [projects, setProjects] = React.useState<ProjectWithRelations[]>([]);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await getProjects(activeCategory);
        setProjects(res);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [activeCategory]);

  return (
    <section className="py-32 bg-main" id="projects">
      <div className="container relative z-2">
        <div className="mb-16 max-w-[1324px] mx-auto">
          <div className="flex justify-between  mx-auto mb-12">
            <HTag tag="h2" className="text-center">
              {t('title')}
            </HTag>
            <ProjectDropdown />
          </div>
          <AnimatedOnScroll animation="left">
            <Warning className="mb-7">
              <OctagonAlert className="inline mr-2" />
              {t('warning')}
            </Warning>
          </AnimatedOnScroll>
          <ProjectCategories activeId={activeCategory} setActiveId={setActiveCategory} />
        </div>
        <ProjectList projects={projects.slice(0, visibleProjects)} isLoading={loading} />
        {visibleProjects < projects.length && (
          <div className="mx-auto w-fit mt-12">
            <MainButton onClick={loadMoreProjects}>More Projects</MainButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
