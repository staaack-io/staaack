const CardMap = (props: any) => {
    return <div className={props.className +
        " bg-white rounded-2xl p-5" +
        " flex flex-col items-center justify-center" +
        " h-[180px] w-full sm:h-[265px] md:h-[215px] lg:h-[190px] lg:w-[402px] xl:h-[210px] xl:w-[440px] 2xl:w-[395px] 2xl:h-[190px]" +
        " hover:drop-shadow-lg hover:scale-102 hover:transform-gpu duration-500"
    }>
        {props.children}
    </div>
}

export default CardMap;