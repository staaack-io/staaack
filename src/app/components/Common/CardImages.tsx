import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';

const CardImages = (props: any) => {
  return (
    <div
      className={
        props.className +
        ' rounded-3xl bg-white' +
        ' flex flex-col items-center justify-center' +
        ' h-[180px] w-full sm:h-[265px] md:h-[215px] lg:h-[190px] lg:w-[402px] xl:h-[210px] xl:w-[440px] 2xl:h-[190px] 2xl:w-[395px]' +
        ' duration-500 hover:transform-gpu hover:drop-shadow-lg'
      }
    >
      <div className='flex h-full w-full items-center justify-center p-4 sm:gap-1'>
        <Image
          src='/img/flag-fr.svg'
          alt='logo'
          width={90}
          height={90}
          className='ml-2 p-2'
        ></Image>
        <Image
          src='/img/flag-en.svg'
          alt='logo'
          width={90}
          height={90}
          className='mr-2 p-2'
        ></Image>
        <Image
          src='/img/aws-certif.png'
          alt='logo'
          width={90}
          height={90}
          className='p-2 '
        ></Image>
        <Image
          src='/img/azure-certif.png'
          alt='logo'
          width={90}
          height={90}
          className='mr-2 p-2'
        ></Image>
      </div>
    </div>
  );
};

export default CardImages;
