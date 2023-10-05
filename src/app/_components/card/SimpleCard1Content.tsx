import Link from "next/link";
import {GiProcessor} from "react-icons/gi";
import {CgWorkAlt} from "react-icons/cg";
import Image from "next/image";

const SimpleCard1Content = (props) => {
    return <>
        <div className="h-full w-full overflow-hidden">
            <div className="flex justify-center items-center text-purple-300 bg-gradient-to-l from-purple-700 via-purple-800 to-purple-900 rounded-full p-3">
                <Image src={props.imgSrc} height={35} width={35} alt="image on the about section"/>
            </div>
            <div className="mt-3 h-full w-full">
                <span className="font-bold text-transparent bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block bg-clip-text">
                    {props.text1}
                </span>
                <div className="text-xl text-purple-600">{props.text2}</div>
            </div>
        </div>
    </>;
}

export default SimpleCard1Content;