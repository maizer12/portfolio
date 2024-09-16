'use client';
import { HTag } from '../../common';
import { Icon } from '@/shared/common/Icon';
import { useState } from 'react';
import AnimatedOnScroll from '../../common/AnimatedOnScroll';
import { useTranslations } from 'next-intl';
import { getSkills } from '@/shared/constants/skills.constants';

const Skills = () => {
  const t = useTranslations('skills');
  const defaultText = t('desc');
  const [desc, setDesc] = useState(defaultText);
  const skills = getSkills(t);

  const hoverCard = (str: string) => {
    setDesc('');
    setTimeout(() => {
      setDesc(str);
    }, 10);
  };

  return (
    <section className="bg-dark-700 py-16 md:py-32 p-3">
      <HTag tag="h2" className="text-center mb-4">
        {t('title')}
      </HTag>
      <div className="max-w-[1200px] mx-auto w-full md:flex justify-between mt-16">
        <div className="mb-8">
          <HTag tag="h5" className="mb-4">
            {t('subtitle')}
          </HTag>
          {!!desc && (
            <h5 className="block text-light-400 min-w-[240px] text-start font-bold font-inter text-1xl fadeInSlow">
              {desc}
            </h5>
          )}
        </div>
        <ul className="flex gap-7 flex-wrap max-w-[670px] w-fit justify-center">
          {skills.map((e, i) => (
            <AnimatedOnScroll key={i} tag="li">
              <div
                className="bg-dark-900 w-32 rounded-[5px] border border-dark-400 h-32 flex justify-center items-center hover:border-primary-200 transform transition-transform duration-500 hover:scale-110"
                onMouseEnter={() => hoverCard(e.desc)}
                onMouseLeave={() => hoverCard(defaultText)}
              >
                <Icon
                  icon={e.icon}
                  className="w-12 h-12 fill-primary-200 transform transition-transform duration-500 hover:fill-white hover:scale-110"
                />
              </div>
            </AnimatedOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
