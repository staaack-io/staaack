const Card1x1 = (props: any) => {
    return <div className={props.className +
        " bg-white rounded-2xl p-5" +
        " flex flex-col items-center justify-center" +
        " aspect-square w-[full] sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]" +
        " hover:drop-shadow-lg hover:transform-gpu duration-500"
    }>
        {props.children}
    </div>
}

export default Card1x1;