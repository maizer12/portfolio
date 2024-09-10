import { prisma } from '@/prisma/prisma-client';
import { BackButton, Container, HTag } from '@/shared/common';
import { Icon } from '@/shared/common/Icon';
import MainButton from '@/shared/common/MainButton';
import { ProjectDesc, ProjectSlider } from '@/shared/components';
import { DescItem } from '@/shared/components/projects/full-project/project-desc';
import { ExternalLink } from 'lucide-react';

export default async function Project({ params: { id } }: { params: { id: string } }) {
  const data = await prisma.project.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      technologies: {
        include: {
          technology: true,
        },
      },
      details: true,
    },
  });

  if (!data) return <div>No data</div>;

  let descItems: DescItem[] = [];

  if (typeof data.details?.desc === 'string') {
    try {
      descItems = JSON.parse(data.details.desc) as DescItem[];
    } catch (error) {
      console.error('Failed to parse desc:', error);
    }
  }

  const images = data.details?.imageUrl.map((img, ind) => {
    return { src: img, alt: `data.title ${ind}` };
  });

  const icons = data.technologies.map(({ technology }) => technology);

  return (
    <section className="py-6 bg-main flex justify-center items-center min-h-screen px-2">
      <Container className="px-8 banner">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-primary-200 font-inter font-bold">Full Stack Project:</p>
            <HTag tag="h1">{data.title}</HTag>
          </div>
          <div className="flex flex-col items-end">
            <BackButton />
            <div className="flex gap-4">
              {icons.map(({ icon, color }, index) => (
                <Icon key={index} icon={icon} className={`w-8 ${color}`} />
              ))}
            </div>
          </div>
        </div>
        {images && <ProjectSlider items={images} />}
        <div className="flex gap-4 mb-12">
          <MainButton className="min-w-[114px]">
            <ExternalLink /> Visit
          </MainButton>
          <a className="border w-11 h-11 flex justify-center items-center border-primary-700 bg-dark-900 hover:border-light-400 fill-primary-200 hover:fill-light-400 duration-300 cursor-pointer">
            <Icon icon={'cibGit'} />
          </a>
        </div>
        <HTag tag="h5" className="mb-4">
          Description:
        </HTag>
        {descItems && <ProjectDesc items={descItems} />}
      </Container>
    </section>
  );
}
