import Image from 'next/image';
import React from 'react';

const PartnerCard = (props: any) => {
  return (
    <>
      {(props.selectedSectionPartner == props.category ||
        props.selectedSectionPartner == 'All') && (
        <div className='flex flex-col items-center justify-center p-5'>
          <div className='h-full grayscale duration-500 hover:transform-gpu hover:drop-shadow-lg hover:grayscale-0'>
            <div className='flex h-full items-center justify-center rounded-3xl p-8 hover:bg-white'>
              <Image
                src={'/img/logo/' + props.image}
                alt=''
                height={150}
                width={150}
                className=''
              ></Image>
            </div>
          </div>
          <span className='pt-10 text-xl'>{props.name}</span>
          <span className='text-md'>{props.city}</span>
        </div>
      )}
    </>
  );
};

export default PartnerCard;
