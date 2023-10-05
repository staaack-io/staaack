import Link from "next/link";
import {GiProcessor} from "react-icons/gi";
import {CgWorkAlt} from "react-icons/cg";
import Image from "next/image";

const SimpleCard2Content = (props) => {
    return <div className="flex justify-center items-center">
        <div className="h-full w-full overflow-hidden">
            <div className="flex justify-center items-center">
                <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-600 via-purple-700 to-blue-400 inline-block bg-clip-text">Permis</span>
            </div>
            <div className="flex justify-center items-center w-full">
                <div className="grid grid-cols-2 text-3xl">
                    <div className="mr-4">🚗</div>
                    <div></div>
                    <div></div>
                    <div className="ml-3">🏍</div>
                </div>
            </div>
        </div>
    </div>;
}

export default SimpleCard2Content;