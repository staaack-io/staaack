"use client"
import Image from "next/image";
import Link from "next/link";
import ButtonStylised from "@/app/_components/Home/ButtonStylised";
import {useEffect, useState} from "react";
import {motion, useAnimation} from "framer-motion";
import {Sling as Hamburger} from 'hamburger-react'

const Navbar = (props: any) => {
    const [mobileToggleMenu, setMobileToggleMenu] = useState(false);
    const controlMenu = useAnimation()
    const controlLogo = useAnimation()

    const variantLogo = {
        visible: {
            rotate: 360,
            opacity: 1,
            scale: 1,
            transition: {
                delay: .5
            }
        },
        loop: {
            rotate: [0, 360, 0],
            scale: [1, 2, 1],
            transition: {
                duration: 1,
                delay: 3,
                repeat: Infinity,
                repeatDelay: 3
            }
        },
    };

    const variantParentMenu = {
        hidden: {
            opacity: 1, scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0,
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        },
        end: {
            y: 50,
            opacity: 0,
            transition: {
                y: {stiffness: 1000}
            }
        },
    };
    const variantMenu = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
        }
    };

    useEffect(() => {
        if (props.showAnim) {
            let promise = new Promise(async (resolve, reject) => {
                await controlMenu.start("visible")
                await controlLogo.start("visible")
            });
        }
    }, [props.showAnim, controlMenu, controlLogo]);

    return <nav className="fixed p-8 h-16 top-0 bg-white md:bg-opacity-30 md:backdrop-blur-2xl w-full z-40">
        <div className="flex justify-between items-center h-full ">
            <motion.div className="flex gap-5 content-center items-center" variants={variantLogo}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }}>
                <Image src="/img/logo.png" alt="Logo staaack" height={40} width={27}/>
            </motion.div>
            <motion.ul className="hidden lg:flex gap-5 justify-end font-semibold" variants={variantParentMenu}>
                <motion.li variants={variantMenu}>
                    <div>
                        <Link href="#home">
                            <div
                                className="text-black hover:font-color-logo">
                                Home
                            </div>
                        </Link>
                    </div>
                </motion.li>
                <motion.li variants={variantMenu}>
                    /
                </motion.li>
                <motion.li variants={variantMenu}>
                    <Link href="#Services">
                            <span
                                className="text-black hover:font-color-logo">
                                Services
                            </span>
                    </Link>
                </motion.li>
                <motion.li variants={variantMenu}>
                    /
                </motion.li>
                <motion.li variants={variantMenu}>
                    <Link href="#Skills">
                            <span
                                className="text-black hover:font-color-logo">
                                Skills
                            </span>
                    </Link>
                </motion.li>
                <motion.li variants={variantMenu}>
                    /
                </motion.li>
                <motion.li variants={variantMenu}>
                    <Link href="#Our Partners">
                            <span
                                className="text-black hover:font-color-logo">
                                Partners
                            </span>
                    </Link>
                </motion.li>
                <motion.li variants={variantMenu}>
                    /
                </motion.li>
                <motion.li className="pr-10" variants={variantMenu}>
                    <Link href="#Contacts">
                            <span
                                className="text-black hover:font-color-logo">
                                Contact
                            </span>
                    </Link>
                </motion.li>
                <motion.li variants={variantMenu}>
                    <ButtonStylised text="HIRE ME !"/>
                </motion.li>
            </motion.ul>
            <div className="lg:hidden -mt-6 pr-3 z-50">
                <div className="fixed z-50 h-full -mt-3 -ml-3">
                    <button>
                        <Hamburger size={25} rounded label="Show menu" toggled={mobileToggleMenu}
                                   toggle={setMobileToggleMenu}/>
                    </button>
                </div>
                <div className={mobileToggleMenu ? "" : "hidden"}>
                    <div className="absolute bg-gray-200 bg-opacity-30 w-screen h-screen top-0 left-0"
                         onClick={() => setMobileToggleMenu(false)}></div>
                    <div
                        className="lg:hidden fixed bg-gradient-to-bl from-pink-600 via-purple-700 to-blue-400 top-5 right-2 p-1 rounded-xl w-64 -mt-3">
                        <div className="h-full w-full bg-white p-6 pt-12 rounded-xl">
                            <ul className="flex flex-col gap-5 justify-end font-semibold">
                                <li>
                                    <div>
                                        <Link href="#home" onClick={() => {
                                            setMobileToggleMenu(false); return true;
                                        }}>
                                                <span
                                                    className="text-black text-2xl hover:font-color-logo">
                                                    Home
                                                </span>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <Link href="#Services" onClick={() => {setMobileToggleMenu(false); return true;}}>
                            <span
                                className="text-black text-2xl hover:font-color-logo">
                                Services
                            </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#Skills" onClick={() => {
                                        setMobileToggleMenu(false); return true;
                                    }}>
                            <span
                                className="text-black text-2xl hover:font-color-logo">
                                Skills
                            </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#Our Partners" onClick={() => {
                                        setMobileToggleMenu(false); return true;
                                    }}>
                            <span
                                className="text-black text-2xl hover:font-color-logo">
                                Partners
                            </span>
                                    </Link>
                                </li>
                                <li className="pr-10">
                                    <Link href="#Contacts" onClick={() => {
                                        setMobileToggleMenu(false); return true;
                                    }}>
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
    </nav>;
}

export default Navbar;