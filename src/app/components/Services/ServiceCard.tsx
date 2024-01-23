import Image from 'next/image';
import React from 'react';

import parse from 'html-react-parser';

const ServiceCard = (props: any) => {
  return (
    <div
      className={
        'my-10 ml-4 h-5/6 rounded-3xl bg-white p-10 ' +
        ' min-h-72 w-[90%] sm:h-[32rem] sm:w-96' +
        ' justify-items flex flex-col items-center' +
        ' p-10 duration-500 hover:transform-gpu hover:drop-shadow-lg' +
        props.className
      }
    >
      <div className='flex justify-center '>
        <div className='h-full w-full'>
          <Image
            className='pic-services-color'
            src={props.icon}
            alt={props.serviceName}
            width={100}
            height={100}
          />
        </div>
      </div>
      <div>
        <span className='font-color-logo text-3xl font-bold'>
          {props.serviceName}
        </span>
      </div>
      <div className='sm:col-span-0 col-span-2 w-full pt-8'>
        {parse(props.children)}
      </div>
    </div>
  );
};

export default ServiceCard;
