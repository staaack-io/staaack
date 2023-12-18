const Card1x1 = (props: any) => {
    return <div className={props.className + " bg-white rounded-2xl flex flex-col items-center justify-center h-[150px] w-full xl:h-[180px] xl:w-[180px] p-5 hover:drop-shadow-lg hover:scale-102 hover:transform-gpu duration-500"}>
        {props.children}
    </div>
}

export default Card1x1;