const CardTechnologies = (props: any) => {
    return <div className={props.className +
        " bg-cs-purple-2-light rounded-2xl" +
        " flex flex-col items-center justify-center" +
        " aspect-square w-full sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]" +
        " hover:drop-shadow-lg hover:transform-gpu duration-500" +
        " overflow-y-scroll no-scrollbar"
    }>
        <div className="flex h-full w-full text-white overflow-auto">
            <span className="relative text-3xl overflow-x-hidden">
                java js react html css
                <br/>architecture security
                <br/>devops
                <br/>advices
                <br/>courses
            </span>

        </div>
    </div>
}

export default CardTechnologies;