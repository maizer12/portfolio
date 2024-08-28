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

  return (
    <section className="py-32 bg-main" id="projects">
      <div className="container relative z-2">
        <div className="mb-16 max-w-[1324px] mx-auto">
          <div className="flex justify-between  mx-auto mb-12">
            <HTag tag="h2" className="text-center">
              {t('title')}
            </HTag>
            <ProjectDropdown filter={filter || ''} />
          </div>
          <AnimatedOnScroll animation="left">
            <Warning className="mb-7">
              <OctagonAlert className="inline mr-2" />
              {t('warning')}
            </Warning>
          </AnimatedOnScroll>
          <ProjectCategories activeId={activeCategory} setActiveId={setActiveCategory} />
        </div>
        <ProjectList />
        <div className="mx-auto w-fit mt-12">
          <MainButton>More Projects</MainButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
