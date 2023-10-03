import Link from "next/link";

const ButtonHire = ({text}) => {
    return <Link href="#_" className="relative items-center justify-center px-2 py-2 overflow-hidden font-bold text-black hover:text-white rounded-md shadow-s group border-2 border-black hover:border-transparent">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br rounded-md from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full opacity-5"></span>
                <span className="relative">{text}</span>
            </Link>
}

export default ButtonHire;