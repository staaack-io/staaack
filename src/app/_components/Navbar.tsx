import Image from "next/image";
import {RiMenu3Fill} from "react-icons/ri";

const Navbar = () => {
    return <nav className="sticky absolute top-0 left-0 h-12 backdrop-blur">
        <div className="flex justify-between gap-1 items-center h-full">
            <div className="flex gap-3 content-center items-center">
                <div>
                    <Image src="./logo.svg" alt="Logo staaack" height={25} width={25}/>
                </div>
                <div className="">
                    staaack
                </div>
            </div>
            <ul className="hidden lg:flex lg:gap-3 justify-end">
                <li>Home</li>
                <li>Services</li>
                <li>Skills</li>
                <li>Partners</li>
                <li>Contact</li>
            </ul>
            <div className="lg:hidden pr-3">
                <RiMenu3Fill size={25}></RiMenu3Fill>
            </div>
        </div>
    </nav>;
}

export default Navbar;