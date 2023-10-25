const SimpleCard = (props) => {
    return <>
        <div className="flex items-center justify-center simple-card h-full w-full p-5 md:p-10">
            {props.children}
        </div>
    </>;
}

export default SimpleCard;