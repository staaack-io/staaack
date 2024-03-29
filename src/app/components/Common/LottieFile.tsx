import React, { useEffect, useRef, useState } from 'react';

const LottieFile = (props: any) => {
  const ref = useRef(null);
  const [updateSrc, setUpdateSrc] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') import('@lottiefiles/lottie-player');

    const element = ref.current;
    // @ts-ignore
    const handleComplete = (event) => {
      if (!updateSrc) {
        setUpdateSrc(true);
        // @ts-ignore
        element.load(props.src);
      }
    };

    // @ts-ignore
    element.addEventListener('complete', handleComplete);

    return () => {
      // @ts-ignore
      element.removeEventListener('complete', handleComplete);
    };
  }, [updateSrc, props.src]);

  return (
    <lottie-player
      ref={ref}
      hover
      autoplay
      mode='bounce'
      src={props.beforeSrc}
      className={props.className + ' cursor-pointer'}
      onClick={() => {
        // @ts-ignore
        ref.current.load(props.src);
        props.onClick();
      }}
    ></lottie-player>
  );
};

export default LottieFile;
