const SimpleCard = (props) => {
    return <>
        <div className="flex items-center justify-center bg-white m-0.5 rounded-3xl p-6 shadow-2xl h-full w-full">
            {props.children}
        </div>
    </>;
}

export default SimpleCard;