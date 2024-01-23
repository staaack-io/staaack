import Image from 'next/image';
import React from 'react';

const CardAI = (props: any) => {
  return (
    <div
      className={
        ' rounded-3xl bg-white ' +
        ' flex flex-col items-center justify-center' +
        ' aspect-square w-full sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]' +
        ' duration-500 hover:transform-gpu hover:drop-shadow-lg ' +
        props.className
      }
    >
      <span className='absolute text-center opacity-20'>
        Discuss with my AI bot
      </span>
      <div className='flex h-full w-full items-center justify-center transition hover:scale-150'>
        <div className='flex h-full items-center justify-center opacity-20'>
          <div id='ripple-mini'>
            <Image
              src={'/img/cards/bg-ai.png'}
              alt=''
              height={100}
              width={100}
              className='rounded-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardAI;
