import React from 'react';
import { motion } from 'framer-motion';

const item = {
  hidden: { x: 20, opacity: 1 },
  visible: {
    x: 0,
    opacity: 1,
  },
};
const Tag = (props: any) => {
  return (
    <motion.div
      className={
        'border-[ rounded-3xl border-2 bg-white px-6 py-3 font-sans' +
        props.borderColor +
        '] ' +
        props.className
      }
      variants={item}
    >
      {props.tagName}
      <div className='border-[#FE05C288]'></div>
      <div className='border-[#FF137888]'></div>
      <div className='border-[#C600B088]'></div>
      <div className='border-[#6711C588]'></div>
      <div className='border-[#54A4FF88]'></div>
      <div className='border-[#29D9FF88]'></div>
    </motion.div>
  );
};

export default Tag;
