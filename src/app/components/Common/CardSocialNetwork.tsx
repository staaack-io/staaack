import React from 'react';
import Image from 'next/image';

const CardSocialNetwork = (props: any) => {
  return (
    <div
      className={
        ' rounded-3xl bg-black p-2' +
        ' flex flex-col items-center justify-center' +
        ' aspect-square w-full sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]' +
        ' duration-500 hover:transform-gpu hover:drop-shadow-lg ' +
        props.className
      }
    >
      <div className='flex items-center justify-items-center gap-2'>
        <Image
          src='/img/logo/github.svg'
          alt='github logo'
          height={80}
          width={80}
          className='cursor-pointer invert'
          onClick={() => {
            window.open('https://github.com/adetrie');
          }}
        />
        <Image
          src='/img/logo/linkedin.svg'
          alt='linkedin logo'
          height={80}
          width={80}
          className='inverse-img cursor-pointer invert'
          onClick={() => {
            window.open('https://www.linkedin.com/in/detriealexis/');
          }}
        />
      </div>
    </div>
  );
};

export default CardSocialNetwork;
