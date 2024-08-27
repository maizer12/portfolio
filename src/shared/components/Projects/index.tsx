'use client';
import React from 'react';
import { HTag, PTag } from '@/shared/common';
import MainButton from '@/shared/common/MainButton';
import { projectsArr } from './constants';
import { Warning } from '@/shared/common/Warning';
import { OctagonAlert } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ProjectItem from './ProjectItem';
import ProjectDropdown from './ProjectDropdown';
import AnimatedOnScroll from '../../common/AnimatedOnScroll';
import { ProjectCategories } from './project-categories';

interface IProps {
  filter?: string;
  type?: string;
}

const Projects = ({ filter, type }: IProps) => {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const t = useTranslations('projects');

  const items = projectsArr.filter((e) => {
    const filterMatch = !filter || e.technologies.some((name) => name.toUpperCase() === filter.toUpperCase());

    const typeMatch = !type || e.type.toUpperCase() === type.toUpperCase();

    return filterMatch && typeMatch;
  });

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
        {!items.length && (
          <AnimatedOnScroll>
            <PTag className="text-center min-h-[240px] flex items-center justify-center fadeInSlow">
              {t('notFound')}
            </PTag>
          </AnimatedOnScroll>
        )}
        <ul className="flex-wrap gap-6 max-w-[1224px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 w-fit justify-center">
          {items.map((e, key) => (
            <ProjectItem project={e} key={key} />
          ))}
        </ul>
        <div className="mx-auto w-fit mt-12">
          <MainButton>More Projects</MainButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
