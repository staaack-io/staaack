'use client';
import React, { useState } from 'react';
// @ts-ignore
import partners from '/public/data/partners.json';
import PartnerCard from '@/app/components/Partners/PartnerCard';
import PartnerChoice from '@/app/components/Partners/PartnerChoice';
import Title from '@/app/components/Common/Title';
import { useTranslations } from 'next-intl';

const PartnersSection = (props: any) => {
  const t = useTranslations('partners');
  const [listPartners, setListPartners] = useState(partners);
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <section className='flex w-full cursor-pointer flex-col items-center pt-24'>
      <div className='flex w-full items-center'>
        <Title
          title={t('title')}
          subtitle={t('subtitle')}
        />
      </div>
      <div className='default-size'>
        <PartnerChoice
          name={(category: any) => {
            setSelectedCategory(category);
          }}
        />
        <div className='-z-10 flex w-full justify-center p-8'>
          <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {listPartners.map((partner: any, index: any) => {
              return (
                <PartnerCard
                  key={index}
                  name={partner.name}
                  image={partner.image}
                  city={partner.city}
                  category={partner.category}
                  selectedSectionPartner={selectedCategory}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
