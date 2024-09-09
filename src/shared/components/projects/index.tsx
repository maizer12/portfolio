'use client';
import React from 'react';
import { Container, HTag } from '@/shared/common';
import MainButton from '@/shared/common/MainButton';
import { Warning } from '@/shared/common/Warning';
import { OctagonAlert } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ProjectDropdown from './ProjectDropdown';
import AnimatedOnScroll from '../../common/AnimatedOnScroll';
import { ProjectCategories } from './project-categories';
import { getProjects } from '@/shared/services/projects';
import { ProjectWithRelations } from '@/@types/prisma';
import { ProjectList } from './project-list';

const Projects = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activeTechnologies, setActiveTechnologies] = React.useState(0);

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
        const res = await getProjects(activeCategory, activeTechnologies);
        setProjects(res);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [activeCategory, activeTechnologies]);

  return (
    <section className="py-32 bg-main" id="projects">
      <Container className="relative z-2">
        <div className="mb-16 max-w-[1324px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 justify-between  mx-auto mb-12">
            <HTag tag="h2" className="text-center">
              {t('title')}
            </HTag>
            <ProjectDropdown activeTechnologies={activeTechnologies} setActiveTechnologies={setActiveTechnologies} />
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
      </Container>
    </section>
  );
};

export default Projects;
