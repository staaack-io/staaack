const CardPhoto = (props: any) => {
    return <div className={props.className + " bg-white rounded-2xl flex flex-col items-center justify-center h-[180px] w-[180px] p-5 hover:drop-shadow-lg hover:scale-102 hover:transform-gpu duration-500"}>
        {props.children}
    </div>
}

export default CardPhoto;