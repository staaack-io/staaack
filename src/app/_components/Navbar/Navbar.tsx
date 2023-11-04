"use client"
import Image from "next/image";
import {RiMenu3Fill} from "react-icons/ri";
import Link from "next/link";
import ButtonHire from "@/app/_components/Home/ButtonHire";
import {useState} from "react";

const Navbar = (props: any) => {
    const [mobileToggleMenu, setMobileToggleMenu] = useState(false);


    return <div>
        <nav className="fixed p-8 h-12 bg-white md:backdrop-blur-2xl w-full z-30">
            <div className="flex justify-between items-center h-full ">
                <div className="flex gap-3 content-center items-center">
                    <div>
                        <Image src="/img/logo.png" alt="Logo staaack" height={50} width={50}/>
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
                <div className="lg:hidden -mt-6 pr-3 z-50">
                    <div className="fixed z-50">
                        <button onClick={() => setMobileToggleMenu((prevState) => !prevState)}>
                            <RiMenu3Fill size={25}></RiMenu3Fill>
                        </button>
                    </div>
                    <div className={mobileToggleMenu ? "" : "hidden"}>
                        <div
                            className="lg:hidden fixed bg-gradient-to-bl from-pink-600 via-purple-700 to-blue-400 top-5 right-2 p-1 rounded-xl w-52 -mt-3">
                            <div className="h-full w-full bg-white p-6 pt-12">
                                <ul className="flex flex-col gap-3 justify-end font-semibold">
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
                                        <Link href="#">
                            <span
                                className="transition duration-500 ease-out text-black hover:text-transparent hover:bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block  bg-clip-text">
                                Services
                            </span>
                                        </Link>
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
                                        <Link href="#">
                            <span
                                className="transition duration-500 ease-out text-black hover:text-transparent hover:bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block  bg-clip-text">
                                Partners
                            </span>
                                        </Link>
                                    </li>
                                    <li className="pr-10">
                                        <Link href="#">
                            <span
                                className="transition duration-500 ease-out text-black hover:text-transparent hover:bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block  bg-clip-text">
                                Contact
                            </span>
                                        </Link>
                                    </li>
                                    <li className="pt-6 w-full flex justify-center">
                                        <ButtonHire text="HIRE ME !"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    </div>;
}

export default Navbar;