import Link from "next/link";

const ButtonHire = (props: any) => {
    return <Link href="#"
                 className="relative items-center justify-center px-2 py-2 overflow-hidden font-bold text-black hover:text-white rounded-md shadow-s group border-2 border-black hover:border-transparent">
        <span
            className="-m-1 absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 hover:bg-color group-hover:opacity-100"></span>
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full opacity-5"></span>
        <span className="relative">{props.text}</span>
    </Link>
}

export default ButtonHire;