import Image from "next/image";
import {RiMenu3Fill} from "react-icons/ri";
import Link from "next/link";
import ButtonHire from "@/app/_components/Home/ButtonHire";

const Navbar = (props: any) => {
    return <nav className="fixed p-8 h-12 backdrop-blur w-full">
        <div className="flex justify-between items-center h-full ">
            <div className="flex gap-3 content-center items-center">
                <div>
                    <Image src="./img/logo.svg" alt="Logo staaack" height={35} width={35}/>
                </div>
            </div>
            <ul className="hidden lg:flex lg:gap-3 justify-end font-semibold">
                <li>
                    <div>
                        <Link href="#">
                            <div
                                className="transition-all duration-500 ease-out text-black hover:text-transparent hover:bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block  bg-clip-text">
                                Home
                            </div>
                        </Link>
                    </div>
                </li>
                <li>
                    /
                </li>
                <li>
                    <div>
                        <Link href="#">
                            <div
                                className="transition-all duration-500 ease-out text-black hover:text-transparent hover:bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block  bg-clip-text">
                                About me
                            </div>
                        </Link>
                    </div>
                </li>
                <li>
                    /
                </li>
                <li>
                    <Link href="#">
                            <span
                                className="transition duration-500 ease-out text-black hover:text-transparent hover:bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block  bg-clip-text">
                                Services
                            </span>
                    </Link>
                </li>
                <li>
                    /
                </li>
                <li>
                    <Link href="#">
                            <span
                                className="transition duration-500 ease-out text-black hover:text-transparent hover:bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block  bg-clip-text">
                                Skills
                            </span>
                    </Link>
                </li>
                <li>
                    /
                </li>
                <li>
                    <Link href="#">
                            <span
                                className="transition duration-500 ease-out text-black hover:text-transparent hover:bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block  bg-clip-text">
                                Partners
                            </span>
                    </Link>
                </li>
                <li>
                    /
                </li>
                <li className="pr-10">
                    <Link href="#">
                            <span
                                className="transition duration-500 ease-out text-black hover:text-transparent hover:bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block  bg-clip-text">
                                Contact
                            </span>
                    </Link>
                </li>
                <li className="">
                    <ButtonHire text="HIRE ME !"/>
                </li>
            </ul>
            <div className="lg:hidden pr-3">
                <RiMenu3Fill size={25}></RiMenu3Fill>
            </div>
        </div>
    </nav>;
}

export default Navbar;