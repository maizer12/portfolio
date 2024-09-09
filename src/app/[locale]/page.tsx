import { Banner } from '../../shared/components/banner';
import Skills from '../../shared/components/skills';
import Projects from '../../shared/components/projects';
import Experience from '../../shared/components/Experience';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

interface IProps {
  searchParams: { filter: string; type: string };
}

export default function Home({ searchParams }: IProps) {
  return (
    <>
      <Banner />
      <Experience />
      <Projects />
      <Skills />
    </>
  );
}
