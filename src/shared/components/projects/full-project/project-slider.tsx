'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Carousel } from '@/shared/common';
import { CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shared/common/carousel';

interface ImageType {
  src: string;
  alt: string;
}

interface Props {
  className?: string;
  items: ImageType[];
}

export const ProjectSlider: React.FC<Props> = ({ className, items }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (api) {
      api.on('select', () => {
        const selectedSlide = api.selectedScrollSnap();
        setActiveSlide(selectedSlide);
      });
    }
  }, [api]);

  const handleThumbnailClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
      setActiveSlide(index);
    }
  };

  return (
    <div className={`h-full md:flex mb-16 gap-12 ${className}`}>
      <Carousel setApi={setApi} className="w-[80%]">
        <CarouselContent>
          {items.map((slide, index) => (
            <CarouselItem key={slide.src}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width="0"
                height="0"
                sizes="100vw"
                priority={index === activeSlide}
                className="object-contain w-full h-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="!border-white bg-transparent text-white rounded-none" />
        <CarouselNext className="!border-white bg-transparent text-white rounded-none" />
      </Carousel>

      <div className="flex md:flex-col mt-4 gap-4">
        {items.map((slide, index) => (
          <div
            key={slide.src}
            className={`cursor-pointer p-1 border ${
              index === activeSlide ? 'border-primary-200' : 'border-transparent'
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={slide.src}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={56}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
