import { ProjectWithRelations } from '@/@types/prisma';
import AnimatedOnScroll from '@/shared/common/AnimatedOnScroll';
import { HTag } from '@/shared/common/HTag';
import { Icon } from '@/shared/common/Icon';
import { cn } from '@/shared/lib/utils';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
  item: ProjectWithRelations;
}

export const ProjectCard: React.FC<Props> = ({ item, className }) => {
  const local = useLocale();

  return (
    <AnimatedOnScroll tag="li" className={className}>
      <div className="border w-full min-w-[320px] border-primary-200 bg-dark-700 p-8 h-fit fadeInSlow flex flex-col">
        <HTag tag="h5" className="mb-4">
          {item.title}
        </HTag>
        <h5 className="block text-light-400 min-w-[240px] text-start font-bold font-inter text-1xl mb-6 h-[98px]">
          {item.desc}
        </h5>
        <div className="flex items-center justify-between">
          <Link
            href={`/${local}/project/${item.id}`}
            className="text-primary-200 block mt-2 hover:text-white duration-300"
            title={`Open: ${item.title}`}
          >
            More info
          </Link>
          <div className="flex w-fit gap-3">
            {item.technologies.map((item, index) => (
              <Icon icon={item.icon} key={item.id} className={cn('w-7', item.color)} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedOnScroll>
  );
};
