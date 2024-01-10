import Link from "next/link";

const ButtonStylised = (props: any) => {
    return <Link href="#"
                 className="relative items-center justify-center px-4 py-2 overflow-hidden font-bold text-black rounded-full shadow-s border-2 border-black anim-bg-gradient anim-font-gradient">
        <span className="relative">{props.text}</span>
    </Link>
}

export default ButtonStylised;