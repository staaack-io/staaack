import LottieFile from '@/app/components/Common/LottieFile';
import React from 'react';
import { useTranslations } from 'next-intl';

const CardResume = (props: any) => {
  const t = useTranslations('home');
  return (
    <div
      className={
        props.className +
        ' rounded-3xl border-2 border-[#54A4FF] bg-white p-2' +
        ' flex flex-col items-center justify-center' +
        ' aspect-square w-full sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]' +
        ' overflow-hidden' +
        ' duration-500  hover:transform-gpu hover:drop-shadow-lg'
      }
    >
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <div className='h-14 w-14 sm:h-28 sm:w-28'>
          <LottieFile
            beforeSrc='/lottie/resume-in.json'
            src='/lottie/resume.json'
            className='h-10 w-10 cursor-pointer'
            onClick={() => {
              window.open('https://staaack.io/cv-alexis-detrie-2024.pdf');
            }}
          ></LottieFile>
        </div>
        <div className='font-color-logo pt-2 text-center'>
          {t('download-resume')}
        </div>
      </div>
    </div>
  );
};

export default CardResume;
