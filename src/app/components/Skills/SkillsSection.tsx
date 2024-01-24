'use client';
import React, { useState } from 'react';
// @ts-ignore
import skills from '/public/data/skills.json';
import Hexagon from '@/app/components/Skills/hexagon/Hexagon';
import Image from 'next/image';
import Title from '@/app/components/Common/Title';
import SkillChoice from '@/app/components/Skills/hexagon/SkillChoice';

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <section className='flex flex-col items-center justify-center pt-10'>
      <div className='flex w-full items-center'>
        <Title
          title='Skills'
          subtitle='All the technologies I have had the chance to work with.'
        />
      </div>
      <div className='default-size'>
        <SkillChoice
          name={(category: any) => {
            setSelectedCategory(category);
          }}
        />
        <ul className='hex-grid__list'>
          {skills.map((skill: any, index: any) => (
            <Hexagon
              key={index}
              color={skill.color}
              category={skill.category}
              selectedSkillCategory={selectedCategory}
            >
              <Image
                priority={true}
                src={'/img/logo/' + skill.img}
                height={100}
                width={100}
                alt={skill.title}
              ></Image>
            </Hexagon>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;
