import Link from "next/link";
import SimpleCard from "@/app/_components/card/SimpleCard";
import Image from "next/image";
import DoubleCard from "@/app/_components/card/DoubleCard";

const ServiceCard = (props) => {
    return <div className="flex flex-col justify-center relative sm:py-12">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                        <Image src={props.icon} alt={props.serviceName} width={35} height={35}/>
                        <div className="space-y-2">
                            {props.serviceName}
                            <p className="text-slate-800">{props.children}</p>
                        </div>
                    </div>
            </div>
        </div>
}

export default ServiceCard;