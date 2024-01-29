'use client';
import ServiceCard from '@/app/components/Services/ServiceCard';
import React from 'react';
import Title from '@/app/components/Common/Title';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslations } from 'next-intl';

const responsive = {
  desktop3Xl: {
    breakpoint: { max: 100000, min: 1601 },
    items: 4,
    paritialVisibilityGutter: 60,
  },
  desktop2Xl: {
    breakpoint: { max: 1600, min: 1537 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  desktopXl: {
    breakpoint: { max: 1536, min: 1281 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  desktopL: {
    breakpoint: { max: 1280, min: 1025 },
    items: 2,
    paritialVisibilityGutter: 60,
  },
  desktop: {
    breakpoint: { max: 1024, min: 769 },
    items: 2,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 768, min: 641 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    paritialVisibilityGutter: 0,
  },
};
const ServiceSection = (props: any) => {
  const t = useTranslations('services');
  const servicesKeys = ['service-development', 'service-architecture',
    'service-cloud', 'service-devsecops',
    'service-training', 'service-advisory'] as const;

  return (
    <section className="flex w-full flex-col pt-24">
      <Title
        title={t('title')}
        subtitle={t('subtitle')}
      />
      <div className="h-full w-full pl-10 pr-10">
        <Carousel
          className=""
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={false}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
          itemClass=""
        >
          {servicesKeys.map((key: any) => {
            return (
              <ServiceCard
                key={key}
                icon={t(`${key}.icon`)}
                serviceName={t(`${key}.title`)}
              >
                {t.rich(`${key}.content`, {
                  b: (chunks) => <b>{chunks}</b>,
                  br: (chunks) => <br/>,
                })}


              </ServiceCard>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default ServiceSection;
