import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

const CardMe = (props: any) => {
  const t = useTranslations('home');
  return (
    <div
      className={
        props.className +
        ' rounded-3xl bg-white p-4' +
        ' flex flex-col items-center justify-center' +
        ' h-[360px] w-full sm:h-[530px] md:h-[450px] lg:h-[400px] xl:min-h-[380px]' +
        '  duration-500 hover:transform-gpu hover:drop-shadow-lg'
      }
    >
      <div className='flex h-full w-full flex-col gap-2 overflow-x-auto rounded-3xl'>
        <div className="">
          <video autoPlay muted playsInline className="rounded-full border-2 border-[#29d9ff50] w-36 h-36 ">
            <source src="/video/memoji.mp4" type="video/mp4" />
          </video>
        </div>
        <p className='p-3'>
          {t.rich('presentation', {
            b: (chunks) => <b>{chunks}</b>,
            br: (chunks) => <br/>,
            ahubspot: (chunks) => <a
              href="https://meetings-eu1.hubspot.com/alexis-detrie"
              className="underline"
              target="_blank"
            >{chunks}</a>,
            acontact: (chunks) => <a href="/#contacts" className="underline">{chunks}</a>
          })}
        </p>
      </div>
    </div>
  );
};

export default CardMe;
