const CardPhoto = (props: any) => {
    return <div className={props.className +
        " bg-white rounded-2xl p-5" +
        " flex flex-col items-center justify-center" +
        " h-[360px] w-full sm:h-[530px] md:h-[450px] lg:h-[400px] xl:min-h-[380px] xl:h-full" +
        "  hover:drop-shadow-lg hover:transform-gpu duration-500"
    }>
        {props.children}
    </div>
}

export default CardPhoto;