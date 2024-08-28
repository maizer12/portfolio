import React from 'react';
import { useTranslations } from 'next-intl';
import { HTag } from '@/shared/common';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/common/Tabs';
import { Block } from './Block';
import { getExperienceTabs } from '@/shared/constants/experience.constants';
import { Icon } from '@/shared/common/Icon';
import { cilCalendar } from '@coreui/icons';
import AnimatedOnScroll from '../common/AnimatedOnScroll';

const Experience = () => {
  const t = useTranslations('experience');
  const experienceTabs = getExperienceTabs(t);

  return (
    <section className="bg-dark-700 p-3 py-16 md:p-0 md:py-24 min-h-[540px]" id="experience">
      <div className="max-w-[1220px] mx-auto w-full px-3 relative">
        <Block />
        <AnimatedOnScroll animation="left">
          <HTag tag="h2" className="mb-4">
            {t('title')}
          </HTag>
        </AnimatedOnScroll>
        <div className="md:mt-16 mt-12">
          <Tabs
            defaultValue={experienceTabs.triggers[0].value}
            orientation="vertical"
            className="md:flex gap-20 items-start w-full"
          >
            <AnimatedOnScroll animation="right">
              <TabsList className="flex md:flex-col h-auto">
                {experienceTabs.triggers.map((trigger) => (
                  <TabsTrigger
                    value={trigger.value}
                    className="block md:pl-8 py-5 tab-item bg-dark-900 border-b md:border-l-2 w-full text-center md:min-w-[240px] md:w-auto md:text-start font-bold font-inter md:text-1xl text-light-900 md:border-b-0"
                    key={trigger.value}
                  >
                    {trigger.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </AnimatedOnScroll>
            {experienceTabs.contents.map((content) => (
              <TabsContent value={content.value} className={`fadeIn p-0 w-full mt-6 md:mt-0`} key={content.company}>
                <AnimatedOnScroll>
                  <div className="justify-between items-center mb-6 md:flex">
                    <h4 className="block text-light-900 min-w-[240px] text-start font-bold font-inter text-2xl mb-4 md:m-0">
                      {content.position}
                    </h4>
                    <h5 className="text-light-400 text-start font-bold font-inter text-1xl flex items-center gap-2">
                      {content.date}
                      {/* <Icon icon={cilCalendar} className="w-6" /> */}
                    </h5>
                  </div>
                  <h5 className="block mb-6 text-primary-200 min-w-[240px] text-start font-bold font-inter text-1xl">
                    {content.company}
                  </h5>
                  <h5 className="block text-light-400 min-w-[240px] text-start font-bold font-inter text-1xl">
                    {content.desc}
                  </h5>
                  <div className="flex w-fit mt-4 ml-auto gap-2">
                    {/* {content.icons?.map((icon, index) => (
                      <Icon icon={icon} className={`iconBounce w-7 fill-light-400`} key={index} />
                    ))} */}
                  </div>
                </AnimatedOnScroll>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Experience;
