import Link from 'next/link';

const ButtonHire = (props: any) => {
  return (
    <Link
      href='#'
      className='shadow-s group relative items-center justify-center overflow-hidden rounded-md border-2 border-black px-2 py-2 font-bold text-black hover:border-transparent hover:text-white'
    >
      <span className='hover:bg-color absolute inset-0 -m-1 h-full w-full opacity-0 transition duration-300 ease-out group-hover:opacity-100'></span>
      <span className='absolute h-0 w-0 rounded-full bg-white opacity-5 transition-all duration-300 ease-out'></span>
      <span className='relative'>{props.text}</span>
    </Link>
  );
};

export default ButtonHire;
