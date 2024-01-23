const CardTechnologies = (props: any) => {
  return (
    <div
      className={
        props.className +
        ' rounded-2xl bg-cs-purple-2-light' +
        ' flex flex-col items-center justify-center' +
        ' aspect-square w-full sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]' +
        ' duration-500 hover:transform-gpu hover:drop-shadow-lg' +
        ' no-scrollbar overflow-y-scroll'
      }
    >
      <div className='flex h-full w-full overflow-auto text-white'>
        <span className='relative overflow-x-hidden text-3xl'>
          java js react html css
          <br />
          architecture security
          <br />
          devops
          <br />
          advices
          <br />
          courses
        </span>
      </div>
    </div>
  );
};

export default CardTechnologies;
