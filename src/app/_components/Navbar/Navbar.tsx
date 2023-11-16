"use client"
import Image from "next/image";
import {RiMenu3Fill} from "react-icons/ri";
import Link from "next/link";
import ButtonStylised from "@/app/_components/Home/ButtonStylised";
import {useState} from "react";

const Navbar = (props: any) => {
    const [mobileToggleMenu, setMobileToggleMenu] = useState(false);


    return <div>
        <nav className="fixed p-8 h-12 bg-white md:bg-transparent md:backdrop-blur-2xl w-full z-30">
            <div className="flex justify-between items-center h-full ">
                <div className="flex gap-3 content-center items-center">
                        <Image src="/img/logo.png" alt="Logo staaack" height={50} width={35}/>
                </div>
                <ul className="hidden lg:flex lg:gap-3 justify-end font-semibold">
                    <li>
                        <div>
                            <Link href="#home">
                                <div
                                    className="text-black hover:font-color-logo">
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
                            <Link href="#About">
                                <div
                                    className="text-black hover:font-color-logo">
                                    About me
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li>
                        /
                    </li>
                    <li>
                        <Link href="#Services">
                            <span
                                className="text-black hover:font-color-logo">
                                Services
                            </span>
                        </Link>
                    </li>
                    <li>
                        /
                    </li>
                    <li>
                        <Link href="#Skills">
                            <span
                                className="text-black hover:font-color-logo">
                                Skills
                            </span>
                        </Link>
                    </li>
                    <li>
                        /
                    </li>
                    <li>
                        <Link href="#Our Partners">
                            <span
                                className="text-black hover:font-color-logo">
                                Partners
                            </span>
                        </Link>
                    </li>
                    <li>
                        /
                    </li>
                    <li className="pr-10">
                        <Link href="#Contact us">
                            <span
                                className="text-black hover:font-color-logo">
                                Contact
                            </span>
                        </Link>
                    </li>
                    <li className="">
                        <ButtonStylised text="HIRE ME !"/>
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
                            className="lg:hidden fixed bg-gradient-to-bl from-pink-600 via-purple-700 to-blue-400 top-5 right-2 p-1 rounded-xl w-64 -mt-3">
                            <div className="h-full w-full bg-white p-6 pt-12 rounded-xl">
                                <ul className="flex flex-col gap-7 justify-end font-semibold">
                                    <li>
                                        <div>
                                            <Link href="#home">
                                                <span
                                                    className="text-black text-2xl hover:font-color-logo">
                                                    Home
                                                </span>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Link href="#About">
                                                <span
                                                    className="text-black text-2xl hover:font-color-logo">
                                                    About me
                                                </span>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Link href="#Services">
                            <span
                                className="text-black text-2xl hover:font-color-logo">
                                Services
                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#Skills">
                            <span
                                className="text-black text-2xl hover:font-color-logo">
                                Skills
                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#Our Partners">
                            <span
                                className="text-black text-2xl hover:font-color-logo">
                                Partners
                            </span>
                                        </Link>
                                    </li>
                                    <li className="pr-10">
                                        <Link href="#Contact Us">
                            <span
                                className="text-black text-2xl hover:font-color-logo">
                                Contact
                            </span>
                                        </Link>
                                    </li>
                                    <li className="pt-6 w-full flex justify-center">
                                        <ButtonStylised text="HIRE ME !"/>
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