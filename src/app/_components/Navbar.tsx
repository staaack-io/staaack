import Image from "next/image";
import {RiMenu3Fill} from "react-icons/ri";
import Link from "next/link";
import ButtonHire from "@/app/_components/button/ButtonHire";

const Navbar = (props) => {
    return <nav className="sticky absolute top-0 left-0 h-12 backdrop-blur" {...props}>
        <div className="flex justify-between gap-1 items-center h-full">
            <div className="flex gap-3 content-center items-center">
                <div>
                    <Image src="./logo.svg" alt="Logo staaack" height={35} width={35}/>
                </div>
            </div>
            <ul className="hidden lg:flex lg:gap-3 justify-end font-semibold">
                <li>
                    <div>
                        <Link href="#">
                            <div className="transition-all duration-500 ease-out text-black hover:text-transparent hover:bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block  bg-clip-text">
                                home
                            </div>
                        </Link>
                    </div>
                </li>
                <li>
                    /
                </li>
                <li>
                    <Link href="#">
                            <span className="transition duration-500 ease-out text-black hover:text-transparent hover:bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block  bg-clip-text">
                                Services
                            </span>
                    </Link>
                </li>
                <li>
                    /
                </li>
                <li>
                    <Link href="#">
                            <span className="transition duration-500 ease-out text-black hover:text-transparent hover:bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block  bg-clip-text">
                                Skills
                            </span>
                    </Link>
                </li>
                <li>
                    /
                </li>
                <li>
                    <Link href="#">
                            <span className="transition duration-500 ease-out text-black hover:text-transparent hover:bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block  bg-clip-text">
                                Partners
                            </span>
                    </Link>
                </li>
                <li>
                    /
                </li>
                <li className="pr-10">
                    <Link href="#">
                            <span className="transition duration-500 ease-out text-black hover:text-transparent hover:bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block  bg-clip-text">
                                Contact
                            </span>
                    </Link>
                </li>
                <li className="">
                    <ButtonHire text="HIRE ME !" />
                </li>
            </ul>
            <div className="lg:hidden pr-3">
                <RiMenu3Fill size={25}></RiMenu3Fill>
            </div>
        </div>
    </nav>;
}

export default Navbar;