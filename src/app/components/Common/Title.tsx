import React from 'react';

const Title = (props: any) => {
  return (
    <div className='pt-15 sticky flex flex-col items-baseline gap-1 px-20 text-black md:flex-row'>
      <div
        id={String(props.title).toLowerCase()}
        className='text-4xl font-semibold md:text-3xl'
      >
        {props.title}
      </div>
      <div
        id={props.subtitle}
        className='text-2xl text-gray-600 md:pl-3 md:text-2xl'
      >
        {props.subtitle}
      </div>
    </div>
  );
};

export default Title;
