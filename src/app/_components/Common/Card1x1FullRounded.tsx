const Card1x1FullRounded = (props: any) => {
    return <div className={props.className + " bg-white inverted-border-radius relative rounded-bl-2xl flex flex-col items-center justify-center lg:h-[180px] w-[180px] p-5"}>
        {props.children}
    </div>
}

export default Card1x1FullRounded;