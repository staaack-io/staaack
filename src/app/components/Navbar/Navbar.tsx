'use client';
import Image from 'next/image';
import ButtonStylised from '@/app/components/Home/ButtonStylised';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Sling as Hamburger } from 'hamburger-react';
import LanguageChanger from '@/app/components/Common/LanguageChanger';
import { useTranslations } from 'next-intl';

const Navbar = (props: any) => {
  const t = useTranslations('common.menu');
  const [mobileToggleMenu, setMobileToggleMenu] = useState(false);
  const controlMenu = useAnimation();
  const controlLogo = useAnimation();

  const variantLogo = {
    visible: {
      rotate: 360,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
      },
    },
    loop: {
      rotate: [0, 360, 0],
      scale: [1, 2, 1],
      transition: {
        duration: 1,
        delay: 3,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  const variantParentMenu = {
    hidden: {
      opacity: 1,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    end: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const variantMenu = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    if (props.showAnim) {
      let promise = new Promise(async (resolve, reject) => {
        await controlMenu.start('visible');
        await controlLogo.start('visible');
      });
    }
  }, [props.showAnim, controlMenu, controlLogo]);

  return (
    <nav className='fixed top-0 z-40 h-16 w-full bg-white p-8 md:bg-opacity-30 md:backdrop-blur-2xl'>
      <div className='flex h-full items-center justify-between '>
        <motion.div
          className='flex content-center items-center gap-5'
          variants={variantLogo}
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
        >
          <Image
            src='/img/logo.png'
            alt='Logo staaack'
            height={40}
            width={27}
          />
        </motion.div>
        <motion.ul
          className="hidden justify-end gap-5 font-semibold lg:flex items-center"
          variants={variantParentMenu}
        >
          <motion.li variants={variantMenu}>
            <div>
              <a href="/#home">
                <div className="hover:font-color-logo text-black">{t('home')}</div>
              </a>
            </div>
          </motion.li>
          <motion.li variants={variantMenu}>/</motion.li>
          <motion.li variants={variantMenu}>
            <a href="/#services">
              <span className="hover:font-color-logo text-black">{t('services')}</span>
            </a>
          </motion.li>
          <motion.li variants={variantMenu}>/</motion.li>
          <motion.li variants={variantMenu}>
            <a href="/#skills">
              <span className="hover:font-color-logo text-black">{t('skills')}</span>
            </a>
          </motion.li>
          <motion.li variants={variantMenu}>/</motion.li>
          <motion.li variants={variantMenu}>
            <a href="/#our partners">
              <span className="hover:font-color-logo text-black">{t('partners')}</span>
            </a>
          </motion.li>
          <motion.li variants={variantMenu}>/</motion.li>
          <motion.li className="pr-10" variants={variantMenu}>
            <a href="/#contacts">
              <span className="hover:font-color-logo text-black">{t('contact')}</span>
            </a>
          </motion.li>
          <motion.li variants={variantMenu}>
            <LanguageChanger locale={props.locale} />
          </motion.li>
        </motion.ul>
        <div className="z-50 -mt-6 pr-3 lg:hidden">
          <div className="fixed z-50 -ml-3 -mt-3 h-full">
            <button>
              <Hamburger
                size={25}
                rounded
                label='Show menu'
                toggled={mobileToggleMenu}
                toggle={setMobileToggleMenu}
              />
            </button>
          </div>
          <div className={mobileToggleMenu ? '' : 'hidden'}>
            <div
              className='absolute left-0 top-0 h-screen w-screen bg-gray-200 bg-opacity-30'
              onClick={() => setMobileToggleMenu(false)}
            ></div>
            <div className='fixed right-2 top-5 -mt-3 w-64 rounded-xl bg-gradient-to-bl from-pink-600 via-purple-700 to-blue-400 p-1 lg:hidden'>
              <div className='h-full w-full rounded-xl bg-white p-6 pt-12'>
                <ul className='flex flex-col justify-end gap-5 font-semibold'>
                  <li>
                    <div>
                      <a
                        href='/#home'
                        onClick={() => {
                          setMobileToggleMenu(false);
                          return true;
                        }}
                      >
                        <span className='hover:font-color-logo text-2xl text-black'>
                          {t('home')}
                        </span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a
                      href='/#services'
                      onClick={() => {
                        setMobileToggleMenu(false);
                        return true;
                      }}
                    >
                      <span className='hover:font-color-logo text-2xl text-black'>
                        {t('services')}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='/#skills'
                      onClick={() => {
                        setMobileToggleMenu(false);
                        return true;
                      }}
                    >
                      <span className='hover:font-color-logo text-2xl text-black'>
                        {t('skills')}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='/#our partners'
                      onClick={() => {
                        setMobileToggleMenu(false);
                        return true;
                      }}
                    >
                      <span className='hover:font-color-logo text-2xl text-black'>
                        {t('partners')}
                      </span>
                    </a>
                  </li>
                  <li className='pr-10'>
                    <a
                      href='/#contacts'
                      onClick={() => {
                        setMobileToggleMenu(false);
                        return true;
                      }}
                    >
                      <span className='hover:font-color-logo text-2xl text-black'>
                        {t('contact')}
                      </span>
                    </a>
                  </li>
                  <li>
                    <LanguageChanger locale={props.locale} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
