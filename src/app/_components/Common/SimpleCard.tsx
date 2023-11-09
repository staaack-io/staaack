const SimpleCard = (props: any) => {
    return <div className="bg-white rounded-2xl flex items-center justify-center h-full w-full p-5 drop-shadow-md hover:drop-shadow-lg hover:scale-102 hover:transform-gpu duration-500">
        {props.children}
    </div>
}

export default SimpleCard;