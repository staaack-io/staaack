import Link from "next/link";
import {GiProcessor} from "react-icons/gi";
import {CgWorkAlt} from "react-icons/cg";
import Image from "next/image";

const SimpleCard8Content = (props) => {
    return <div className="grid grid-cols-1">
        <div className="flex justify-center items-center text-7xl">
            <Image src={"./planet.svg"} alt={"planet"} height={65} width={65}></Image>
        </div>
        <div className="flex justify-center items-center text-xl">
            <span className="font-bold inline-block">Only remote work</span>
        </div>
    </div>
}

export default SimpleCard8Content;