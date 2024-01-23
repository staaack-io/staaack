import Link from 'next/link';

const ButtonStylised = (props: any) => {
  return (
    <Link
      href='#'
      className='shadow-s anim-bg-gradient anim-font-gradient relative items-center justify-center overflow-hidden rounded-full border-2 border-black px-4 py-2 font-bold text-black'
    >
      <span className='relative'>{props.text}</span>
    </Link>
  );
};

export default ButtonStylised;
