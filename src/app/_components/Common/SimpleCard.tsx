const SimpleCard = (props: any) => {
    return <div className="flex items-center justify-center simple-card h-full w-full p-5">
        {props.children}
    </div>
}

export default SimpleCard;