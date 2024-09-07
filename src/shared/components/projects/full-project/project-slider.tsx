'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import projectImg from '../../../../../public/projects/inventory/1.png';
import { Carousel } from '@/shared/common';
import { CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shared/common/carousel';

interface Props {
  className?: string;
}

export const ProjectSlider: React.FC<Props> = ({ className }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  const slides = [
    { id: 1, src: projectImg, alt: 'Project Image 1' },
    { id: 2, src: projectImg, alt: 'Project Image 2' },
    { id: 3, src: projectImg, alt: 'Project Image 3' },
  ];

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
    <div className={`w-auto mx-auto h-hull flex mb-24 gap-12 ${className}`}>
      <Carousel setApi={setApi} className="w-[80%]">
        <CarouselContent className="w-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <Image src={slide.src} alt={slide.alt} sizes="auto" priority={index === activeSlide} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="!border-white bg-transparent text-white rounded-none" />
        <CarouselNext className="!border-white bg-transparent text-white rounded-none" />
      </Carousel>

      <div className="flex flex-col mt-4 gap-4">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
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
              className=" w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
