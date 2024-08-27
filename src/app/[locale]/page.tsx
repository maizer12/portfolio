import { Banner } from '../../shared/components/banner';
import Skills from '../../shared/components/Skills';
import Projects from '../../shared/components/Projects';
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
      <Projects filter={searchParams.filter} type={searchParams.type} />
      <Skills />
    </>
  );
}
