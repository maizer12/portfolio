import { ProjectWithRelations } from '@/@types/prisma';
import AnimatedOnScroll from '@/shared/common/AnimatedOnScroll';
import { HTag } from '@/shared/common/HTag';
import { Icon } from '@/shared/common/Icon';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
  item: ProjectWithRelations;
}

export const ProjectCard: React.FC<Props> = ({ item, className }) => {
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
          <Link href={'/projects/' + item.id} className="text-primary-200 block mt-2" title={item.title}>
            More info
          </Link>
          <div className="flex w-fit gap-3">
            {item.icons.map((item, index) => (
              <Icon icon={item.icon} key={item.id} className={cn('w-8', item.fill)} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedOnScroll>
  );
};
