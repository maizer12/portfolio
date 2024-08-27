import { HTag } from '../../common/HTag';
import Image from 'next/image';
import bannerImg from '../../../../public/bg-test.webp';
import style from './Banner.module.scss';
import { PTag } from '../../common/PTag';
import MainButton from '../../common/MainButton';
import { useTranslations } from 'next-intl';
import BannerLinks from './banner-links';
import { Icon } from '@/shared/common/Icon';
import { cilFile } from '@coreui/icons';
import { cn } from '@/shared/lib/utils';

export const Banner = () => {
  const t = useTranslations('banner');

  return (
    <section className={cn(style.banner, 'pt-18 bg-main')} id="banner">
      <div className={cn(style.content, 'max-w-[1220px] banner')}>
        <div className={cn(style.text, style.textFadeIn)}>
          <a
            href="cv.pdf"
            className="border p-2 px-3 w-fit border-primary-200 text-sm text-light-400 flex min-w-[134px] items-center gap-4 bg-dark-900 duration-500 rounded-sm ml-auto hover:border-light-400"
            target="_blank"
          >
            <Icon icon={cilFile} className="w-6" />
            {t('openCV')}
          </a>
          <div>
            <p className="text-primary-200 font-inter font-bold">Hello, I'm:</p>
            <HTag tag="h1" className="my-1" title="Full Name">
              {t('fullName')}
            </HTag>
            <p className="text-light-900 font-inter">{t('role')}</p>
          </div>
          <PTag className="mb-3 mt-[-12px]" htmlContent={t.raw('description')} title="Little text about Me!" />
          <MainButton>{t('btnText')}</MainButton>
          <BannerLinks />
        </div>
        <div className={style.imageSlideIn}>
          <Image
            src={bannerImg.src}
            className="imageSlideIn"
            width={619}
            height={567}
            alt="Developer picture"
            title="Developer picture!"
            data-twe-toggle="tooltip"
            priority
          />
        </div>
      </div>
    </section>
  );
};
