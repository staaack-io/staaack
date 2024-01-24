import React from 'react';
import { Map, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CardMap = (props: any) => {
  return (
    <div
      className={
        props.className +
        ' rounded-3xl bg-white' +
        ' flex flex-col items-center justify-center' +
        ' h-[180px] w-full sm:h-[265px] md:h-[215px] lg:h-[190px] lg:w-[402px] xl:h-[210px] xl:w-[440px] 2xl:h-[190px] 2xl:w-[395px]' +
        ' duration-500 hover:transform-gpu hover:drop-shadow-lg' +
        ' bg-map cursor-pointer'
      }
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-full border-[#888] bg-white bg-opacity-60 p-7">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
        >
          <Image
            src={'/img/logo.png'}
            alt={'Logo staaack'}
            height={45}
            width={45}
            className=""
          ></Image>
        </motion.div>
      </div>
    </div>
  );
};

export default CardMap;
