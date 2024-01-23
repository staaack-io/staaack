import React from 'react';
import { motion } from 'framer-motion';

const Hexagon = (props: any) => {
  return (
    <>
      {(props.selectedSkillCategory == props.category ||
        props.selectedSkillCategory == 'All') && (
        <li className='hex-grid__item cursor-pointer transition duration-700 ease-out hover:z-10 hover:scale-125'>
          <motion.div className='hex-grid__content' animate={{ x: 10 }}>
            {props.children}
          </motion.div>
        </li>
      )}
    </>
  );
};

export default Hexagon;
