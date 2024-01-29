'use client';

import React, { useEffect } from 'react';
import AboutMiniLayout from '@/app/components/Home/AboutMiniLayout';
import Tag from '@/app/components/Common/Tag';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const HomeSection = (props: any) => {
  const t = useTranslations('home');
  const tc = useTranslations('common');
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      delay: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemStaaack = {
    hidden: { y: -20, opacity: 1 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const itemP = {
    hidden: { x: -20, opacity: 1 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="home"
      className="flex items-center justify-center bg-[#EDEEF0] pt-28"
    >
      <div className="default-size z-0 grid grid-cols-12 gap-5 gap-y-12 pt-24 lg:pt-0">
        <div className="col-span-12 flex flex-col justify-center gap-5 p-5 sm:p-0 lg:col-span-4 xl:col-span-5">
          <motion.div
            className="text-[4rem]"
            animate={itemStaaack.visible}
            initial={itemStaaack.hidden}
          >
            <h1
              className="font-shadow-logo font-logo absolute inline-block bg-clip-text font-extrabold text-transparent">
              staaack
            </h1>
            <h1
              className="font-color-logo font-logo absolute inline-block bg-clip-text font-extrabold text-transparent">
              staaack
            </h1>
          </motion.div>
          <motion.div animate={itemP.visible} initial={itemP.hidden}>
            <h2 className="pt-24 font-sans text-3xl text-black">
              {tc.rich('catchphrase', {
                p: (chunks) => <p>{chunks}</p>
              })}

            </h2>
          </motion.div>
          <motion.div
            className="mt-2 flex flex-wrap gap-5"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <Tag borderColor="#FE05C288" tagName="fullstack"></Tag>
            <Tag borderColor="#FF137888" tagName="architecture"></Tag>
            <Tag borderColor="#C600B088" tagName="devops"></Tag>
            <Tag borderColor="#6711C588" tagName="cloud"></Tag>
            <Tag borderColor="#54A4FF88" tagName="training"></Tag>
            <Tag borderColor="#29D9FF88" tagName="advice"></Tag>
          </motion.div>
        </div>
        <div className="col-span-12 h-full w-full p-5 lg:col-span-8 xl:col-span-7">
          <AboutMiniLayout locale={props.locale}/>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
